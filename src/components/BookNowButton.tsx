
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';
import WhatsAppModal from './WhatsAppModal';

const BookNowButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleBookNow = () => {
    setShowModal(true);
  };

  return (
    <>
      <Button
        onClick={handleBookNow}
        className="fixed bottom-6 right-6 bg-[#fff503] text-[#10100f] hover:bg-[#fff503]/90 rounded-full px-6 py-4 shadow-2xl transition-all duration-300 z-50 group"
        size="lg"
        style={{
          boxShadow: '0 0 20px rgba(255, 245, 3, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)',
          animation: 'pulse 3s ease-in-out infinite'
        }}
      >
        <Camera className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
        <span className="font-semibold">Book Now</span>
        
        {/* Glow effect ring */}
        <div className="absolute inset-0 rounded-full bg-[#fff503] opacity-20 animate-ping"></div>
      </Button>

      <WhatsAppModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </>
  );
};

export default BookNowButton;
