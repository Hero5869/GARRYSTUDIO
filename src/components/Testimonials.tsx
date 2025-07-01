
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Sarah & Mike Johnson',
      service: 'Wedding Photography',
      rating: 5,
      text: 'Absolutely stunning work! They captured every precious moment of our wedding day perfectly. The photos are beyond our expectations.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Emily Chen',
      service: 'Portrait Session',
      rating: 5,
      text: 'Professional, creative, and so much fun to work with. The final photos are magazine-quality and I couldn\'t be happier!',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'David Rodriguez',
      service: 'Drone Photography',
      rating: 5,
      text: 'The aerial shots of our property are incredible. Amazing attention to detail and truly artistic vision.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-[#1a1a18] to-[#10100f]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            What Our <span className="text-[#fff503]">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="relative">
          <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-[#333] min-h-[300px]">
            <CardContent className="p-8">
              <div className="text-center">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-4 border-[#fff503]"
                />
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <span key={i} className="text-[#fff503] text-2xl">★</span>
                  ))}
                </div>
                
                <p className="text-lg text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonials[currentSlide].text}"
                </p>
                
                <h4 className="text-xl font-semibold text-white mb-1">
                  {testimonials[currentSlide].name}
                </h4>
                <p className="text-[#fff503] text-sm">
                  {testimonials[currentSlide].service}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation buttons */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#fff503] text-[#10100f] hover:bg-[#fff503]/90 border-0"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#fff503] text-[#10100f] hover:bg-[#fff503]/90 border-0"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-[#fff503]' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
