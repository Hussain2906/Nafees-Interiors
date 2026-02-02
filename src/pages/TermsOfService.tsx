import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Scale, AlertCircle, CheckCircle } from 'lucide-react';

const TermsOfService = () => {
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
              <Scale className="w-8 h-8 text-brass" />
            </div>
            <h1 className="text-h2 font-display font-bold text-sage-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-sage-600">
              Last updated: February 2026
            </p>
          </div>

          <div className="bg-white rounded-[28px] shadow-soft p-8 lg:p-12 space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-brass" />
                <h2 className="text-xl font-display font-semibold text-sage-900">
                  Acceptance of Terms
                </h2>
              </div>
              <p className="text-sage-700 leading-relaxed">
                By accessing and using the website of Nafees Interiors and Decor, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-brass" />
                <h2 className="text-xl font-display font-semibold text-sage-900">
                  Our Services
                </h2>
              </div>
              <p className="text-sage-700 leading-relaxed mb-4">
                Nafees Interiors and Decor provides the following services:
              </p>
              <ul className="list-disc list-inside text-sage-700 space-y-2 ml-4">
                <li>Interior design and consultation</li>
                <li>Bathroom renovation and remodeling</li>
                <li>Kitchen renovation and modular kitchen installation</li>
                <li>Painting services (interior and exterior)</li>
                <li>Tiling work for floors and walls</li>
                <li>Carpentry and furniture work</li>
                <li>Electrical and plumbing services</li>
                <li>Full home renovation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-sage-900 mb-4">
                Project Timeline
              </h2>
              <p className="text-sage-700 leading-relaxed mb-4">
                We strive to complete projects within the agreed timelines:
              </p>
              <ul className="list-disc list-inside text-sage-700 space-y-2 ml-4">
                <li>Kitchen, bathroom, and single room renovations: Less than 5 days</li>
                <li>Full home renovations: Timeline varies based on project scope</li>
                <li>Painting services: Depends on area size and number of coats</li>
                <li>Tiling work: Depends on area and complexity of design</li>
              </ul>
              <p className="text-sage-700 leading-relaxed mt-4">
                While we make every effort to meet these timelines, unforeseen circumstances may cause delays. We will communicate any changes promptly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-sage-900 mb-4">
                Quotations and Payments
              </h2>
              <p className="text-sage-700 leading-relaxed mb-4">
                All quotations provided are valid for 30 days unless otherwise specified. Our payment terms are as follows:
              </p>
              <ul className="list-disc list-inside text-sage-700 space-y-2 ml-4">
                <li>50% advance payment to commence work</li>
                <li>40% payment upon 75% completion of work</li>
                <li>10% final payment upon project handover</li>
              </ul>
              <p className="text-sage-700 leading-relaxed mt-4">
                Payment methods accepted: Cash, Bank Transfer, UPI, and Cheque.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-sage-900 mb-4">
                Materials and Quality
              </h2>
              <p className="text-sage-700 leading-relaxed mb-4">
                We use only quality materials from trusted suppliers. As official dealers of Birla Opus Paints in Pune, we guarantee authentic products. All materials used will be as specified in the quotation, and we welcome client inspection of materials before installation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-sage-900 mb-4">
                Warranty
              </h2>
              <p className="text-sage-700 leading-relaxed mb-4">
                We provide warranty on our workmanship as follows:
              </p>
              <ul className="list-disc list-inside text-sage-700 space-y-2 ml-4">
                <li>Painting work: 5 years against peeling and flaking</li>
                <li>Carpentry work: 2 years against manufacturing defects</li>
                <li>Waterproofing: 5 years against leakage</li>
                <li>Tiling work: 2 years against hollow tiles and grout issues</li>
              </ul>
              <p className="text-sage-700 leading-relaxed mt-4">
                Warranty does not cover damage caused by misuse, accidents, or natural disasters.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-5 h-5 text-brass" />
                <h2 className="text-xl font-display font-semibold text-sage-900">
                  Intellectual Property
                </h2>
              </div>
              <p className="text-sage-700 leading-relaxed">
                All content on this website, including but not limited to images, designs, text, logos, and graphics, is the exclusive property of Nafees Interiors and Decor and is protected by copyright and intellectual property laws. Unauthorized use, reproduction, or distribution of any content is strictly prohibited and may result in legal action.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-sage-900 mb-4">
                Client Responsibilities
              </h2>
              <p className="text-sage-700 leading-relaxed mb-4">
                Clients are responsible for:
              </p>
              <ul className="list-disc list-inside text-sage-700 space-y-2 ml-4">
                <li>Providing accurate information about the project site</li>
                <li>Obtaining necessary permissions from housing societies or authorities</li>
                <li>Ensuring access to the site during working hours</li>
                <li>Clearing personal belongings from work areas</li>
                <li>Making payments as per agreed terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-sage-900 mb-4">
                Cancellation Policy
              </h2>
              <p className="text-sage-700 leading-relaxed mb-4">
                In case of project cancellation:
              </p>
              <ul className="list-disc list-inside text-sage-700 space-y-2 ml-4">
                <li>Before work commencement: Full refund of advance minus administrative charges</li>
                <li>After work has begun: Refund based on work completed and materials purchased</li>
                <li>No refund on customized items already fabricated</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-sage-900 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-sage-700 leading-relaxed">
                Nafees Interiors and Decor shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of our services or website. Our total liability shall not exceed the amount paid for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-sage-900 mb-4">
                Governing Law
              </h2>
              <p className="text-sage-700 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-sage-900 mb-4">
                Changes to Terms
              </h2>
              <p className="text-sage-700 leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on this page. Continued use of our website and services constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-sage-900 mb-4">
                Contact Information
              </h2>
              <p className="text-sage-700 leading-relaxed">
                For any questions regarding these Terms of Service, please contact us:
              </p>
              <div className="mt-4 p-4 bg-sage-100 rounded-xl">
                <p className="text-sage-700"><strong>Nafees Interiors and Decor</strong></p>
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
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;
