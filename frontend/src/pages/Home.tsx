
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Microscope, ShoppingBag, FileText } from 'lucide-react';
import FeatureCard from '@/components/home/FeatureCard';
import Greeting from '@/components/ui/greeting';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in">
              Welcome to AgroSphere
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Greeting />
            </p>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '400ms' }}>
              Your digital companion for smart, sustainable farming. Join our community of farmers and unlock the power of modern agricultural solutions.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '600ms' }}>
              <Link to="/dashboard">
                <Button className="agro-button text-base px-6 py-6 w-full sm:w-auto">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="text-base px-6 py-6 w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/10 animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-16 h-16 rounded-full bg-secondary/20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-10 h-10 rounded-full bg-primary/20 animate-float" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforming Agriculture with Technology</h2>
            <p className="text-lg text-muted-foreground">
              Powerful tools designed to help farmers make data-driven decisions, improve yield, and embrace sustainable farming practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Microscope}
              title="AI Crop & Disease Analysis"
              description="Advanced AI algorithms to identify plant diseases, soil quality, and recommend optimal solutions."
              link="/dashboard"
              iconClassName="bg-blue-50 text-blue-600"
            />
            <FeatureCard 
              icon={ShoppingBag}
              title="AgriMart – Agricultural Marketplace"
              description="Buy and sell agricultural products directly. Connect with trusted vendors and farmers."
              link="/agrimart"
              iconClassName="bg-green-50 text-green-600"
            />
            <FeatureCard 
              icon={FileText}
              title="GovConnect – Govt Schemes & Support"
              description="Stay updated with the latest government schemes, subsidies and support for farmers."
              link="/govconnect"
              iconClassName="bg-amber-50 text-amber-600"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/90 to-primary text-white rounded-2xl p-10 md:p-16 text-center max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Farming Experience?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join thousands of farmers who are already using AgroSphere to increase yield, reduce costs, and farm sustainably.
            </p>
            <Link to="/login">
              <Button className="bg-white text-primary hover:bg-white/90 text-base px-8 py-6">
                Create Your Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
