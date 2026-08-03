import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { birthdayWishes } from '../../data/birthdayData';
import type { BirthdayWish } from '../../data/birthdayData';
import CssRose from '../CssRose';
import MessageCard from '../MessageCard';

const WishCard = ({ wish, index }: { wish: BirthdayWish; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-full h-full [perspective:1000px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full duration-700 [transform-style:preserve-3d] shadow-sm hover:shadow-lg rounded-2xl transition-all ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm border border-dusty/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between [backface-visibility:hidden] select-none">
          <div className="flex justify-between items-start">
            <span className="font-serif text-3xl text-rose/70 font-semibold">
              {String(index + 1).padStart(2, '0')}
            </span>
            <Heart size={20} className="text-rose fill-rose/20" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <h3 className="font-serif text-2xl md:text-3xl text-charcoal font-medium text-center px-4">
              {wish.title}
            </h3>
          </div>
          <p className="text-[10px] text-charcoal/40 text-center font-sans tracking-widest uppercase">
            Haz clic para leer
          </p>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-accent text-white rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] select-none shadow-inner">
          <Heart size={24} className="text-white fill-white mb-2" />
          <p className="text-sm md:text-base font-sans text-center leading-relaxed text-white/95 italic px-2">
            "{wish.text}"
          </p>
        </div>
      </div>
    </div>
  );
};

const ReasonsSection = () => {
  return (
    <section className="py-32 relative z-10 w-full overflow-hidden">
      {/* Decorative background flowers */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <CssRose className="bottom-10 right-10" variant="pink" scale={0.8} delay={0.6} />
        <CssRose className="top-[40%] left-10" variant="white" scale={0.7} delay={0.2} />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-accent font-serif mb-4">
            Mis Deseos para Ti
          </h2>
          <p className="text-charcoal/70 font-sans max-w-md mx-auto italic">
            En tu día especial, estos son los deseos que guardo para ti con todo mi corazón.
          </p>
        </div>

        {/* Cards Grid - 2 columns on tablets/PC for wider, more spacious landscape cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto justify-items-center">
          {birthdayWishes.map((wish, index) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="w-full max-w-[350px] md:max-w-[460px] h-[280px] md:h-[240px]"
            >
              <WishCard wish={wish} index={index} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <MessageCard />
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
