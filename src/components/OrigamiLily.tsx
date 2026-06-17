import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const OrigamiLily = () => {
  const [isOpen, setIsOpen] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const layerRefs = useRef<(SVGPathElement | null)[]>([]);

  // Detailed Lily Paths - Layers for depth and realism in 2D
  const lilyPaths = {
    closed: "M 100 40 L 120 100 L 100 160 L 80 100 Z",
    open: [
      // Outer petals
      "M 100 100 C 100 100 150 20 180 40 C 200 60 160 120 100 100", // Top Right
      "M 100 100 C 100 100 50 20 20 40 C 0 60 40 120 100 100",   // Top Left
      "M 100 100 C 100 100 150 180 180 160 C 200 140 160 80 100 100", // Bottom Right
      "M 100 100 C 100 100 50 180 20 160 C 0 140 40 80 100 100",   // Bottom Left
      // Inner petals
      "M 100 100 L 130 60 L 100 30 L 70 60 Z", // Center top
      "M 100 100 L 130 140 L 100 170 L 70 140 Z", // Center bottom
    ]
  };

  const colors = ["#FDA8BF", "#FDC3D1", "#FB8CAC", "#E0A8B1", "#FF5C89", "#FFFFFF"];

  useEffect(() => {
    layerRefs.current.forEach((layer, i) => {
      if (layer) {
        gsap.to(layer, {
          attr: { d: isOpen ? lilyPaths.open[i] : lilyPaths.closed },
          duration: 1.5,
          ease: isOpen ? "elastic.out(1, 0.5)" : "power2.inOut",
          delay: i * 0.05
        });
      }
    });

    if (svgRef.current) {
      gsap.to(svgRef.current, {
        scale: isOpen ? 1.2 : 1,
        rotate: isOpen ? 10 : 0,
        duration: 1.2,
        ease: "back.out(1.7)"
      });
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col items-center justify-center cursor-pointer select-none group" onClick={() => setIsOpen(!isOpen)}>
      <div className="relative">
        {/* Glow effect when open */}
        <div className={`absolute inset-0 bg-accent/20 blur-3xl rounded-full transition-opacity duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
        
        <svg
          ref={svgRef}
          width="350"
          height="350"
          viewBox="0 0 200 200"
          className="drop-shadow-[0_10px_25px_rgba(0,0,0,0.1)] relative z-10"
        >
          {lilyPaths.open.map((_, i) => (
            <path
              key={i}
              ref={el => { layerRefs.current[i] = el; }}
              d={lilyPaths.closed}
              fill={colors[i % colors.length]}
              stroke="#4A3B3E"
              strokeWidth="0.2"
              fillOpacity={isOpen ? 0.9 : 0.4}
            />
          ))}
          
          {/* Detailed Stigma in center */}
          <circle cx="100" cy="100" r={isOpen ? 4 : 0} fill="#FF5C89" className="transition-all duration-700 delay-500" />
          <path d="M 100 100 L 100 90" stroke="#FF5C89" strokeWidth="1" className={isOpen ? "opacity-100" : "opacity-0"} />
        </svg>
      </div>
      
      <p className="mt-6 font-serif text-charcoal/60 italic text-sm tracking-wide group-hover:text-accent transition-colors">
        {isOpen ? "Toca para plegar el lirio" : "Haz clic para ver la magia florecer"}
      </p>
    </div>
  );
};

export default OrigamiLily;
