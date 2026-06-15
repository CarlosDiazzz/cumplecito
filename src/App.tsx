import { motion } from 'framer-motion';
import OrigamiLily from './components/OrigamiLily';
import FloralDecoration from './components/FloralDecoration';
import ParticleLayer from './components/ParticleLayer';
import MessageCard from './components/MessageCard';

function App() {
  return (
    <div className="min-h-screen bg-petal relative overflow-hidden flex flex-col items-center justify-center p-4">
      <ParticleLayer />
      
      {/* Decorative Flowers - Top Left */}
      <FloralDecoration type="lily" color="white" className="top-10 left-10" delay={0.2} />
      <FloralDecoration type="rose" color="pink" className="top-24 left-24" delay={0.5} />
      
      {/* Decorative Flowers - Top Right */}
      <FloralDecoration type="rose" color="white" className="top-10 right-10" delay={0.8} />
      <FloralDecoration type="lily" color="pink" className="top-24 right-24" delay={1.1} />
      
      {/* Decorative Flowers - Bottom Left */}
      <FloralDecoration type="rose" color="pink" className="bottom-10 left-10" delay={1.4} />
      <FloralDecoration type="lily" color="white" className="bottom-24 left-24" delay={1.7} />
      
      {/* Decorative Flowers - Bottom Right */}
      <FloralDecoration type="lily" color="pink" className="bottom-10 right-10" delay={2.0} />
      <FloralDecoration type="rose" color="white" className="bottom-24 right-24" delay={2.3} />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10 mb-8"
      >
        <h1 className="text-5xl md:text-7xl text-accent font-serif mb-2 drop-shadow-sm">
          ¡Feliz Cumpleaños,
        </h1>
        <h1 className="text-6xl md:text-8xl text-charcoal font-serif drop-shadow-sm">
          Alessandra!
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "backOut" }}
        className="z-10"
      >
        <OrigamiLily />
      </motion.div>

      <MessageCard />

      <footer className="absolute bottom-4 left-0 w-full text-center text-charcoal/40 text-xs font-sans">
        Hecho con amor por tu novio • 2026
      </footer>
    </div>
  );
}

export default App;
