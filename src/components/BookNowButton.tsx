import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';

const BookNowButton = () => {
  const whatsappLink = 'https://wa.me/7888302175?text=Hi!%20I%20want%20to%20book%20a%20photo%20session!';

  const handleClick = () => {
    window.open(whatsappLink, '_blank'); // opens in new tab
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-[#25D366] text-white hover:bg-[#128C7E] rounded-full px-6 py-4 shadow-2xl transition-all duration-300 z-50"
      size="lg"
    >
      <Camera className="w-5 h-5 mr-2" />
      WhatsApp Us
    </Button>
  );
};

export default BookNowButton;
