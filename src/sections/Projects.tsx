import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

      const cards = gridRef.current?.children || [];
      gsap.fromTo(
        cards,
        { y: 70, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 0.4,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const filters = ['All', 'Living Room', 'Bathroom', 'Kitchen', 'Balcony', 'Bedroom'];

  const projects = [
    { image: '/images/gallery/living-room-1.jpg', title: 'Modern Living Room', location: 'Wanowrie, Pune', category: 'Living Room' },
    { image: '/images/gallery/living-room-2.jpg', title: 'Elegant Living Space', location: 'Koregaon Park, Pune', category: 'Living Room' },
    { image: '/images/gallery/living-room-3.jpg', title: 'Contemporary Living', location: 'Camp, Pune', category: 'Living Room' },
    { image: '/images/gallery/living-room-4.jpg', title: 'Premium Living Room', location: 'Kalyani Nagar, Pune', category: 'Living Room' },
    { image: '/images/gallery/bathroom-1.jpg', title: 'Luxury Bathroom', location: 'Magarpatta, Pune', category: 'Bathroom' },
    { image: '/images/gallery/bathroom-2.jpg', title: 'Modern Bathroom', location: 'Hadapsar, Pune', category: 'Bathroom' },
    { image: '/images/gallery/bathroom-3.jpg', title: 'Designer Bathroom', location: 'Viman Nagar, Pune', category: 'Bathroom' },
    { image: '/images/gallery/bathroom-4.jpg', title: 'Spa Style Bathroom', location: 'Kharadi, Pune', category: 'Bathroom' },
    { image: '/images/gallery/bathroom-5.jpg', title: 'Elegant Vanity', location: 'Baner, Pune', category: 'Bathroom' },
    { image: '/images/gallery/bathroom-6.jpg', title: 'Premium Bathroom', location: 'Aundh, Pune', category: 'Bathroom' },
    { image: '/images/gallery/bathroom-7.jpg', title: 'Modern Washroom', location: 'Wakad, Pune', category: 'Bathroom' },
    { image: '/images/gallery/bathroom-8.jpg', title: 'Stylish Bathroom', location: 'Pimple Saudagar, Pune', category: 'Bathroom' },
    { image: '/images/gallery/kitchen-1.jpg', title: 'Modular Kitchen', location: 'Kothrud, Pune', category: 'Kitchen' },
    { image: '/images/gallery/kitchen-2.jpg', title: 'Bright Kitchen', location: 'Deccan, Pune', category: 'Kitchen' },
    { image: '/images/gallery/kitchen-3.jpg', title: 'Premium Kitchen', location: 'Shivaji Nagar, Pune', category: 'Kitchen' },
    { image: '/images/gallery/balcony-1.jpg', title: 'Wooden Balcony', location: 'Boat Club Road, Pune', category: 'Balcony' },
    { image: '/images/gallery/balcony-2.jpg', title: 'Cozy Balcony', location: 'Sopan Baug, Pune', category: 'Balcony' },
    { image: '/images/gallery/balcony-3.jpg', title: 'Designer Balcony', location: 'Model Colony, Pune', category: 'Balcony' },
    { image: '/images/gallery/bedroom-1.jpg', title: 'Kids Bedroom', location: 'Kondhwa, Pune', category: 'Bedroom' },
    { image: '/images/gallery/bedroom-2.jpg', title: 'Master Bedroom', location: 'Undri, Pune', category: 'Bedroom' },
    { image: '/images/gallery/bedroom-3.jpg', title: 'Guest Bedroom', location: 'NIBM, Pune', category: 'Bedroom' },
    { image: '/images/gallery/partition-1.jpg', title: 'Custom Partition', location: 'Salisbury Park, Pune', category: 'Living Room' },
    { image: '/images/gallery/entrance-1.jpg', title: 'Main Entrance', location: 'Fatema Nagar, Pune', category: 'Living Room' },
    { image: '/images/gallery/dressing-1.jpg', title: 'Dressing Area', location: 'Wanowrie, Pune', category: 'Bedroom' },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full py-20 lg:py-28 bg-sage-50 z-50"
    >
      <div className="px-6 lg:px-[7vw]">
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12"
        >
          <div>
            <h2 className="text-h2 font-display font-bold text-sage-900 mb-4">
              Our Work
            </h2>
            <p className="text-lg text-sage-700 max-w-md">
              A curated collection of our 400+ completed projects across Pune. Real homes, real transformations.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-6 lg:mt-0">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-sage-900 text-white'
                    : 'bg-white text-sage-700 hover:bg-sage-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            >
              <div className="image-zoom rounded-[28px] overflow-hidden mb-4 shadow-soft">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="px-2">
                <span className="text-micro mb-1 block">{project.category}</span>
                <h3 className="text-lg font-display font-semibold text-sage-900 group-hover:text-brass transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-sage-600">{project.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary"
          >
            Start your project
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Project view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
