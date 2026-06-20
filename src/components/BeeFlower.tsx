import { useEffect, useRef } from 'react';
import * as anime_module from 'animejs';

const BeeFlower = () => {
  const beeRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const anime_any = anime_module as any;
    const anime_fn = anime_any.default || anime_any;
    
    if (!anime_fn) return;

    const path = anime_fn.path('#beePath');

    // Estado inicial
    anime_fn.set('.bee-stem', { scaleY: 0 });
    anime_fn.set('.bee-petals', { scale: 0 });
    anime_fn.set(beeRef.current, { opacity: 0 });

    // 1. ANIMACIÓN DE ENTRADA
    const tl = anime_fn.timeline({
      easing: 'easeInOutExpo',
      duration: 1500,
    });

    tl.add({
      targets: '.bee-stem',
      scaleY: [0, 1],
      transformOrigin: 'bottom center',
    })
    .add({
      targets: '.bee-leaf',
      rotate: [0, 45],
      duration: 1000,
    }, '-=500')
    .add({
      targets: '.bee-petals',
      scale: [0, 1],
      duration: 1200,
    }, '-=800')
    .add({
      targets: beeRef.current,
      opacity: [0, 1],
      duration: 800,
    }, '-=600');

    // 2. ANIMACIONES EN LOOP
    anime_fn({
      targets: beeRef.current,
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      loop: true,
      duration: 12000,
      easing: 'linear'
    });

    anime_fn({
      targets: '.bee-flower-main-group',
      rotate: [-1.5, 1.5],
      duration: 6000,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine'
    });

  }, []);

  return (
    <div className="relative w-[700px] h-[700px] flex items-center justify-center pointer-events-none select-none z-50 overflow-visible">
      {/* Flower SVG - Escalado para ser la protagonista */}
      <svg viewBox="-120 -80 340 250" width="100%" height="100%" className="text-charcoal overflow-visible drop-shadow-2xl">
        <defs>
          <mask id="mask-petals-final-large">
            <rect x="-120" y="-80" width="340" height="250" fill="white" />
            <g transform="translate(50 30)">
              <circle r="15" fill="black" />
            </g>
          </mask>
        </defs>
        
        <g className="bee-flower-main-group" transform-origin="50 140">
          {/* Tallo y Hojas - Más robustos */}
          <g transform="translate(50 140)">
            <g className="bee-stem">
              <line x1="0" y1="0" x2="0" y2="-110" stroke="currentColor" strokeWidth="4" />
              <g fill="currentColor">
                <g className="bee-leaf" transform="translate(0 -40) rotate(45)">
                  <path d="M 0 0 c 30 -15 25 -50 0 -65 -25 15 -30 50 0 65" />
                </g>
                <g transform="scale(-1 1)">
                  <g className="bee-leaf" transform="translate(0 -40) rotate(45)">
                    <path d="M 0 0 c 30 -15 25 -50 0 -65 -25 15 -30 50 0 65" />
                  </g>
                </g>
              </g>
            </g>
          </g>

          {/* Pétalos - Mucho más grandes */}
          <g mask="url(#mask-petals-final-large)">
            <g transform="translate(50 30)">
              <g fill="#FF5C89" className="bee-petals">
                {[0, 72, 144, 216, 288].map(angle => (
                  <circle key={angle} transform={`rotate(${angle}) translate(0 -22)`} r="20" />
                ))}
              </g>
            </g>
          </g>
        </g>

        {/* Camino de la abeja - Ajustado al nuevo tamaño de la flor */}
        <path id="beePath" fill="none" d="M -100 -50 a 90 90 0 0 0 180 0 90 90 0 0 0 -180 0 90 90 0 0 1 -180 0 90 90 0 0 1 180 0" />
      </svg>

      {/* Abeja - Mantiene su tamaño perfecto */}
      <svg id="bee" ref={beeRef} viewBox="-10.5 -10.5 21 21" className="absolute w-[100px] h-auto z-[60] opacity-0 overflow-visible">
        <g transform="rotate(90) translate(0 -4)">
          <g stroke="black">
            <circle fill="black" r="4.5" strokeWidth="1" />
            <g fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path transform="rotate(45) translate(0 -4)" d="M 0 0 v -3.5" />
              <path transform="rotate(-45) translate(0 -4)" d="M 0 0 v -3.5" />
              <g fill="#e0f2fe">
                <path transform="rotate(15)" d="M 0 0 h 9 a 4 4 0 0 1 0 8 q -5 0 -9 -8" />
                <path transform="scale(-1 1) rotate(15)" d="M 0 0 h 9 a 4 4 0 0 1 0 8 q -5 0 -9 -8" />
              </g>
              <g fill="#fbbf24">
                <path d="M 0 0 c 3 8 10 14 0 16 -10 -2 -3 -8 0 -16" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default BeeFlower;
