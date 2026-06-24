import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';
import { gsap } from 'gsap';

const MessageCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  
  const fullText = "Feliz cumpleaños, mi amor. Que este día esté lleno de la misma luz y alegría que tú traes a mi vida todos los días. Eres tan hermosa y delicada como estos lirios, pero con una fuerza increíble. Eres mi persona favorita en el mundo.\n\n¡Te quiero muchísimo!";

  // Detect screen size for responsive styling
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsTypingDone(false);
      if (textRef.current) {
        const textContainer = textRef.current;
        textContainer.innerHTML = "";
        
        const obj = { charIndex: 0 };
        // Elegant typing animation starting with a 0.6s delay
        const typingTween = gsap.to(obj, {
          charIndex: fullText.length,
          duration: 6,
          ease: "none",
          delay: 0.6,
          onUpdate: () => {
            const currentIndex = Math.floor(obj.charIndex);
            const currentText = fullText.slice(0, currentIndex);
            textContainer.innerHTML = currentText.replace(/\n/g, "<br />") + '<span class="inline-block w-[1px] h-[1.1em] ml-0.5 bg-stone-400 align-middle"></span>';
          },
          onComplete: () => {
            textContainer.innerHTML = fullText.replace(/\n/g, "<br />") + '<span class="inline-block w-[1px] h-[1.1em] ml-0.5 bg-stone-400 animate-blink align-middle"></span>';
            setIsTypingDone(true);
          }
        });

        return () => {
          typingTween.kill();
        };
      }
    } else {
      setIsTypingDone(false);
      if (textRef.current) {
        textRef.current.innerHTML = "";
      }
    }
  }, [isOpen, isMobile]); // Re-run if screen size changes layout

  const lineHeight = isMobile ? 23 : 28;

  return (
    <div className="relative z-20 mt-12 flex flex-col items-center justify-center w-full min-h-[460px] sm:min-h-[500px]">
      
      {/* Outer Envelope Wrapper */}
      <div 
        onClick={() => !isOpen && setIsOpen(true)}
        className={`relative w-80 sm:w-[440px] h-56 sm:h-64 bg-[#FAF7F2] rounded-xl border border-stone-200/80 shadow-[0_6px_20px_rgba(139,126,116,0.05)] flex items-center justify-center cursor-pointer transition-all duration-500 overflow-visible ${
          !isOpen ? 'hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(139,126,116,0.1)]' : ''
        }`}
      >
        {/* 1. Inside Pocket Background - Z-0 */}
        <div className="absolute inset-0 bg-[#F5F2EC] rounded-xl z-0 pointer-events-none" />

        {/* 2. The Stationery Notebook Paper - Z-10 / Z-40 */}
        <motion.div
          animate={isOpen ? {
            y: isMobile ? -145 : -150,
            height: isMobile ? 365 : 340,
            scale: 1,
            opacity: 1,
            zIndex: 40,
            boxShadow: "0 25px 45px rgba(139,126,116,0.14)"
          } : {
            y: 20,
            height: 120,
            scale: 0.92,
            opacity: 0,
            zIndex: 10,
            boxShadow: "0 2px 8px rgba(0,0,0,0.01)"
          }}
          transition={{
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1] // Apple-style transition
          }}
          className={`absolute left-[4%] right-[4%] top-4 bg-[#FFFDFB] rounded-lg border border-stone-150 p-5 sm:p-7 pr-4 flex flex-col justify-between overflow-hidden ${
            isOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        >
          {/* Spiral binding rings on the left edge */}
          {isOpen && (
            <div className="absolute left-[-4px] top-6 bottom-6 flex flex-col justify-between w-2 pointer-events-none z-50">
              {Array.from({ length: 8 }).map((_, i) => (
                <div 
                  key={i} 
                  className="w-2.5 h-4.5 bg-gradient-to-r from-stone-300 via-stone-100 to-stone-400 rounded-full border border-stone-400/20 shadow-[1px_1px_2px_rgba(0,0,0,0.08)]" 
                />
              ))}
            </div>
          )}

          {/* Red notebook margin line on the left side */}
          <div className="absolute left-6 sm:left-7 top-0 bottom-0 w-[1px] bg-[#E25C5C]/35 pointer-events-none z-20" />
          
          <div className="relative z-10 pl-5 sm:pl-6 text-left">
            <h3 className="text-sm sm:text-base font-serif text-[#C86B85] italic mb-3 sm:mb-4 font-semibold">
              Para Alessandra,
            </h3>
            
            {/* Lined Notebook Page Container */}
            <div 
              style={{
                backgroundImage: `repeating-linear-gradient(transparent, transparent ${lineHeight - 1}px, #E6DFD5 ${lineHeight - 1}px, #E6DFD5 ${lineHeight}px)`,
                backgroundSize: `100% ${lineHeight}px`,
                lineHeight: `${lineHeight}px`
              }}
              className="w-full"
            >
              <p 
                ref={textRef} 
                style={{ lineHeight: `${lineHeight}px` }}
                className="text-stone-700 font-sans text-xs sm:text-[13px] font-light leading-[23px] sm:leading-[28px] min-h-[196px] tracking-wide"
              />
            </div>
          </div>

          <div className="relative z-10 pl-5 sm:pl-6 flex justify-between items-center border-t border-stone-100 pt-3 mt-2">
            <div className="flex gap-1">
              <span className="text-[#E25C5C] text-sm opacity-80">❤</span>
              <span className="text-[#C86B85] text-sm opacity-80">❤</span>
            </div>
            
            {isTypingDone && (
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Avoid triggering envelope click
                  setIsOpen(false);
                }}
                className="text-[10px] sm:text-xs font-sans tracking-widest text-stone-400 hover:text-[#C86B85] uppercase transition-colors duration-300 cursor-pointer"
              >
                Cerrar Carta
              </button>
            )}
          </div>
        </motion.div>

        {/* 3. Front Pocket Sleeve - Z-20 */}
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-[#FAF7F2] border-x border-b border-stone-200/80 rounded-b-xl z-20 pointer-events-none overflow-hidden">
          {/* Diagonal lines to make it look like a folded envelope front */}
          <svg 
            viewBox="0 0 440 156" 
            preserveAspectRatio="none" 
            className="absolute inset-0 w-full h-full text-stone-300/40" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 0 156 L 220 65 L 440 156" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <path d="M 0 0 L 220 65 L 440 0" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>

          {/* Minimal Text on front */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5">
            <span className="font-serif italic text-xs tracking-wide text-stone-600 font-medium">
              Un mensaje especial
            </span>
            <span className="text-[9px] tracking-widest text-stone-400 uppercase font-light">
              para ti
            </span>
          </div>
        </div>

        {/* 4. Triangular Flap - Z-30 */}
        <motion.div
          animate={{
            scaleY: isOpen ? -1 : 1,
          }}
          style={{ originY: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 inset-x-0 h-[50%] z-30 pointer-events-none"
        >
          <svg 
            viewBox="0 0 440 128" 
            className="w-full h-full text-[#FAF7F2] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.03)]"
            preserveAspectRatio="none"
          >
            <path 
              d="M 0 0 L 440 0 L 220 128 Z" 
              fill="currentColor" 
              stroke="#E4E0D9" 
              strokeWidth="0.8" 
            />
          </svg>
        </motion.div>

        {/* 5. Gold/Minimalist Wax Seal Button - Z-35 */}
        {!isOpen && (
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(true);
            }}
            className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-35 w-11 h-11 rounded-full bg-[#FAF7F2] border border-stone-250 shadow-[0_3px_10px_rgba(0,0,0,0.06)] flex items-center justify-center cursor-pointer hover:bg-[#F5F2EB] transition-colors"
          >
            <Heart size={14} className="text-[#C86B85] fill-[#C86B85]/10 stroke-[1.2]" />
          </motion.button>
        )}

      </div>
      
      {/* Help text below closed envelope */}
      {!isOpen && (
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-charcoal/60 text-xs italic font-sans"
        >
          Haz clic en el sello para abrir el sobre
        </motion.p>
      )}

    </div>
  );
};

export default MessageCard;
