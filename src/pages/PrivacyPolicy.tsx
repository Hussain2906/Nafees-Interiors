import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-sage-50">
      {/* Header */}
      <header className="bg-sage-900 py-6">
        <div className="px-6 lg:px-[7vw]">
          <div className="flex items-center justify-between">
            <Link to="/" className="font-display text-xl font-bold text-white">
              Nafees
            </Link>
            <Link
              to="/"
              className="inline-flex items-center text-sage-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-16">
        <div className="px-6 lg:px-[7vw] max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brass/10 mb-6">
              <Shield className="w-8 h-8 text-brass" />
            </div>
            <h1 className="text-h2 font-display font-bold text-sage-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-sage-600">
              Last updated: February 2026
            </p>
          </div>

          <div className="bg-white rounded-[28px] shadow-soft p-8 lg:p-12 space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-brass" />
                <h2 className="text-xl font-display font-semibold text-sage-900">
                  Information We Collect
                </h2>
              </div>
              <p className="text-sage-700 leading-relaxed mb-4">
                Nafees Interiors and Decor collects information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-sage-700 space-y-2 ml-4">
                <li>Fill out our contact form or inquiry forms</li>
                <li>Request a quote for our services</li>
                <li>Contact us via email, phone, or social media</li>
                <li>Subscribe to our updates or newsletters</li>
              </ul>
              <p className="text-sage-700 leading-relaxed mt-4">
                The information collected may include your name, email address, phone number, project details, and any other information you choose to provide.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-5 h-5 text-brass" />
                <h2 className="text-xl font-display font-semibold text-sage-900">
                  How We Use Your Information
                </h2>
              </div>
              <p className="text-sage-700 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-sage-700 space-y-2 ml-4">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Process your project requests and quotations</li>
                <li>Communicate with you about your project</li>
                <li>Send you updates about our services (with your consent)</li>
                <li>Improve our services and customer experience</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-brass" />
                <h2 className="text-xl font-display font-semibold text-sage-900">
                  Image and Content Rights
                </h2>
              </div>
              <p className="text-sage-700 leading-relaxed mb-4">
                All images, designs, and content displayed on this website are the exclusive property of Nafees Interiors and Decor. This includes:
              </p>
              <ul className="list-disc list-inside text-sage-700 space-y-2 ml-4">
                <li>Project photographs and portfolio images</li>
                <li>Interior design concepts and 3D visualizations</li>
                <li>Written content and descriptions</li>
                <li>Logo and brand materials</li>
              </ul>
              <p className="text-sage-700 leading-relaxed mt-4">
                <strong>Unauthorized use is strictly prohibited.</strong> No person or entity may copy, reproduce, distribute, publish, display, modify, create derivative works from, or exploit any content from this website without prior written consent from Nafees Interiors and Decor. Violation of these rights may result in legal action under applicable copyright and intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-sage-900 mb-4">
                Data Security
              </h2>
              <p className="text-sage-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-sage-900 mb-4">
                Third-Party Disclosure
              </h2>
              <p className="text-sage-700 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to trusted partners who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-sage-900 mb-4">
                Your Rights
              </h2>
              <p className="text-sage-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-sage-700 space-y-2 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-sage-900 mb-4">
                Cookies
              </h2>
              <p className="text-sage-700 leading-relaxed">
                Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect certain functionality of the website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-sage-900 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-sage-700 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-sage-900 mb-4">
                Contact Us
              </h2>
              <p className="text-sage-700 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-sage-100 rounded-xl">
                <p className="text-sage-700"><strong>Email:</strong> hzdalal@hotmail.com</p>
                <p className="text-sage-700"><strong>Phone:</strong> +91 84466 65252</p>
                <p className="text-sage-700"><strong>Address:</strong> Shop 13, Premanand Park, Fatema Nagar, Wanowrie, Pune 411040</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-sage-900 py-8">
        <div className="px-6 lg:px-[7vw]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-sage-500">
              {new Date().getFullYear()} Nafees Interiors and Decor. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-sage-500">
              <Link to="/privacy-policy" className="text-white">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
