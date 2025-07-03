
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Plane, Image, Images, Printer, Monitor } from 'lucide-react';

const Services = () => {
  const services = [
  {
    icon: Camera,
    title: 'Wedding Photography',
    description: 'Capture your special day with stunning, timeless photographs that tell your love story.'
  },
  {
    icon: Camera,
    title: 'Traditional Photography',
    description: 'Professional portrait sessions for families, individuals, and special occasions.'
  },
  {
    icon: Plane,
    title: 'Cinematic Drone Shots',
    description: 'Breathtaking aerial photography and videography for unique perspectives.'
  },
  {
    icon: Printer,
    title: 'T-Shirt & Camera Photo Printing',
    description: 'Custom printing services for apparel and camera equipment with your favorite photos.'
  },
  {
    icon: Monitor,
    title: 'Birthday Photo Shoot',
    description: 'Memorable photography experience specially designed for birthday celebrations.'
  }
];

  return (
    <section id="services" className="py-20 px-4 bg-[#10100f] relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-64 h-64 bg-[#fff503] opacity-5 rounded-full blur-3xl animate-pulse"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: '6s'
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Our <span className="text-[#fff503]">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional photography services tailored to capture your most important moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-[#333] hover:border-[#fff503] transition-all duration-300 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-[#fff503] rounded-full w-fit group-hover:animate-pulse">
                  <service.icon className="w-8 h-8 text-[#10100f]" />
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-[#fff503] transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
