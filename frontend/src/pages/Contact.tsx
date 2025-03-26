
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
    <div className="w-full page-transition">
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              We're here to help and answer any questions you might have about AgroSphere.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                    <p className="text-muted-foreground">
                      123 Agri Tower, Green Avenue<br />
                      Farm City - 560001<br />
                      Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@agrosphere.com" className="hover:text-primary transition-colors">
                        info@agrosphere.com
                      </a>
                      <br />
                      <a href="mailto:support@agrosphere.com" className="hover:text-primary transition-colors">
                        support@agrosphere.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                        +123 456 7890
                      </a>
                      <br />
                      <a href="tel:+1234567891" className="hover:text-primary transition-colors">
                        +123 456 7891
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Monday - Friday:</p>
                    <p className="text-muted-foreground">9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Saturday:</p>
                    <p className="text-muted-foreground">10:00 AM - 2:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Sunday:</p>
                    <p className="text-muted-foreground">Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-soft">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium">
                        Your Name
                      </label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        required 
                        className="agro-input"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium">
                        Your Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        required 
                        className="agro-input"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="How can we help you?" 
                      required 
                      className="agro-input"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message here..." 
                      rows={6} 
                      required 
                      className="agro-input"
                    />
                  </div>
                  
                  <Button type="submit" className="agro-button w-full flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Location</h2>
            <p className="text-lg text-muted-foreground">
              Visit us at our office or reach out to us online
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-soft h-[400px]">
            {/* Google Maps iframe would go here - using a placeholder for now */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-muted-foreground">Google Maps integration would be here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
