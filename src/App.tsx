import BeeSwarm from './components/BeeSwarm';
import ParticleLayer from './components/ParticleLayer';
import HeroSection from './components/sections/HeroSection';
import StorySection from './components/sections/StorySection';
import GallerySection from './components/sections/GallerySection';
import ReasonsSection from './components/sections/ReasonsSection';
import WishesSection from './components/sections/WishesSection';

function App() {
  return (
    <div className="min-h-screen bg-petal relative overflow-x-hidden font-sans">
      {/* Decorative Interactive Background Layers */}
      <BeeSwarm />
      <ParticleLayer />
      
      {/* Sections */}
      <HeroSection />
      
      <StorySection />
      
      <GallerySection />
      
      <ReasonsSection />
      
      <WishesSection />

      {/* Footer */}
      <footer className="py-12 text-center text-charcoal/30 text-xs font-sans relative z-10">
        Hecho con todo mi corazón para Alessandra • 2026
      </footer>
    </div>
  );
}

export default App;
