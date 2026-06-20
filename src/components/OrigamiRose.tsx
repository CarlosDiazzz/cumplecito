import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface RoseProps {
  color: 'white' | 'pink';
  className?: string;
  delay?: number;
}

// Detailed Rose Unfolding Paths - Multiple layers for a richer 2D look
const ROSE_PATHS = {
  closed: "M 50 50 C 50 50 60 40 50 30 C 40 40 50 50 50 50 Z",
  open: [
    "M 50 50 C 70 20 90 40 80 10 C 60 0 40 30 50 50",   // Outer Top Right
    "M 50 50 C 30 20 10 40 20 10 C 40 0 60 30 50 50",   // Outer Top Left
    "M 50 50 C 80 70 100 90 90 100 C 70 110 50 80 50 50", // Outer Bottom Right
    "M 50 50 C 20 70 0 90 10 100 C 30 110 50 80 50 50",  // Outer Bottom Left
    "M 50 50 C 60 40 70 50 60 60 C 50 70 40 40 50 50",   // Inner Heart Petal 1
    "M 50 50 C 40 40 30 50 40 60 C 50 70 60 40 50 50",   // Inner Heart Petal 2
  ]
};

const OrigamiRose = ({ color, className = "", delay = 0 }: RoseProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const petalRefs = useRef<(SVGPathElement | null)[]>([]);

  const fillColor = color === 'white' ? '#FFFFFF' : '#FDC3D1';
  const shadowColor = color === 'white' ? '#FADADD' : '#FDA8BF';
  const strokeColor = '#4A3B3E';

  useEffect(() => {
    const tl = gsap.timeline({ delay });

    tl.fromTo(containerRef.current, 
      { opacity: 0, scale: 0, rotate: -30 },
      { opacity: 1, scale: 1, rotate: 0, duration: 1.2, ease: "back.out(2)" }
    );

    petalRefs.current.forEach((petal, i) => {
      if (petal) {
        tl.to(petal, {
          attr: { d: ROSE_PATHS.open[i] },
          duration: 1.8,
          ease: "power3.inOut",
        }, "-=0.9");
      }
    });

    gsap.to(containerRef.current, {
      y: "-=20",
      x: "+=10",
      rotate: i => (i % 2 === 0 ? 8 : -8),
      duration: 4 + Math.random() * 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, [delay]);

  return (
    <div ref={containerRef} className={`absolute select-none pointer-events-none ${className}`}>
      <svg width="100" height="100" viewBox="0 0 100 100" className="drop-shadow-lg">
        {ROSE_PATHS.open.map((_, i) => (
          <path
            key={i}
            ref={el => { petalRefs.current[i] = el; }}
            d={ROSE_PATHS.closed}
            fill={i > 3 ? shadowColor : fillColor}
            stroke={strokeColor}
            strokeWidth="0.1"
            fillOpacity={0.9}
          />
        ))}
        {/* Rose core detail */}
        <circle cx="50" cy="50" r="3" fill="#FF5C89" opacity="0.4" />
      </svg>
    </div>
  );
};

export default OrigamiRose;
