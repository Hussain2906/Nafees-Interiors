import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.API_PORT || 8787;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN
      ? process.env.CORS_ORIGIN.split(',').map((v) => v.trim())
      : '*',
  })
);
app.use(express.json());

const requiredEnv = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'SMTP_FROM',
  'CONTACT_TO',
];

const missingEnv = requiredEnv.filter((key) => !process.env[key]);
if (missingEnv.length) {
  console.warn(
    `Missing env variables: ${missingEnv.join(
      ', '
    )}. Email sending will fail until they are set.`
  );
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, projectType, message } = req.body || {};

  if (!name || !email || !phone || !projectType || !message) {
    return res
      .status(400)
      .json({ message: 'Please fill out all required fields.' });
  }

  if (missingEnv.length) {
    return res.status(503).json({
      message:
        'Email is not configured yet. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_TO on the server.',
    });
  }

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: process.env.CONTACT_TO,
    replyTo: email,
    subject: `New inquiry from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Project type: ${projectType}`,
      '',
      'Message:',
      message,
    ].join('\n'),
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Message sent successfully.' });
  } catch (err) {
    console.error('Email send failed:', err);
    res
      .status(500)
      .json({ message: 'Could not send email. Please try again later.' });
  }
});

app.listen(port, () => {
  console.log(`Contact API listening on http://localhost:${port}`);
});
