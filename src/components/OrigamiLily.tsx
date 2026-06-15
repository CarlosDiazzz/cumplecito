import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const OrigamiLily = () => {
  const [isOpen, setIsOpen] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const petal1Ref = useRef<SVGPathElement>(null);
  const petal2Ref = useRef<SVGPathElement>(null);
  const petal3Ref = useRef<SVGPathElement>(null);
  const petal4Ref = useRef<SVGPathElement>(null);

  // States for the paths
  const paths = {
    closed: [
      "M 100 40 L 140 100 L 100 160 L 60 100 Z",
      "M 100 40 L 140 100 L 100 160 L 60 100 Z",
      "M 100 40 L 140 100 L 100 160 L 60 100 Z",
      "M 100 40 L 140 100 L 100 160 L 60 100 Z",
    ],
    open: [
      "M 100 100 L 180 40 L 150 140 L 100 100 Z",
      "M 100 100 L 20 40 L 50 140 L 100 100 Z",
      "M 100 100 L 100 190 L 150 140 L 100 100 Z",
      "M 100 100 L 100 190 L 50 140 L 100 100 Z",
    ]
  };

  useEffect(() => {
    const refs = [petal1Ref, petal2Ref, petal3Ref, petal4Ref];
    
    refs.forEach((ref, index) => {
      if (ref.current) {
        gsap.to(ref.current, {
          attr: { d: isOpen ? paths.open[index] : paths.closed[index] },
          duration: 1.2,
          ease: "elastic.out(1, 0.75)",
          delay: index * 0.1
        });
      }
    });

    if (svgRef.current) {
      gsap.to(svgRef.current, {
        scale: isOpen ? 1.1 : 1,
        rotate: isOpen ? 5 : 0,
        duration: 1,
        ease: "power2.out"
      });
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col items-center justify-center cursor-pointer select-none" onClick={() => setIsOpen(!isOpen)}>
      <svg
        ref={svgRef}
        width="300"
        height="300"
        viewBox="0 0 200 200"
        className="drop-shadow-2xl"
      >
        <path ref={petal1Ref} d={paths.closed[0]} fill="#FDA8BF" stroke="#4A3B3E" strokeWidth="0.5" />
        <path ref={petal2Ref} d={paths.closed[1]} fill="#FDC3D1" stroke="#4A3B3E" strokeWidth="0.5" />
        <path ref={petal3Ref} d={paths.closed[2]} fill="#FB8CAC" stroke="#4A3B3E" strokeWidth="0.5" />
        <path ref={petal4Ref} d={paths.closed[3]} fill="#E0A8B1" stroke="#4A3B3E" strokeWidth="0.5" />
        
        {/* Subtle center detail */}
        <circle cx="100" cy="100" r="2" fill="#FF5C89" className={isOpen ? "opacity-100" : "opacity-0 transition-opacity duration-1000"} />
      </svg>
      
      <p className="mt-4 font-serif text-charcoal opacity-60 italic text-sm transition-all hover:opacity-100">
        {isOpen ? "Toca para cerrar" : "Toca para abrir el lirio"}
      </p>
    </div>
  );
};

export default OrigamiLily;
