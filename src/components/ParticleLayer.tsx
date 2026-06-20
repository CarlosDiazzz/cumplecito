/* eslint-disable react-hooks/purity */
import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface Particle {
  id: number;
  initialX: string;
  opacity: number;
  scale: number;
  animateX: string;
  duration: number;
  delay: number;
}

const ParticleLayer = () => {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      initialX: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.5 + 0.2,
      scale: Math.random() * 0.5 + 0.5,
      animateX: `${Math.random() * 100 + (Math.random() * 20 - 10)}%`,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 10,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ 
            x: p.initialX, 
            y: "110%", 
            opacity: p.opacity,
            scale: p.scale
          }}
          animate={{ 
            y: "-10%",
            x: p.animateX,
            rotate: 360
          }}
          transition={{ 
            duration: p.duration, 
            repeat: Infinity, 
            ease: "linear",
            delay: p.delay
          }}
          className="absolute w-2 h-2 rounded-full bg-accent opacity-30"
        />
      ))}
    </div>
  );
};

export default ParticleLayer;
