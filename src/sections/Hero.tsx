import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Instagram } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        bgRef.current,
        { opacity: 0, scale: 1.06 },
        { opacity: 1, scale: 1, duration: 1.1 }
      );

      tl.fromTo(
        headlineRef.current?.children || [],
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, stagger: 0.06 },
        '-=0.6'
      );

      tl.fromTo(
        cardRef.current,
        { x: 60, opacity: 0, scale: 0.98 },
        { x: 0, opacity: 1, scale: 1, duration: 0.8 },
        '-=0.5'
      );

      tl.fromTo(
        bottomRef.current?.children || [],
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
        '-=0.3'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            gsap.set(headlineRef.current?.children || [], { x: 0, opacity: 1 });
            gsap.set(cardRef.current, { x: 0, y: 0, opacity: 1, scale: 1 });
            gsap.set(bgRef.current, { scale: 1, opacity: 1 });
            gsap.set(bottomRef.current?.children || [], { y: 0, opacity: 1 });
          },
        },
      });

      scrollTl.fromTo(
        headlineRef.current?.children || [],
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        cardRef.current,
        { x: 0, y: 0, opacity: 1 },
        { x: '18vw', y: '-6vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        bgRef.current,
        { scale: 1, opacity: 1 },
        { scale: 1.08, opacity: 0.6, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        bottomRef.current?.children || [],
        { y: 0, opacity: 1 },
        { y: 20, opacity: 0, ease: 'power2.in' },
        0.75
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden z-10"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0 }}
      >
        <img
          src="/images/gallery/living-room-3.jpg"
          alt="Modern living room interior by Nafees Interiors"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sage-50/80 via-sage-50/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 lg:px-[7vw]">
        <div
          ref={headlineRef}
          className="max-w-xl lg:max-w-2xl"
          style={{ marginTop: '-5vh' }}
        >
          <h1 className="text-h1 font-display font-bold text-sage-900 mb-6">
            Designed for Living
          </h1>
          <div className="w-[72px] h-[2px] bg-brass mb-6" />
          <p className="text-lg lg:text-xl text-sage-700 leading-relaxed max-w-md">
            Nafees Interiors and Decor. Modern homes, warm materials, and layouts that fit your life. We transform houses into dream homes.
          </p>
        </div>

        <div
          ref={cardRef}
          className="hidden lg:block absolute right-[6vw] top-[22vh] w-[34vw] max-w-md bg-white rounded-[28px] shadow-card p-8"
          style={{ opacity: 0 }}
        >
          <h3 className="text-h3 font-display font-semibold text-sage-900 mb-4">
            Book a free discovery call
          </h3>
          <p className="text-sage-600 mb-6 leading-relaxed">
            Tell us what you need. We will map a plan, timeline, and budget with no pressure. Kitchen, bathroom, and single room renovations completed in less than 5 days.
          </p>
          <button
            onClick={() =>
              document
                .querySelector('#contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="btn-primary w-full"
          >
            Schedule now
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
          <div className="mt-6 pt-6 border-t border-sage-200">
            <img
              src="/images/gallery/bathroom-5.jpg"
              alt="Bathroom interior design"
              className="w-full h-24 object-cover rounded-2xl"
            />
          </div>
        </div>

        <div
          ref={bottomRef}
          className="absolute bottom-[10vh] left-6 lg:left-[7vw] right-6 lg:right-[7vw] flex justify-between items-end"
        >
          <div>
            <p className="text-micro mb-2">Pune • Interiors & Decor</p>
            <p className="text-sm font-medium text-sage-700">
              Residential • Bathroom Renovation • Kitchen Makeover • Painting • Tiling
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://instagram.com/Nafees_Traders_53"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-sage-600 hover:text-sage-900 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
