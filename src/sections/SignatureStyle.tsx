import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Home, Clock, Users, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SignatureStyle = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      scrollTl.fromTo(
        imageRef.current,
        { x: '-60vw', opacity: 0.2 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        panelRef.current,
        { x: '60vw' },
        { x: 0, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        headlineRef.current,
        { x: '10vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.06
      );

      scrollTl.fromTo(
        bodyRef.current,
        { y: '6vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.1
      );

      scrollTl.fromTo(
        statsRef.current?.children || [],
        { y: '8vh', opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.02, ease: 'none' },
        0.14
      );

      scrollTl.fromTo(
        [headlineRef.current, bodyRef.current],
        { y: 0, opacity: 1 },
        { y: '-10vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        imageRef.current,
        { scale: 1, opacity: 1 },
        { scale: 1.06, opacity: 0.5, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        panelRef.current,
        { x: 0 },
        { x: '6vw', ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        statsRef.current?.children || [],
        { y: 0, opacity: 1 },
        { y: '-8vh', opacity: 0, stagger: 0.01, ease: 'power2.in' },
        0.72
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Home, value: '400+', label: 'Projects delivered' },
    { icon: Clock, value: '5 Days', label: 'for kitchen & bath' },
    { icon: Users, value: '20+ Years', label: 'of experience' },
    { icon: Award, value: 'Expert', label: 'Designers from SL & Canada' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden z-20"
    >
      <div
        ref={imageRef}
        className="absolute left-0 top-0 w-full lg:w-[52vw] h-full"
        style={{ opacity: 0.2 }}
      >
        <img
          src="/images/gallery/bathroom-4.jpg"
          alt="Beautiful bathroom renovation by Nafees Interiors"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        ref={panelRef}
        className="absolute right-0 top-0 w-full lg:w-[48vw] h-full bg-sage-50 flex items-center"
        style={{ transform: 'translateX(60vw)' }}
      >
        <div className="px-8 lg:px-[4vw] py-16 lg:py-0">
          <h2
            ref={headlineRef}
            className="text-h2 font-display font-bold text-sage-900 mb-6"
            style={{ opacity: 0 }}
          >
            Modern. Warm.<br />Timeless.
          </h2>
          <div className="w-[72px] h-[2px] bg-brass mb-8" />
          <p
            ref={bodyRef}
            className="text-lg text-sage-700 leading-relaxed max-w-md mb-12"
            style={{ opacity: 0 }}
          >
            We design spaces that look beautiful and work beautifully. Clean lines, natural textures, and lighting that changes the mood. Our highly skilled interior designers from Sri Lanka and Canada bring world class expertise to your dream home.
          </p>

          <div ref={statsRef} className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-sage-300 mb-3">
                  <stat.icon className="w-5 h-5 text-sage-600" />
                </div>
                <p className="text-xl font-display font-bold text-sage-900">
                  {stat.value}
                </p>
                <p className="text-sm text-sage-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureStyle;
