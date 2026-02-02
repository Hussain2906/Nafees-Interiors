import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, PenTool, HardHat, Key, CalendarCheck2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=140%',
          pin: true,
          scrub: 0.6,
        },
      });

      scrollTl.fromTo(
        imageRef.current,
        { x: '60vw', opacity: 0.2 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        headlineRef.current,
        { x: '-10vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.05
      );

      scrollTl.fromTo(
        stepsRef.current?.children || [],
        { x: '-8vw', opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.02, ease: 'none' },
        0.1
      );

      scrollTl.fromTo(
        ctaRef.current,
        { y: '4vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.22
      );

      scrollTl.fromTo(
        stepsRef.current?.children || [],
        { y: 0, opacity: 1 },
        { y: '-8vh', opacity: 0, stagger: 0.01, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        imageRef.current,
        { scale: 1, opacity: 1 },
        { scale: 1.07, opacity: 0.55, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        contentRef.current,
        { x: 0 },
        { x: '-6vw', ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        [headlineRef.current, ctaRef.current],
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.75
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Discover',
      description: 'We listen, measure, and map your goals. Understanding your vision is our first priority.',
    },
    {
      icon: PenTool,
      number: '02',
      title: 'Design',
      description: 'Layouts, materials, and 3D visuals. See your dream home before we start.',
    },
    {
      icon: HardHat,
      number: '03',
      title: 'Build',
      description: 'Coordination, quality checks, and weekly updates. Our skilled team works neatly.',
    },
    {
      icon: Key,
      number: '04',
      title: 'Handover',
      description: 'Styling, snagging, and a finished space. Your dream home is ready.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative w-full h-screen overflow-hidden z-40"
    >
      <div
        ref={contentRef}
        className="absolute left-0 top-0 w-full lg:w-[56vw] h-full bg-sage-50 flex items-center"
      >
        <div className="px-8 lg:px-[7vw] py-16 lg:py-0 w-full">
          <h2
            ref={headlineRef}
            className="text-h2 font-display font-bold text-sage-900 mb-10"
            style={{ opacity: 0 }}
          >
            From First Call<br />to Final Reveal
          </h2>

          <div ref={stepsRef} className="space-y-6 mb-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 group"
                style={{ opacity: 0 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center group-hover:bg-brass/10 transition-colors">
                  <step.icon className="w-5 h-5 text-sage-600 group-hover:text-brass transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-micro text-brass">
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-sage-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sage-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            ref={ctaRef}
            className="btn-secondary"
            style={{ opacity: 0 }}
            onClick={() =>
              document
                .querySelector('#contact')
                ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          >
            <CalendarCheck2 className="mr-2 w-4 h-4" />
            Book a design consultation
          </button>
        </div>
      </div>

      <div
        ref={imageRef}
        className="absolute right-0 top-0 w-full lg:w-[44vw] h-full"
        style={{ opacity: 0.2, transform: 'translateX(60vw)' }}
      >
        <img
          src="/images/gallery/kitchen-3.jpg"
          alt="Kitchen renovation process"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Process;
