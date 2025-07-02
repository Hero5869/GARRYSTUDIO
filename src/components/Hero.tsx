
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.postimg.cc/GtBbH1B5/GARRY.png')`
        }}
      >
        <div className="absolute inset-0 bg-[#10100f] bg-opacity-60"></div>
      </div>

      {/* Floating photo frames animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-16 h-12 border-2 border-[#fff503] opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <Camera className="w-16 h-16 text-[#fff503] mx-auto mb-4" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          GARRY <span className="text-[#fff503]">STUDIO</span><br />
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Professional Photography Services for Every Occasion
        </p>
        
        <Button 
          onClick={scrollToPortfolio}
          className="bg-[#fff503] text-[#10100f] hover:bg-[#fff503]/90 text-lg px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          Explore Gallery
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#fff503] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#fff503] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
