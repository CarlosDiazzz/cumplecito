import { motion } from 'framer-motion';
import { birthdayWishes } from '../../data/birthdayData';
import CssRose from '../CssRose';
import GlowFlower from '../GlowFlower';
import MessageCard from '../MessageCard';

const WishesSection = () => {
  return (
    <section className="py-32 relative overflow-hidden z-10 w-full bg-white/30 backdrop-blur-sm border-t border-b border-dusty/20">
      {/* Decorative background flowers */}
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
        <h2 className="text-5xl md:text-6xl text-accent font-serif mb-16">
          Mis Deseos para Ti
        </h2>
        
        {/* Wishes Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {birthdayWishes.map((wish, index) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="p-8 rounded-3xl bg-white/50 border border-dusty shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]"
            >
              <p className="font-serif text-xl italic text-charcoal leading-relaxed">
                "{wish.text}"
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Final Interactive Letter */}
        <MessageCard />
      </div>
    </section>
  );
};

export default WishesSection;
