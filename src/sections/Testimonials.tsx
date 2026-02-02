import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
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
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
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

  const testimonials = [
    {
      quote: 'Nafees Interiors transformed our outdated bathroom into a spa like retreat. The work was completed in just 4 days, and the team was incredibly professional and neat. Highly recommend their bathroom renovation services.',
      name: 'Mrs. Sharma',
      location: 'Wanowrie, Pune',
      project: 'Bathroom Renovation',
      rating: 5,
    },
    {
      quote: 'We got our entire 2BHK painted with Birla Opus Paints through Nafees Interiors. The finish is excellent, and the team was very respectful and cleaned up after each day. Great value for money.',
      name: 'Mr. Patel',
      location: 'Koregaon Park, Pune',
      project: 'Home Painting',
      rating: 5,
    },
    {
      quote: 'The kitchen makeover exceeded our expectations. They completed the entire renovation in 5 days as promised. The carpentry work is top notch, and the cabinets are beautifully crafted.',
      name: 'Mrs. Desai',
      location: 'Camp, Pune',
      project: 'Kitchen Renovation',
      rating: 5,
    },
    {
      quote: 'We hired Nafees Interiors for tiling work in our new apartment. The precision and attention to detail was impressive. The masons were skilled and completed the work on schedule.',
      name: 'Mr. Khan',
      location: 'Kalyani Nagar, Pune',
      project: 'Tiling Work',
      rating: 5,
    },
    {
      quote: 'Our balcony was transformed into a beautiful wooden retreat with the swing installation. The woodwork quality is excellent, and it has become our favorite spot in the house.',
      name: 'Mrs. Gupta',
      location: 'Boat Club Road, Pune',
      project: 'Balcony Makeover',
      rating: 5,
    },
    {
      quote: 'Professional team with skilled labor. The electricians and plumbers were experienced and did clean work. Our living room renovation was completed without any hassle.',
      name: 'Mr. Joshi',
      location: 'Aundh, Pune',
      project: 'Living Room Renovation',
      rating: 5,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 lg:py-28 bg-sage-50 z-[70]"
    >
      <div className="px-6 lg:px-[7vw]">
        <div ref={headerRef} className="mb-12">
          <h2 className="text-h2 font-display font-bold text-sage-900 mb-4">
            Client Stories
          </h2>
          <p className="text-lg text-sage-700 max-w-xl">
            Real feedback from our 400+ happy clients across Pune. We take pride in delivering quality work that exceeds expectations.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-[28px] p-8 shadow-soft card-hover"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brass/10 mb-6">
                <Quote className="w-5 h-5 text-brass" />
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brass text-brass" />
                ))}
              </div>
              
              <p className="text-sage-700 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              
              <div className="pt-6 border-t border-sage-100">
                <p className="font-display font-semibold text-sage-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-sage-600">
                  {testimonial.location} • {testimonial.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
