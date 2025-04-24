
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HelpCircle, Search, Mail } from 'lucide-react';

const FAQ = () => {
  // FAQ data
  const faqs = [
    {
      question: "What is AgriMart?",
      answer: "AgriMart is an online platform that connects farmers and consumers, allowing them to buy and sell agricultural products easily."
    },
    {
      question: "Who can sell products on AgriMart?",
      answer: "Any farmer or agricultural vendor can register on AgriMart to sell their products."
    },
    {
      question: "Is there a fee for using AgriMart?",
      answer: "AgriMart is free to use for buyers. Sellers pay a small commission on each sale."
    },
    {
      question: "How do I purchase a product?",
      answer: "Simply browse the products, add items to your cart, and complete the checkout process."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major credit cards, debit cards, and UPI payments."
    },
    {
      question: "How does AgriMart ensure product quality?",
      answer: "Sellers are verified, and buyers can leave reviews to help maintain quality standards."
    },
    {
      question: "Can I track my orders?",
      answer: "Yes, once your order is placed, you will receive a tracking link via email or SMS."
    },
    {
      question: "What is the return policy?",
      answer: "Returns are accepted within 7 days of delivery for damaged or incorrect products."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach us via the Contact Us page or call our 24/7 helpline."
    },
    {
      question: "Is AgriMart available on mobile?",
      answer: "Yes, AgriMart is mobile-friendly and can be accessed through any browser on your smartphone."
    }
  ];

  // Additional FAQs
  const additionalFaqs = [
    {
      question: "How does the AI crop analysis work?",
      answer: "Our AI crop analysis uses computer vision technology to analyze images of plants. Simply upload a photo, and our system will identify diseases, pests, or nutrient deficiencies, and provide treatment recommendations."
    },
    {
      question: "How accurate is the disease detection?",
      answer: "Our disease detection has an accuracy rate of over 90% for most common crop diseases. The system is continuously learning and improving through machine learning algorithms and expert validation."
    },
    {
      question: "What types of soil reports can be analyzed?",
      answer: "We can analyze standard soil test reports from most agricultural labs. The system extracts information about soil pH, nutrient levels, organic matter content, and provides recommendations for soil improvement."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we take data security very seriously. All user data is encrypted, and we don't share your personal information with third parties without your consent."
    },
    {
      question: "How do I access government schemes through GovConnect?",
      answer: "GovConnect provides information about various agricultural schemes. You can filter schemes by location and farming type, view eligibility criteria, and find application procedures."
    },
    {
      question: "Can I use AgroSphere for organic farming?",
      answer: "Absolutely! AgroSphere supports organic farming practices and provides specialized recommendations for organic pest control, natural fertilizers, and sustainable farming techniques."
    }
  ];

  return (
    <div className="w-full page-transition">
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about AgroSphere services and features
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 md:py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="search"
                className="agro-input pl-10 w-full py-3"
                placeholder="Search FAQ questions..."
                aria-label="Search FAQ questions"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AgriMart FAQs */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">AgriMart FAQs</h2>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-lg shadow-soft border-none overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-lg hover:no-underline hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Platform FAQs */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Platform & Features FAQs</h2>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {additionalFaqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-add-${index}`}
                  className="bg-white rounded-lg shadow-soft border-none overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-lg hover:no-underline hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Not Found Your Answer Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <HelpCircle className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-6">Didn't Find Your Answer?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              If you couldn't find what you were looking for, please contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="agro-button text-base px-6 py-5 w-full sm:w-auto flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
