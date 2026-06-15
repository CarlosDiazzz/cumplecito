import { motion } from 'framer-motion';
import OrigamiLily from './components/OrigamiLily';
import OrigamiRose from './components/OrigamiRose';
import ParticleLayer from './components/ParticleLayer';
import MessageCard from './components/MessageCard';

function App() {
  return (
    <div className="min-h-screen bg-petal relative overflow-hidden flex flex-col items-center justify-center p-4">
      <ParticleLayer />
      
      {/* Origami Roses - Automatic Unfolding */}
      <OrigamiRose color="white" className="top-10 left-10" delay={0.5} />
      <OrigamiRose color="pink" className="top-32 left-32" delay={1.2} />
      
      <OrigamiRose color="pink" className="top-10 right-10" delay={0.8} />
      <OrigamiRose color="white" className="top-32 right-32" delay={1.5} />
      
      <OrigamiRose color="white" className="bottom-10 left-10" delay={2.0} />
      <OrigamiRose color="pink" className="bottom-32 left-32" delay={2.5} />
      
      <OrigamiRose color="pink" className="bottom-10 right-10" delay={2.2} />
      <OrigamiRose color="white" className="bottom-32 right-32" delay={2.8} />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center z-10 mb-8"
      >
        <h1 className="text-5xl md:text-7xl text-accent font-serif mb-2 drop-shadow-sm tracking-tight">
          ¡Feliz Cumpleaños,
        </h1>
        <h1 className="text-6xl md:text-8xl text-charcoal font-serif drop-shadow-sm tracking-tighter">
          Alessandra!
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: "backOut" }}
        className="z-10"
      >
        <OrigamiLily />
      </motion.div>

      <MessageCard />

      <footer className="absolute bottom-4 left-0 w-full text-center text-charcoal/30 text-xs font-sans">
        Hecho con amor por tu novio • 2026
      </footer>
    </div>
  );
}

export default App;
