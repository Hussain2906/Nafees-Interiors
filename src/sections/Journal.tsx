import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Journal = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { y: 24, opacity: 0 },
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

      // Cards animation
      const cards = cardsRef.current?.children || [];
      gsap.fromTo(
        cards,
        { y: 64, opacity: 0 },
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

  const articles = [
    {
      image: '/images/journal-small-space.jpg',
      title: 'Small apartment hacks that feel spacious',
      date: 'Jan 15, 2026',
      category: 'Tips',
    },
    {
      image: '/images/journal-lighting.jpg',
      title: 'How to choose lighting for every mood',
      date: 'Jan 8, 2026',
      category: 'Guide',
    },
    {
      image: '/images/journal-checklist.jpg',
      title: 'A 5-step pre-renovation checklist',
      date: 'Dec 28, 2025',
      category: 'Planning',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="journal"
      className="relative w-full py-20 lg:py-28 bg-sage-50 z-[80]"
    >
      <div className="px-6 lg:px-[7vw]">
        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12"
        >
          <h2 className="text-h2 font-display font-bold text-sage-900">
            Ideas & Inspiration
          </h2>
          <button
            onClick={() => alert('Full journal coming soon!')}
            className="inline-flex items-center text-sm font-medium text-brass hover:text-brass-dark transition-colors mt-4 lg:mt-0"
          >
            Browse the journal
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        {/* Articles Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {articles.map((article, index) => (
            <article
              key={index}
              className="group cursor-pointer"
              onClick={() => alert(`Read ${article.title} coming soon!`)}
            >
              <div className="image-zoom rounded-[28px] overflow-hidden mb-4 shadow-soft">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full aspect-[16/10] object-cover"
                />
              </div>
              <div className="px-2">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-micro">{article.category}</span>
                  <span className="text-sage-400">•</span>
                  <span className="text-sm text-sage-600 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                </div>
                <h3 className="text-lg font-display font-semibold text-sage-900 group-hover:text-brass transition-colors">
                  {article.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
