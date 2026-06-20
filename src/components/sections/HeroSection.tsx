import { motion } from 'framer-motion';
import GlowFlower from '../GlowFlower';
import CssRose from '../CssRose';
import BeeFlower from '../BeeFlower';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4 relative z-10">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <GlowFlower className="absolute bottom-[5%] left-[2%] scale-75 opacity-90" />
        <GlowFlower className="absolute bottom-[8%] right-[2%] scale-x-[-1] scale-75 opacity-90" />
        <CssRose className="top-[10%] left-[10%]" variant="white" scale={0.9} delay={0.2} />
        <CssRose className="top-[15%] right-[12%]" variant="pink" scale={1} delay={0.6} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center z-10 mb-12"
      >
        <h1 className="text-6xl md:text-8xl text-accent font-serif mb-4 drop-shadow-sm tracking-tighter">
          ¡Feliz Cumpleaños,
        </h1>
        <h1 className="text-7xl md:text-9xl text-charcoal font-serif drop-shadow-sm tracking-tighter">
          Alessandra!
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: "backOut" }}
        className="z-10 flex flex-col items-center justify-center min-h-[500px]"
      >
        <BeeFlower />
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <p className="text-charcoal font-serif italic text-sm">Desliza para ver nuestra historia</p>
      </div>
    </section>
  );
};

export default HeroSection;
