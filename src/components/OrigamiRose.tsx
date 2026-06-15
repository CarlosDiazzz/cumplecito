import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface RoseProps {
  color: 'white' | 'pink';
  className?: string;
  delay?: number;
}

const OrigamiRose = ({ color, className = "", delay = 0 }: RoseProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const petalRefs = useRef<(SVGPathElement | null)[]>([]);

  const fillColor = color === 'white' ? '#FFFFFF' : '#FDC3D1';
  const strokeColor = '#FDA8BF';

  // Rose unfolding paths (simplified 2D origami style)
  const paths = {
    closed: "M 50 50 L 60 40 L 50 30 L 40 40 Z",
    open: [
      "M 50 50 L 80 20 L 50 10 L 20 20 Z", // Top petal
      "M 50 50 L 90 60 L 80 80 L 50 70 Z", // Right petal
      "M 50 50 L 10 60 L 20 80 L 50 70 Z", // Left petal
      "M 50 50 L 60 90 L 40 90 L 50 50 Z",  // Bottom petal
    ]
  };

  useEffect(() => {
    const tl = gsap.timeline({ delay });

    // Initial entrance
    tl.fromTo(containerRef.current, 
      { opacity: 0, scale: 0, rotate: -45 },
      { opacity: 1, scale: 1, rotate: 0, duration: 1, ease: "back.out(1.7)" }
    );

    // Unfolding petals
    petalRefs.current.forEach((petal, i) => {
      if (petal) {
        tl.to(petal, {
          attr: { d: paths.open[i] },
          duration: 1.5,
          ease: "power2.inOut",
        }, "-=0.8");
      }
    });

    // Gentle continuous floating
    gsap.to(containerRef.current, {
      y: "-=15",
      rotate: "+=5",
      duration: 3 + Math.random() * 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, [delay]);

  return (
    <div ref={containerRef} className={`absolute select-none pointer-events-none ${className}`}>
      <svg width="80" height="80" viewBox="0 0 100 100" className="drop-shadow-md">
        {paths.open.map((_, i) => (
          <path
            key={i}
            ref={el => { petalRefs.current[i] = el; }}
            d={paths.closed}
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth="0.5"
            fillOpacity="0.8"
          />
        ))}
        {/* Core of the rose */}
        <circle cx="50" cy="50" r="5" fill="#FF5C89" opacity="0.6" />
      </svg>
    </div>
  );
};

export default OrigamiRose;
