import BeeSwarm from './components/BeeSwarm';
import ParticleLayer from './components/ParticleLayer';
import RunningDog from './components/RunningDog';
import HeroSection from './components/sections/HeroSection';
import StorySection from './components/sections/StorySection';
import GallerySection from './components/sections/GallerySection';
import ReasonsSection from './components/sections/ReasonsSection';

function App() {
  return (
    <div className="min-h-screen bg-petal relative overflow-x-hidden font-sans">
      {/* Decorative Interactive Background Layers */}
      <BeeSwarm />
      <ParticleLayer />
      <RunningDog />
      
      {/* Sections */}
      <HeroSection />
      
      <StorySection />
      
      <GallerySection />
      
      <ReasonsSection />

      {/* Footer */}
      <footer className="py-12 text-center text-charcoal/30 text-xs font-sans relative z-10">
        Hecho con todo mi corazón para Alessandra • 2026
      </footer>
    </div>
  );
}

export default App;
