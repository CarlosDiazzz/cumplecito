import { useEffect, useRef } from 'react';
import anime from 'animejs';

const Bee = ({ delay = 0, x = "50%", y = "50%", scale = 1 }) => {
  const beeRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  
  useEffect(() => {
    if (!anime) {
      console.error("Anime.js not found");
      return;
    }

    // Create a unique random path for this bee
    const randomPath = `M ${Math.random() * 100 - 50} ${Math.random() * 100 - 50} 
                        a 40 40 0 0 0 80 0 
                        40 40 0 0 0 -80 0 
                        40 40 0 0 1 -80 0 
                        40 40 0 0 1 80 0`;
    
    if (pathRef.current) {
      pathRef.current.setAttribute('d', randomPath);
    }

    // Utility to get the anime function if it's nested (sometimes happens with ESM)
    const a = (anime as any).default || anime;
    
    if (typeof a.path !== 'function') {
      console.error("anime.path is not a function. Version:", a.version);
      return;
    }

    const path = a.path(pathRef.current);

    // Initial entrance
    a({
      targets: beeRef.current,
      opacity: [0, 1],
      scale: [0, scale],
      duration: 1000,
      delay,
      easing: 'easeOutBack'
    });

    // Infinite flying animation
    a({
      targets: beeRef.current,
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      loop: true,
      duration: 15000 + Math.random() * 5000,
      easing: 'linear'
    });
  }, [delay, scale]);

  return (
    <div className="absolute pointer-events-none z-[100]" style={{ left: x, top: y }}>
      <svg className="hidden">
        <path ref={pathRef} />
      </svg>
      <svg ref={beeRef} viewBox="-10.5 -10.5 21 21" className="w-[50px] h-auto opacity-0 overflow-visible">
        <g transform="rotate(90) translate(0 -4)">
          <g stroke="black">
            <circle fill="black" r="4" strokeWidth="1" />
            <g fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path transform="rotate(45) translate(0 -4)" d="M 0 0 v -3" />
              <path transform="rotate(-45) translate(0 -4)" d="M 0 0 v -3" />
              <g fill="#e0f2fe">
                <path transform="rotate(15)" d="M 0 0 h 7 a 3 3 0 0 1 0 6 q -4 0 -7 -6" />
                <path transform="scale(-1 1) rotate(15)" d="M 0 0 h 7 a 3 3 0 0 1 0 6 q -4 0 -7 -6" />
              </g>
              <g fill="#fbbf24">
                <path d="M 0 0 c 2 6 8 10 0 12 -8 -2 -2 -6 0 -12" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

const BeeSwarm = () => {
  const bees = [
    { x: '15%', y: '25%', delay: 200, scale: 0.8 },
    { x: '80%', y: '20%', delay: 800, scale: 1.1 },
    { x: '10%', y: '75%', delay: 1500, scale: 0.9 },
    { x: '90%', y: '85%', delay: 2200, scale: 1 },
    { x: '50%', y: '10%', delay: 2800, scale: 1.2 },
    { x: '70%', y: '50%', delay: 3500, scale: 0.85 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {bees.map((b, i) => (
        <Bee key={i} {...b} />
      ))}
    </div>
  );
};

export default BeeSwarm;
