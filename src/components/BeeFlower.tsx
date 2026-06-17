import { useEffect, useRef } from 'react';
import * as anime_module from 'animejs';

const BeeFlower = () => {
  const beeRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    // Handling the module export difference across different build environments
    const anime_any = anime_module as any;
    const anime_fn = anime_any.default || anime_any;
    
    if (!anime_fn || (typeof anime_fn !== 'function' && !anime_fn.timeline)) {
       console.error("Anime.js could not be loaded correctly");
       return;
    }

    const path = anime_fn.path('#beePath');

    const timeline = anime_fn.timeline({
      easing: 'easeInOutExpo',
      duration: 1000,
    });

    timeline.add({
      targets: '.bee-stem',
      scaleY: [0, 1],
      transformOrigin: 'bottom center',
    })
    .add({
      targets: '.bee-leaf',
      rotate: [0, 45],
      duration: 800,
    })
    .add({
      targets: '.bee-petals',
      scale: [0, 1],
      duration: 1000,
    }, '-=800')
    .add({
      targets: beeRef.current,
      opacity: [0, 1],
      duration: 500,
    }, '-=500');

    // Flying bee animation
    anime_fn({
      targets: beeRef.current,
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      loop: true,
      duration: 12000,
      easing: 'linear'
    });

    // Gentle flower movements after entrance
    timeline.finished.then(() => {
      anime_fn({
        targets: '.bee-leaf',
        rotate: 40,
        duration: 3000,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutQuad'
      });
      anime_fn({
        targets: '.bee-petals',
        scale: 1.05,
        duration: 4000,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutQuad'
      });
    });
  }, []);

  return (
    <div className="relative w-[300px] h-[300px] flex items-center justify-center pointer-events-none select-none z-50">
      <svg viewBox="-25 0 150 100" width="200" height="150" className="text-charcoal overflow-visible">
        <defs>
          <mask id="mask-petals">
            <rect width="100" height="100" fill="white" />
            <g transform="translate(50 40)">
              <circle r="11" fill="black" />
            </g>
          </mask>
        </defs>
        
        <g transform="translate(50 98)">
          <g className="bee-stem">
            <line x1="0" y1="0" x2="0" y2="-58" stroke="currentColor" strokeWidth="2" />
            <g fill="currentColor">
              <g className="bee-leaf" transform="translate(0 -20) rotate(45)">
                <path d="M 0 0 c 20 -8 15 -32 0 -42 -15 10 -20 34 0 42" />
              </g>
              <g transform="scale(-1 1)">
                <g className="bee-leaf" transform="translate(0 -20) rotate(45)">
                  <path d="M 0 0 c 20 -8 15 -32 0 -42 -15 10 -20 34 0 42" />
                </g>
              </g>
            </g>
          </g>
        </g>

        <g mask="url(#mask-petals)">
          <g transform="translate(50 40)">
            <g fill="#FF5C89" className="bee-petals">
              {[0, 72, 144, 216, 288].map(angle => (
                <circle key={angle} transform={`rotate(${angle}) translate(0 -14)`} r="11" />
              ))}
            </g>
          </g>
        </g>

        <path id="beePath" fill="none" d="M -25 -20 a 30 30 0 0 0 60 0 30 30 0 0 0 -60 0 30 30 0 0 1 -60 0 30 30 0 0 1 60 0" />
      </svg>

      <svg id="bee" ref={beeRef} viewBox="-10.5 -10.5 21 21" className="absolute w-[50px] h-auto z-[60] opacity-0">
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

export default BeeFlower;
