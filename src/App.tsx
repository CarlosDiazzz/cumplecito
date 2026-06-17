import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OrigamiLily from './components/OrigamiLily';
import OrigamiRose from './components/OrigamiRose';
import GlowFlower from './components/GlowFlower';
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
        <GlowFlower className="absolute bottom-[5%] left-[5%] z-20 scale-75" />
        <GlowFlower className="absolute bottom-[8%] right-[5%] scale-x-[-1] z-20 scale-75" />
        
        <OrigamiRose color="white" className="top-[10%] left-[10%]" delay={0.2} />
        <OrigamiRose color="pink" className="top-[15%] right-[12%]" delay={0.6} />

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
          className="z-10"
        >
          <OrigamiLily />
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <p className="text-charcoal font-serif italic text-sm">Desliza para ver nuestra historia</p>
        </div>
      </section>

      {/* --- OUR STORY SECTION --- */}
      <section ref={storyRef} className="py-32 px-6 max-w-5xl mx-auto relative z-10">
        <OrigamiRose color="white" className="-top-10 -left-10" delay={0.5} />
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
      </section>

      {/* --- BIRTHDAY WISHES SECTION --- */}
      <section ref={wishesRef} className="py-32 px-6 bg-white/30 backdrop-blur-sm relative overflow-hidden z-10">
        <OrigamiRose color="pink" className="bottom-10 right-10" delay={0.2} />
        <OrigamiRose color="white" className="top-10 right-[20%]" delay={0.4} />
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
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
