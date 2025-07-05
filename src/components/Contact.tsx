
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Instagram, Youtube } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const { toast } = useToast();

  const generateWhatsAppMessage = () => {
    const template = `Hi! My name is ${formData.name || '[Name]'}.

📧 Email: ${formData.email || '[Email]'}
📱 Phone: ${formData.phone || '[Phone Number]'}
📸 Service of Interest: ${formData.service || '[Service]'}

💬 Message: ${formData.message || '[Message]'}

I'm interested in your photography services. Looking forward to hearing from you!`;

    return encodeURIComponent(template);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if required fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill required fields",
        description: "Name, email, and message are required fields.",
        variant: "destructive"
      });
      return;
    }

    const whatsappMessage = generateWhatsAppMessage();
    const whatsappLink = `https://wa.me/9876370988?text=${whatsappMessage}`;
    
    // Open WhatsApp with the pre-filled message
    window.open(whatsappLink, '_blank');
    
    toast({
      title: "Opening WhatsApp!",
      description: "Your message has been prepared. Complete the sending in WhatsApp.",
    });
    
    // Reset form after successful submission
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[#10100f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Get In <span className="text-[#fff503]">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to create something amazing together? Let's discuss your vision and bring it to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-[#333]">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-[#10100f] border-[#333] text-white focus:border-[#fff503]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-[#10100f] border-[#333] text-white focus:border-[#fff503]"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-gray-300">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-[#10100f] border-[#333] text-white focus:border-[#fff503]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="service" className="text-gray-300">Service of Interest</Label>
                    <Input
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      placeholder="e.g., Wedding Photography"
                      className="bg-[#10100f] border-[#333] text-white focus:border-[#fff503]"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-gray-300">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-[#10100f] border-[#333] text-white focus:border-[#fff503]"
                    placeholder="Tell us about your project and vision..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-[#fff503] text-[#10100f] hover:bg-[#fff503]/90 font-semibold py-3"
                >
                  Send via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-[#333]">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[#fff503] rounded-full">
                      <MapPin className="w-5 h-5 text-[#10100f]" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Address</p>
                      <p className="text-gray-300">VPO JANDWALA MIRA SANGLA, FAZILKA, PUNJAB 152128</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[#fff503] rounded-full">
                      <Phone className="w-5 h-5 text-[#10100f]" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Phone</p>
                      <p className="text-gray-300">+91 98763 70988</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[#fff503] rounded-full">
                      <Mail className="w-5 h-5 text-[#10100f]" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-gray-300">WARWALGARRY4@GMAIL.COM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-[#333]">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
                
                <div className="flex space-x-4">
                  <Button size="icon" className="bg-[#fff503] text-[#10100f] hover:bg-[#fff503]/90">
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button size="icon" className="bg-[#fff503] text-[#10100f] hover:bg-[#fff503]/90">
                    <Youtube className="w-5 h-5" />
                  </Button>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-white font-semibold mb-2">Business Hours</h4>
                  <div className="text-gray-300 text-sm space-y-1">
                    <p>Monday - Friday: 9AM - 6PM</p>
                    <p>Saturday: 10AM - 4PM</p>
                    <p>Sunday: By Appointment</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
