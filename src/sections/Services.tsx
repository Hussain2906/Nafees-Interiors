import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Palette, Bath, Grid3X3, Paintbrush, ArrowRight, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            end: 'top 55%',
            scrub: 0.4,
          },
        }
      );

      const cards = cardsRef.current?.children || [];
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 0.4,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Bath,
      title: 'Bathroom Renovation',
      description: 'Our specialty. Complete bathroom transformations with modern fixtures, premium tiles, and elegant vanities. We complete bathroom renovations in less than 5 days with minimal disruption.',
      features: ['Complete makeover in 5 days', 'Premium fixtures & fittings', 'Waterproofing guarantee', 'Modern vanity designs'],
      featured: true,
    },
    {
      icon: Palette,
      title: 'Interior Design',
      description: 'Full home interior design with space planning, 3D visualization, and complete execution. Our designers from Sri Lanka and Canada bring international expertise.',
      features: ['3D visualization', 'Space optimization', 'Custom furniture', 'End to end execution'],
      featured: false,
    },
    {
      icon: Grid3X3,
      title: 'Tiling Contracts',
      description: 'Professional tiling work for floors, walls, bathrooms, and kitchens. We use premium quality tiles and ensure perfect finishing with skilled masons.',
      features: ['Floor & wall tiling', 'Bathroom tiling', 'Kitchen backsplash', 'Pattern designs'],
      featured: false,
    },
    {
      icon: Paintbrush,
      title: 'Painting Services',
      description: 'Interior and exterior painting with premium quality paints. We are official dealers of Birla Opus Paints in Pune, Asians ka Baap.',
      features: ['Interior painting', 'Exterior painting', 'Texture painting', 'Birla Opus dealer'],
      featured: false,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full py-20 lg:py-28 bg-sage-50 z-30"
    >
      <div className="px-6 lg:px-[7vw]">
        <div ref={headerRef} className="max-w-2xl mb-16">
          <h2 className="text-h2 font-display font-bold text-sage-900 mb-4">
            What We Do
          </h2>
          <p className="text-lg text-sage-700 leading-relaxed">
            From bathroom renovations to complete home makeovers, we deliver quality work with skilled labor. Our carpenters, electricians, plumbers, and masons are respectful, neat, and highly skilled in their domains.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-[28px] p-8 shadow-soft card-hover ${
                service.featured ? 'md:col-span-2 lg:col-span-1 ring-2 ring-brass/20' : ''
              }`}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sage-100 mb-6 group-hover:bg-brass/10 transition-colors">
                <service.icon className="w-6 h-6 text-sage-600 group-hover:text-brass transition-colors" />
              </div>
              <h3 className="text-xl font-display font-semibold text-sage-900 mb-3">
                {service.title}
              </h3>
              <p className="text-sage-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-sage-700">
                    <Check className="w-4 h-4 text-brass flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() =>
                  document
                    .querySelector('#contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="inline-flex items-center text-sm font-medium text-brass hover:text-brass-dark transition-colors"
              >
                Get a quote
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
