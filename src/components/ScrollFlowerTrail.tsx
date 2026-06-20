import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface TrailFlowerProps {
  id: string;
  x: number;
  y: number;
  n: number;
  scale: number;
  color: string;
}

const COLORS = ["#ba3763", "#d34076", "#dbb0cc", "#fddafa", "#fef2fe", "#eec0db", "#ca809a", "#e9d8e8"];

const TrailFlower = ({ x, y, n, scale, color }: TrailFlowerProps) => {
  const flowerRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (flowerRef.current) {
      gsap.fromTo(flowerRef.current,
        { scale: 0 },
        { scale: scale, duration: 0.8, ease: "back.out(1.7)" }
      );
    }
  }, [scale]);

  return (
    <g 
      transform={`translate(${x}, ${y})`} 
      ref={flowerRef} 
      fill={color} 
      className={`flower-g _${n}`} 
      style={{ '--scale': scale } as React.CSSProperties}
    >
      <g className="flower-a">
        <g className="side-left">
          {Array.from({ length: n }).map((_, j) => (
            <use 
              key={`l-${j}`} 
              href={`#petal${n}`} 
              width="40" 
              height="40" 
            />
          ))}
        </g>
        <g className="side-right">
          {Array.from({ length: n }).map((_, j) => (
            <use 
              key={`r-${j}`} 
              href={`#petal${n}`} 
              width="40" 
              height="40" 
            />
          ))}
        </g>
      </g>
    </g>
  );
};

const ScrollFlowerTrail = () => {
  const [flowers, setFlowers] = useState<TrailFlowerProps[]>([]);
  const lastScrollY = useRef(0);
  const initialized = useRef(false);

  useEffect(() => {
    const createInitialGarden = () => {
      const gon = 7;
      const R = 2500;
      const initialFlowers: TrailFlowerProps[] = [];
      
      for (let a = 0; a < 2 * Math.PI; a += 0.4) { // Reduced frequency for performance
        const r = R * Math.cos(Math.PI / gon) / Math.cos(a % (2 * Math.PI / gon) - Math.PI / gon);
        const x = (window.innerWidth / 2) + (r * Math.cos(a)) / 5; // Scaled down for screen
        const y = 500 + (r * Math.sin(a)) / 5;
        
        initialFlowers.push({
          id: `init-${a}`,
          x,
          y,
          n: 2 + Math.floor(Math.random() * 4),
          scale: 2 + Math.random() * 5,
          color: COLORS[Math.floor(Math.random() * COLORS.length)]
        });
      }
      setFlowers(initialFlowers);
    };

    if (!initialized.current) {
      createInitialGarden();
      initialized.current = true;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = Math.abs(currentScrollY - lastScrollY.current);

      if (diff > 40) {
        const x = Math.random() * window.innerWidth;
        const y = currentScrollY + Math.random() * window.innerHeight;
        const n = 2 + Math.floor(Math.random() * 4);
        const scale = 1 + Math.random() * 3;
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];

        setFlowers(prev => {
          const newFlowers = [...prev, { id: `scroll-${Date.now()}-${Math.random()}`, x, y, n, scale, color }];
          return newFlowers.slice(-80); // Keep more flowers but cap for performance
        });
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-visible">
      <svg className="w-full h-full min-h-[5000px]" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="shadowFilter" width="200%" height="200%" x="-50%" y="-50%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="3" dy="3" result="offsetblur" />
            <feFlood floodColor="rgb(60,10,60)" floodOpacity="0.4" />
            <feComposite in2="offsetblur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          <symbol id="petal2" viewBox="0 -100 200 200">
            <path transform="translate(0,-100)" d="M25.91,-15.12 Q0,0 25.91,15.12L94.09,54.889 Q120,70 142.58,50.24L177.42,19.76 Q200,0 177.42,-19.756L142.58,-50.24 Q120,-70 94.087,-54.88Z" />
          </symbol>
          <symbol id="petal3" viewBox="0 -100 200 200">
            <path transform="translate(0,-100)" d="M27.69,-11.54 Q0,0 27.69,11.54 L92.3,38.46 Q120,50 145.44,34.1 L174.56,15.9 Q200,0 174.56,-15.9 L145.44,-34.1 Q120,-50 92.3,-38.46Z" />
          </symbol>
          <symbol id="petal4" viewBox="0 -100 200 200">
            <path transform="translate(0,-100)" d="M28.09,-10.53 Q0,0 28.09,10.53L91.91,34.47 Q120,45 146.147,30.29L173.85,14.7 Q200,0 173.85,-14.7L146.15,-30.29 Q120,-45 91.91,-34.467Z" />
          </symbol>
          <symbol id="petal5" viewBox="0 -100 200 200">
            <path transform="translate(0,-100)" d="M28.85,-8.24 Q0,0 28.85,8.24L111.15,31.76 Q140,40 164.96,23.36L175.04,16.64 Q200,0 175.038,-16.64L164.96,-23.36 Q140,-40 111.15,-31.76Z" />
          </symbol>
        </defs>

        <g filter="url(#shadowFilter)">
          {flowers.map((f) => (
            <TrailFlower key={f.id} {...f} />
          ))}
        </g>
      </svg>
      
      <style>{`
        .flower-a {
          transform: scale(var(--scale, 1)) rotate(-90deg);
          fill-opacity: 0.75;
          transition: transform 0.5s;
        }
        
        .flower-g use {
          transition: transform 0.5s;
        }

        /* Specific rotations for petals based on n */
        ._2 .side-left { transform: rotate(calc(-0.5 * 180deg / 2)); }
        ._2 .side-right { transform: rotate(calc(0.5 * 180deg / 2)); }
        ._2 .side-left use:nth-of-type(2) { transform: rotate(calc(-1deg * 180 / 2)); }
        ._2 .side-right use:nth-of-type(2) { transform: rotate(calc(1deg * 180 / 2)); }

        ._3 .side-left { transform: rotate(calc(-0.5 * 180deg / 3)); }
        ._3 .side-right { transform: rotate(calc(0.5 * 180deg / 3)); }
        ._3 .side-left use:nth-of-type(2) { transform: rotate(calc(-1deg * 180 / 3)); }
        ._3 .side-left use:nth-of-type(3) { transform: rotate(calc(-2deg * 180 / 3)); }
        ._3 .side-right use:nth-of-type(2) { transform: rotate(calc(1deg * 180 / 3)); }
        ._3 .side-right use:nth-of-type(3) { transform: rotate(calc(2deg * 180 / 3)); }

        ._4 .side-left { transform: rotate(calc(-0.5 * 180deg / 4)); }
        ._4 .side-right { transform: rotate(calc(0.5 * 180deg / 4)); }
        ._4 .side-left use:nth-of-type(2) { transform: rotate(calc(-1deg * 180 / 4)); }
        ._4 .side-left use:nth-of-type(3) { transform: rotate(calc(-2deg * 180 / 4)); }
        ._4 .side-left use:nth-of-type(4) { transform: rotate(calc(-3deg * 180 / 4)); }
        ._4 .side-right use:nth-of-type(2) { transform: rotate(calc(1deg * 180 / 4)); }
        ._4 .side-right use:nth-of-type(3) { transform: rotate(calc(2deg * 180 / 4)); }
        ._4 .side-right use:nth-of-type(4) { transform: rotate(calc(3deg * 180 / 4)); }

        ._5 .side-left { transform: rotate(calc(-0.5 * 180deg / 5)); }
        ._5 .side-right { transform: rotate(calc(0.5 * 180deg / 5)); }
        ._5 .side-left use:nth-of-type(2) { transform: rotate(calc(-1deg * 180 / 5)); }
        ._5 .side-left use:nth-of-type(3) { transform: rotate(calc(-2deg * 180 / 5)); }
        ._5 .side-left use:nth-of-type(4) { transform: rotate(calc(-3deg * 180 / 5)); }
        ._5 .side-left use:nth-of-type(5) { transform: rotate(calc(-4deg * 180 / 5)); }
        ._5 .side-right use:nth-of-type(2) { transform: rotate(calc(1deg * 180 / 5)); }
        ._5 .side-right use:nth-of-type(3) { transform: rotate(calc(2deg * 180 / 5)); }
        ._5 .side-right use:nth-of-type(4) { transform: rotate(calc(3deg * 180 / 5)); }
        ._5 .side-right use:nth-of-type(5) { transform: rotate(calc(4deg * 180 / 5)); }
      `}</style>
    </div>
  );
};

export default ScrollFlowerTrail;
