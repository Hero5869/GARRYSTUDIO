
import { useState, useEffect } from 'react';
import { MessageCircle, Loader2 } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WhatsAppModal = ({ isOpen, onClose }: WhatsAppModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleWhatsAppClick = () => {
    setIsLoading(true);
    // You can replace this number with your actual WhatsApp number
    const whatsappNumber = "919XXXXXXXXX"; // Replace with your number
    const message = "Hi! I'd like to book a photography session.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsLoading(false);
      onClose();
    }, 1000);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#10100f] flex items-center justify-center z-50 transition-all duration-500">
      <div className="text-center">
        <div 
          className="relative w-32 h-32 mx-auto mb-8 cursor-pointer transform transition-all duration-300 hover:scale-110"
          onClick={handleWhatsAppClick}
        >
          {/* WhatsApp icon with glow effect */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-20"></div>
          <div className="relative w-32 h-32 bg-green-500 rounded-full flex items-center justify-center shadow-2xl">
            {isLoading ? (
              <Loader2 className="w-16 h-16 text-white animate-spin" />
            ) : (
              <MessageCircle className="w-16 h-16 text-white" />
            )}
          </div>
          
          {/* Additional glow rings */}
          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-30"></div>
          <div className="absolute inset-0 bg-green-300 rounded-full animate-ping opacity-20" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <h2 className="text-2xl font-bold text-[#fff503] mb-4">
          {isLoading ? 'Connecting...' : 'Let\'s Chat on WhatsApp!'}
        </h2>
        <p className="text-white mb-8">
          {isLoading ? 'Opening WhatsApp...' : 'Click the icon above to start your booking'}
        </p>

        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default WhatsAppModal;
