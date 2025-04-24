
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Users, 
  ArrowRight, 
  MessageSquare, 
  Share2,
  Award,
  BookOpen,
  Calendar,
  Globe,
  Image
} from 'lucide-react';

const Community = () => {
  const handleJoinCommunity = () => {
    window.open('https://chat.whatsapp.com/H7b5CgtK0sfHriEN1Km1cW', '_blank');
  };

  return (
    <div className="w-full page-transition">
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Farming Community</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with farmers, share experiences, and learn from agricultural experts from around the world.
            </p>
            <Button 
              onClick={handleJoinCommunity} 
              className="agro-button text-lg px-8 py-6 flex items-center mx-auto"
            >
              <Users className="mr-2 h-5 w-5" />
              Join WhatsApp Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Community Benefits */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Community Benefits</h2>
            <p className="text-lg text-muted-foreground">
              Discover what makes our farming community special and how it can help you grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="h-10 w-10 text-primary" />,
                title: "Knowledge Sharing",
                description: "Exchange farming techniques, crop information, and best practices with experienced farmers."
              },
              {
                icon: <Share2 className="h-10 w-10 text-primary" />,
                title: "Resource Sharing",
                description: "Access shared resources, tools, and equipment through community networks."
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Expert Advice",
                description: "Get guidance from agricultural experts and experienced farmers on various topics."
              },
              {
                icon: <Calendar className="h-10 w-10 text-primary" />,
                title: "Community Events",
                description: "Participate in workshops, webinars, and field visits organized exclusively for members."
              },
              {
                icon: <BookOpen className="h-10 w-10 text-primary" />,
                title: "Latest Research",
                description: "Stay updated with the latest agricultural research, techniques, and innovations."
              },
              {
                icon: <Globe className="h-10 w-10 text-primary" />,
                title: "Global Perspective",
                description: "Connect with farmers from different regions and learn about global farming practices."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-soft hover-lift">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{benefit.title}</h3>
                <p className="text-muted-foreground text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Testimonials */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Community Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Hear what our community members have to say about their experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                location: "Punjab, India",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
                testimonial: "Being part of the AgroSphere community has transformed my farming practices. I learned about efficient irrigation techniques that saved me 30% water usage."
              },
              {
                name: "Priya Sharma",
                location: "Maharashtra, India",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
                testimonial: "The community helped me identify a rare plant disease and suggested organic treatments. My crop yield increased by 25% after implementing their advice."
              },
              {
                name: "Amit Patel",
                location: "Gujarat, India",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
                testimonial: "I connected with farmers growing similar crops and we now share resources and equipment. This collaboration has reduced my operational costs significantly."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-soft">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                    <p className="text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Community Guidelines</h2>
            
            <div className="bg-white rounded-lg p-8 shadow-soft">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    1
                  </div>
                  <p>Be respectful and courteous to all community members.</p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    2
                  </div>
                  <p>Share knowledge openly and help others with their farming queries.</p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    3
                  </div>
                  <p>Avoid sharing misinformation or unverified farming practices.</p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    4
                  </div>
                  <p>Do not spam or share promotional content without permission.</p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    5
                  </div>
                  <p>Respect intellectual property and give credit when sharing others' content.</p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    6
                  </div>
                  <p>Participate actively and contribute positively to community discussions.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA Section */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Join Our Community?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with thousands of farmers, share experiences, and grow together.
            </p>
            <Button 
              onClick={handleJoinCommunity} 
              className="agro-button text-lg px-8 py-6 mx-auto"
            >
              <Users className="mr-2 h-5 w-5" />
              Join Now on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
