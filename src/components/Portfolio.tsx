
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const Portfolio = () => {
  const portfolioImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      alt: 'Wedding Photography',
      category: 'Wedding'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      alt: 'Landscape Photography',
      category: 'Landscape'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      alt: 'Portrait Photography',
      category: 'Portrait'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      alt: 'Nature Photography',
      category: 'Nature'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      alt: 'Drone Photography',
      category: 'Drone'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      alt: 'Event Photography',
      category: 'Event'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-gradient-to-b from-[#10100f] to-[#1a1a18]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Our <span className="text-[#fff503]">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our collection of stunning photographs capturing life's most precious moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer overflow-hidden bg-transparent border-0 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10100f] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-[#fff503] text-sm font-semibold">{image.category}</p>
                      <p className="text-lg font-medium">{image.alt}</p>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full h-full bg-[#10100f] border-[#fff503]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
