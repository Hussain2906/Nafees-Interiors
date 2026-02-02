import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-sage-900 py-12 z-[100]">
      <div className="px-6 lg:px-[7vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <a
              href="#"
              className="font-display text-2xl font-bold text-white mb-4 block"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Nafees
            </a>
            <p className="text-sage-400 leading-relaxed max-w-sm mb-6">
              Modern homes, warm materials, and layouts that fit your life. Interior design studio based in Pune. 400+ projects completed in 20+ years.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/Nafees_Traders_53"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-sage-800 flex items-center justify-center text-sage-400 hover:bg-brass/20 hover:text-brass transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Our Work', href: '#projects' },
                { label: 'Services', href: '#services' },
                { label: 'Painting', href: '#painting' },
                { label: 'Process', href: '#process' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sage-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sage-400">
              <li>
                <a
                  href="mailto:hzdalal@hotmail.com"
                  className="hover:text-white transition-colors"
                >
                  hzdalal@hotmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918446665252"
                  className="hover:text-white transition-colors"
                >
                  +91 84466 65252
                </a>
              </li>
              <li className="text-sm">
                Shop 13, Premanand Park,
                <br />
                Fatema Nagar, Wanowrie,
                <br />
                Pune 411040
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-sage-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-sage-500">
            {currentYear} Nafees Interiors and Decor. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-sage-500">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
