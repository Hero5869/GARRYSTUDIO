
import { useState } from 'react';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import ModernPreloader from '@/components/ModernPreloader';
import BookNowButton from '@/components/BookNowButton';
import BackgroundMusic from '@/components/BackgroundMusic';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <ModernPreloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div className="min-h-screen bg-[#10100f] text-white overflow-x-hidden animate-fade-in">
      <BackgroundMusic />
      <Hero />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <BookNowButton />
    </div>
  );
};

export default Index;
