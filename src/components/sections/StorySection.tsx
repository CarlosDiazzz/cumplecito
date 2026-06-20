import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { storyMilestones } from '../../data/birthdayData';
import CssRose from '../CssRose';
import GlowFlower from '../GlowFlower';

gsap.registerPlugin(ScrollTrigger);

const PhotoPlaceholder = ({ title, icon }: { title: string; icon?: string }) => {
  return (
    <div className="w-full aspect-[4/3] rounded-2xl bg-white/40 border-2 border-dashed border-rose/50 flex flex-col items-center justify-center p-6 text-center group hover:border-accent hover:bg-white/60 transition-all duration-300 shadow-inner">
      <div className="text-4xl mb-3 select-none filter drop-shadow-sm">{icon || "📸"}</div>
      <p className="text-sm font-sans font-semibold text-charcoal/70">Foto de "{title}"</p>
      <p className="text-xs font-sans text-charcoal/40 mt-1 max-w-[200px] mx-auto">
        Coloca tu foto en <code className="bg-dusty/35 px-1 py-0.5 rounded">public/images/</code> y agrégala en <code className="bg-dusty/35 px-1 py-0.5 rounded">birthdayData.ts</code>
      </p>
    </div>
  );
};

const MilestoneImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 relative group">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

const StorySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(".story-title",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".story-title",
            start: "top 85%",
          }
        }
      );

      // Line animation
      gsap.fromTo(".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2,
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 70%",
            end: "bottom 80%",
            scrub: true
          }
        }
      );

      // Row elements animation
      gsap.utils.toArray<HTMLElement>(".milestone-row").forEach((row) => {
        const textElement = row.querySelector(".milestone-text");
        const mediaElement = row.querySelector(".milestone-media");
        const dotElement = row.querySelector(".milestone-dot");

        if (textElement) {
          gsap.fromTo(textElement,
            { opacity: 0, x: row.classList.contains("row-reverse") ? 50 : -50 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: row,
                start: "top 80%",
              }
            }
          );
        }

        if (mediaElement) {
          gsap.fromTo(mediaElement,
            { opacity: 0, x: row.classList.contains("row-reverse") ? -50 : 50, scale: 0.9 },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: row,
                start: "top 80%",
              }
            }
          );
        }

        if (dotElement) {
          gsap.fromTo(dotElement,
            { opacity: 0, scale: 0 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: row,
                start: "top 80%",
              }
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 relative z-10 w-full overflow-hidden bg-gradient-to-b from-transparent to-white/10">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <CssRose className="top-10 left-10" variant="pink" scale={0.7} delay={0.5} />
        <CssRose className="top-[40%] right-[10%]" variant="white" scale={0.8} delay={1.2} />
        <GlowFlower className="absolute top-[10%] right-[2%] scale-75 opacity-90 rotate-12" />
        <GlowFlower className="absolute top-[45%] left-[-2%] scale-60 opacity-90 -rotate-12" />
        <GlowFlower className="absolute bottom-[0%] right-[5%] scale-75 opacity-90" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <h2 className="story-title text-5xl md:text-6xl text-accent font-serif mb-24 text-center">
          Nuestra Historia
        </h2>

        <div className="timeline-container relative space-y-24">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-dusty/40 -translate-x-1/2 hidden md:block origin-top timeline-line" />

          {storyMilestones.map((milestone, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={milestone.id}
                className={`milestone-row flex flex-col md:flex-row items-center gap-8 md:gap-16 relative ${
                  isEven ? "" : "row-reverse md:flex-row-reverse"
                }`}
              >
                {/* Text Content Column */}
                <div className={`milestone-text md:w-1/2 w-full text-center ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="text-xs uppercase tracking-widest text-accent font-sans font-bold block mb-1">
                    {milestone.date}
                  </span>
                  <h3 className="text-3xl font-serif text-charcoal mb-4">
                    {milestone.title}
                  </h3>
                  <p className="text-charcoal/80 leading-relaxed italic font-sans max-w-xl mx-auto md:mx-0">
                    "{milestone.text}"
                  </p>
                </div>

                {/* Timeline Center Dot */}
                <div className="milestone-dot w-10 h-10 rounded-full bg-white border-4 border-accent shadow-sm z-10 hidden md:flex items-center justify-center shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose animate-pulse" />
                </div>

                {/* Photo/Placeholder Column */}
                <div className="milestone-media md:w-1/2 w-full max-w-md">
                  {milestone.image ? (
                    <MilestoneImage src={milestone.image} alt={milestone.title} />
                  ) : (
                    <PhotoPlaceholder title={milestone.title} icon={milestone.fallbackIcon} />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
