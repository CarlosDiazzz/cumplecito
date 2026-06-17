import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OrigamiLily from './components/OrigamiLily';
import OrigamiRose from './components/OrigamiRose';
import GlowFlower from './components/GlowFlower';
import CssRose from './components/CssRose';
import BeeFlower from './components/BeeFlower';
import BeeSwarm from './components/BeeSwarm';
import ParticleLayer from './components/ParticleLayer';
import MessageCard from './components/MessageCard';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const storyRef = useRef<HTMLDivElement>(null);
  const wishesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = [storyRef.current, wishesRef.current];
    sections.forEach(section => {
      if (section) {
        gsap.fromTo(section, 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1.5, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            }
          }
        );
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-petal relative overflow-x-hidden font-sans">
      <BeeSwarm />
      <ParticleLayer />
      
      {/* --- HERO SECTION --- */}
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

      {/* --- OUR STORY SECTION --- */}
      <section ref={storyRef} className="py-32 relative z-10 w-full overflow-hidden">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <CssRose className="top-10 left-10" variant="pink" scale={0.7} delay={0.5} />
          <CssRose className="top-[40%] right-[10%]" variant="white" scale={0.8} delay={1.2} />
          <GlowFlower className="absolute top-[10%] right-[2%] scale-75 opacity-90 rotate-12" />
          <GlowFlower className="absolute top-[45%] left-[-2%] scale-60 opacity-90 -rotate-12" />
          <GlowFlower className="absolute bottom-[0%] right-[5%] scale-75 opacity-90" />
        </div>
        
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl text-accent font-serif mb-16 text-center">Nuestra Historia</h2>
        
        <div className="space-y-24 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-dusty/40 -translate-x-1/2 hidden md:block" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 relative">
            <div className="md:w-1/2 text-center md:text-right">
              <h3 className="text-3xl font-serif text-charcoal mb-4">El Comienzo</h3>
              <p className="text-charcoal/80 leading-relaxed italic">
                "Todo empezó como un susurro, una mirada casual que se convirtió en el inicio de mi mundo entero. Recuerdo perfectamente ese primer momento..."
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-white border-4 border-rose z-10 hidden md:block" />
            <div className="md:w-1/2" />
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-8 relative">
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl font-serif text-charcoal mb-4">Nuestra Primera Cita</h3>
              <p className="text-charcoal/80 leading-relaxed italic">
                "Los nervios, las risas y esa sensación de que el tiempo se detenía. Supe desde entonces que eras especial."
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-white border-4 border-accent z-10 hidden md:block" />
            <div className="md:w-1/2" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 relative">
            <div className="md:w-1/2 text-center md:text-right">
              <h3 className="text-3xl font-serif text-charcoal mb-4">Hoy y Siempre</h3>
              <p className="text-charcoal/80 leading-relaxed italic">
                "Cada día a tu lado es un regalo. Eres mi compañera de vida, mi mejor amiga y mi gran amor."
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-white border-4 border-rose z-10 hidden md:block" />
            <div className="md:w-1/2" />
          </div>
        </div>
        </div>
      </section>

      {/* --- BIRTHDAY WISHES SECTION --- */}
      <section ref={wishesRef} className="py-32 relative overflow-hidden z-10 w-full bg-white/30 backdrop-blur-sm">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <CssRose className="bottom-10 right-10" variant="pink" scale={1.1} delay={0.2} />
          <CssRose className="top-10 right-[20%]" variant="white" scale={0.9} delay={0.4} />
          <CssRose className="top-[40%] left-[5%]" variant="pink" scale={0.8} delay={0.7} />
          <GlowFlower className="absolute top-[5%] left-[2%] scale-75 opacity-90" />
          <GlowFlower className="absolute top-[15%] right-[2%] scale-75 opacity-90 rotate-[-10deg]" />
          <GlowFlower className="absolute top-[45%] right-[-1%] scale-65 opacity-90 rotate-[20deg]" />
          <GlowFlower className="absolute bottom-[20%] left-[5%] scale-90 opacity-90 -rotate-[10deg]" />
          <GlowFlower className="absolute bottom-[5%] right-[2%] scale-80 opacity-95 rotate-12" />
        </div>
        
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl text-accent font-serif mb-12">Mis Deseos para Ti</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white/50 border border-dusty shadow-sm hover:shadow-md transition-shadow">
              <p className="font-serif text-xl italic text-charcoal">"Que nunca dejes de sonreír, porque tu sonrisa ilumina hasta mis días más oscuros."</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/50 border border-dusty shadow-sm hover:shadow-md transition-shadow">
              <p className="font-serif text-xl italic text-charcoal">"Que todos tus sueños, por muy grandes que sean, se hagan realidad."</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/50 border border-dusty shadow-sm hover:shadow-md transition-shadow">
              <p className="font-serif text-xl italic text-charcoal">"Que siempre te sientas tan amada como lo eres en este preciso momento."</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/50 border border-dusty shadow-sm hover:shadow-md transition-shadow">
              <p className="font-serif text-xl italic text-charcoal">"Que este nuevo año de vida te traiga aventuras infinitas y mucha paz."</p>
            </div>
          </div>
          
          <MessageCard />
        </div>
      </section>

      <footer className="py-12 text-center text-charcoal/30 text-xs font-sans">
        Hecho con todo mi corazón para Alessandra • 2026
      </footer>
    </div>
  );
}

export default App;
