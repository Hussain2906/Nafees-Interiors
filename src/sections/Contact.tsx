import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, Instagram } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: leftRef.current,
            start: 'top 80%',
            end: 'top 55%',
            scrub: 0.4,
          },
        }
      );

      gsap.fromTo(
        formRef.current,
        { x: 40, opacity: 0, scale: 0.98 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 0.4,
          },
        }
      );

      const details = detailsRef.current?.children || [];
      gsap.fromTo(
        details,
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: detailsRef.current,
            start: 'top 85%',
            end: 'top 65%',
            scrub: 0.4,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => null);
        const message =
          errorBody?.message || 'Something went wrong. Please try again.';
        throw new Error(message);
      }

      setSubmitMessage(
        'Thank you for your inquiry! We will get back to you within one business day.'
      );
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: '',
      });
    } catch (error) {
      console.error('Contact form error', error);
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : 'Unable to send right now. Please call or email us directly.'
      );
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 6000);
    }
  };

  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hzdalal@hotmail.com',
      href: 'mailto:hzdalal@hotmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 84466 65252',
      href: 'tel:+918446665252',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Shop 13, Premanand Park, Fatema Nagar, Wanowrie, Pune 411040',
      href: '#',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@Nafees_Traders_53',
      href: 'https://instagram.com/Nafees_Traders_53',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full py-20 lg:py-28 bg-sage-800 z-[90]"
    >
      <div className="px-6 lg:px-[7vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div ref={leftRef}>
            <h2 className="text-h2 font-display font-bold text-white mb-4">
              Start Your Project
            </h2>
            <p className="text-lg text-sage-300 leading-relaxed mb-10 max-w-md">
              Tell us what you are building. We will reply within one business day with next steps. Kitchen, bathroom, and single room renovations completed in less than 5 days.
            </p>

            <div ref={detailsRef} className="space-y-6">
              {contactDetails.map((detail, index) => (
                <a
                  key={index}
                  href={detail.href}
                  target={detail.href.startsWith('http') ? '_blank' : undefined}
                  rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage-700 flex items-center justify-center group-hover:bg-brass/20 transition-colors">
                    <detail.icon className="w-5 h-5 text-sage-400 group-hover:text-brass transition-colors" />
                  </div>
                  <div>
                    <p className="text-micro text-sage-400 mb-1">
                      {detail.label}
                    </p>
                    <p className="text-white group-hover:text-brass transition-colors">
                      {detail.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <a
              href="tel:+918446665252"
              className="mt-10 inline-flex items-center text-sm font-medium text-brass hover:text-brass-light transition-colors"
            >
              <Phone className="mr-2 w-4 h-4" />
              Call for immediate assistance
            </a>
          </div>

          <div
            ref={formRef}
            className="bg-white rounded-[28px] p-8 lg:p-10 shadow-card"
          >
            {submitMessage && (
              <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl">
                {submitMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-sage-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-sage-200 focus:border-brass focus:ring-2 focus:ring-brass/20 outline-none transition-all"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-sage-200 focus:border-brass focus:ring-2 focus:ring-brass/20 outline-none transition-all"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-sage-200 focus:border-brass focus:ring-2 focus:ring-brass/20 outline-none transition-all"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-sage-700 mb-2">
                  Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-sage-200 focus:border-brass focus:ring-2 focus:ring-brass/20 outline-none transition-all bg-white"
                  required
                >
                  <option value="">Select project type</option>
                  <option value="bathroom">Bathroom Renovation</option>
                  <option value="kitchen">Kitchen Renovation</option>
                  <option value="painting">Painting Services</option>
                  <option value="tiling">Tiling Work</option>
                  <option value="full-home">Full Home Renovation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-sage-700 mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-sage-200 focus:border-brass focus:ring-2 focus:ring-brass/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <button 
                type="submit" 
                className="btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send className="mr-2 w-4 h-4" />
                    Send inquiry
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
