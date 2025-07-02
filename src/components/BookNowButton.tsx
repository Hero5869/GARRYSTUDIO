import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BookNowButton = () => {
  const { toast } = useToast();

  const handleBookNow = () => {
    toast({
      title: "Let's Get Started!",
      description: "Scroll up to the contact form to book your session.",
    });

    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Button
      onClick={handleBookNow}
      className="fixed bottom-6 right-6 bg-[#fff503] text-[#10100f] hover:bg-[#fff503]/90 rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 z-50"
      size="lg"
    >
      <Camera className="w-5 h-5 mr-2" />
      Book Now
    </Button>
  );
};

export default BookNowButton;
