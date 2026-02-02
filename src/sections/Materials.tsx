import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mountain, TreePine, CircleDot, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Materials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

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
        listRef.current?.children || [],
        { y: '6vh', opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.02, ease: 'none' },
        0.1
      );

      scrollTl.fromTo(
        [headlineRef.current, listRef.current],
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const materials = [
    { icon: Mountain, name: 'Premium tiles & stone' },
    { icon: TreePine, name: 'Quality veneers & wood' },
    { icon: CircleDot, name: 'Brass & chrome fittings' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden z-[60]"
    >
      <div
        ref={imageRef}
        className="absolute left-0 top-0 w-full lg:w-[54vw] h-full"
        style={{ opacity: 0.2 }}
      >
        <img
          src="/images/gallery/bathroom-6.jpg"
          alt="Quality materials used by Nafees Interiors"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        ref={panelRef}
        className="absolute right-0 top-0 w-full lg:w-[46vw] h-full bg-sage-50 flex items-center"
        style={{ transform: 'translateX(60vw)' }}
      >
        <div className="px-8 lg:px-[4vw] py-16 lg:py-0">
          <h2
            ref={headlineRef}
            className="text-h2 font-display font-bold text-sage-900 mb-6"
            style={{ opacity: 0 }}
          >
            Materials<br />That Matter
          </h2>
          <div className="w-[72px] h-[2px] bg-brass mb-8" />
          <p className="text-lg text-sage-700 leading-relaxed max-w-md mb-10">
            We source finishes that age well. Wood grains, stone textures, and hardware that feels right. Quality materials ensure your home stays beautiful for years.
          </p>

          <div ref={listRef} className="space-y-4 mb-10">
            {materials.map((material, index) => (
              <div
                key={index}
                className="flex items-center gap-4 group"
                style={{ opacity: 0 }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center group-hover:bg-brass/10 transition-colors">
                  <material.icon className="w-5 h-5 text-sage-600 group-hover:text-brass transition-colors" />
                </div>
                <span className="text-sage-900 font-medium">{material.name}</span>
              </div>
            ))}
          </div>

          <a
            href="tel:+918446665252"
            className="btn-secondary"
          >
            <Phone className="mr-2 w-4 h-4" />
            Request a sample kit
          </a>
        </div>
      </div>
    </section>
  );
};

export default Materials;
