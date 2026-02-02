import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Paintbrush, Star, Shield, Zap, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Painting = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            end: 'top 55%',
            scrub: 0.4,
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 0.4,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const benefits = [
    { icon: Star, title: 'Premium Quality', description: 'Birla Opus Paints, Asians ka Baap' },
    { icon: Shield, title: '5 Year Warranty', description: 'On all painting work' },
    { icon: Zap, title: 'Fast Completion', description: 'Quick turnaround time' },
  ];

  return (
    <section
      ref={sectionRef}
      id="painting"
      className="relative w-full py-20 lg:py-28 bg-sage-50 z-35"
    >
      <div className="px-6 lg:px-[7vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brass/10 rounded-full mb-6">
              <Paintbrush className="w-4 h-4 text-brass" />
              <span className="text-sm font-medium text-brass">Official Dealer</span>
            </div>
            
            <h2 className="text-h2 font-display font-bold text-sage-900 mb-4">
              Birla Opus Paints<br />
              <span className="text-brass">Asians ka Baap</span>
            </h2>
            
            <p className="text-lg text-sage-700 leading-relaxed mb-6">
              We are proud to be official dealers of Birla Opus Paints in Pune. Transform your walls with premium quality paints that offer superior coverage, durability, and a stunning finish that lasts for years.
            </p>
            
            <p className="text-sage-600 leading-relaxed mb-8">
              Our skilled painters ensure neat work with proper surface preparation, primer application, and multiple coats for a flawless finish. We handle everything from interior walls to exterior facades with the same attention to detail.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-4 shadow-soft">
                  <benefit.icon className="w-6 h-6 text-brass mb-2" />
                  <h4 className="font-display font-semibold text-sage-900 text-sm mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-xs text-sage-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            <a
              href="tel:+918446665252"
              className="btn-primary"
            >
              <Phone className="mr-2 w-4 h-4" />
              Call for Paint Quote
            </a>
          </div>

          <div ref={imageRef} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/gallery/living-room-1.jpg"
                alt="Painted living room interior"
                className="rounded-[28px] shadow-card w-full aspect-[3/4] object-cover"
              />
              <div className="space-y-4 mt-8">
                <img
                  src="/images/gallery/living-room-2.jpg"
                  alt="Interior painting work"
                  className="rounded-[28px] shadow-card w-full aspect-square object-cover"
                />
                <div className="bg-brass rounded-[28px] p-6 text-white">
                  <p className="text-3xl font-display font-bold mb-1">400+</p>
                  <p className="text-sm opacity-90">Projects Painted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Painting;
