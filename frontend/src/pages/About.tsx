
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  PlaneTakeoff, 
  Leaf, 
  Zap, 
  BarChart, 
  Brain, 
  CloudRain, 
  Users, 
  Store 
} from 'lucide-react';

const About = () => {
  return (
    <div className="w-full page-transition">
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About AgroSphere</h1>
            <p className="text-lg text-muted-foreground">
              Revolutionizing agriculture through technology, data, and community.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                AgroSphere is an AI-powered platform designed to transform traditional farming practices. By leveraging machine learning, satellite imagery, and climate analytics, we provide farmers with personalized recommendations on crop selection, farming techniques, and sustainable practices.
              </p>
              <p className="text-lg text-muted-foreground">
                Our mission is to empower farmers to make data-driven decisions, improving yield, efficiency, and climate resilience. We believe that by combining cutting-edge technology with agricultural expertise, we can create a more sustainable and productive future for farming.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 rounded-full bg-primary/10 absolute inset-0 animate-pulse-slow"></div>
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-soft">
                  <img 
                    src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="Farming with technology"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Why Choose AgroSphere?</h2>
            <p className="text-lg text-muted-foreground">
              We combine advanced technology with agricultural expertise to provide solutions that are effective, accessible, and tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12 text-primary" />,
                title: "AI-Powered Analysis",
                description: "Advanced algorithms analyze plant health, soil conditions, and predict optimal farming practices."
              },
              {
                icon: <Leaf className="w-12 h-12 text-primary" />,
                title: "Sustainable Focus",
                description: "All our recommendations prioritize environmental sustainability and long-term soil health."
              },
              {
                icon: <CloudRain className="w-12 h-12 text-primary" />,
                title: "Climate Smart",
                description: "Weather predictions and climate analytics help you adapt to changing conditions."
              },
              {
                icon: <Users className="w-12 h-12 text-primary" />,
                title: "Community Driven",
                description: "Connect with other farmers to share knowledge, insights, and best practices."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-soft">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive tools designed to address every aspect of modern farming
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Brain className="w-10 h-10 text-blue-600" />,
                title: "AI-Powered Disease Detection",
                description: "Upload plant images to instantly identify diseases and get treatment recommendations."
              },
              {
                icon: <BarChart className="w-10 h-10 text-green-600" />,
                title: "Smart Yield Prediction",
                description: "Analyze soil and weather data to predict optimal yield and growing conditions."
              },
              {
                icon: <PlaneTakeoff className="w-10 h-10 text-amber-600" />,
                title: "GovConnect for Agricultural Schemes",
                description: "Access the latest government schemes, subsidies and support programs."
              },
              {
                icon: <Store className="w-10 h-10 text-purple-600" />,
                title: "AgriMart – Buy & Sell Farm Products",
                description: "Connect directly with buyers and sellers for agricultural products."
              },
              {
                icon: <Users className="w-10 h-10 text-indigo-600" />,
                title: "Community Forum for Collaboration",
                description: "Share experiences, ask questions, and learn from other farmers."
              },
              {
                icon: <Zap className="w-10 h-10 text-red-600" />,
                title: "Real-time Weather Analytics",
                description: "Get precise weather forecasts tailored to your farming location."
              }
            ].map((feature, index) => (
              <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-soft">
                <div className="mr-4 bg-primary/10 p-3 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Revolutionize Your Farming?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who are already using AgroSphere to increase yield, reduce costs, and farm sustainably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button className="agro-button text-base px-8 py-6 w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="text-base px-8 py-6 w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
