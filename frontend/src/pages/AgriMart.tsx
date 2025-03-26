
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { 
  Search, 
  ShoppingCart, 
  Filter, 
  Heart, 
  Share2, 
  MapPin, 
  Star, 
  Plus,
  Phone,
  ChevronRight
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';

const categories = [
  { id: 1, name: 'Seeds', count: 152, image: 'https://placehold.co/80x80/eee/2e4722?text=Seeds' },
  { id: 2, name: 'Fertilizers', count: 89, image: 'https://placehold.co/80x80/eee/2e4722?text=Fertilizers' },
  { id: 3, name: 'Tools & Equipment', count: 124, image: 'https://placehold.co/80x80/eee/2e4722?text=Tools' },
  { id: 4, name: 'Pesticides', count: 67, image: 'https://placehold.co/80x80/eee/2e4722?text=Pesticides' },
  { id: 5, name: 'Irrigation', count: 53, image: 'https://placehold.co/80x80/eee/2e4722?text=Irrigation' },
  { id: 6, name: 'Organic Products', count: 72, image: 'https://placehold.co/80x80/eee/2e4722?text=Organic' },
];

const products = [
  { 
    id: 1, 
    name: 'Organic Fertilizer - 10kg', 
    price: 1250, 
    rating: 4.5, 
    image: 'https://placehold.co/300x200/eee/2e4722?text=Organic+Fertilizer',
    seller: { name: 'Green Earth Organics', location: 'Bangalore', rating: 4.8 },
    category: 'Fertilizers'
  },
  { 
    id: 2, 
    name: 'High-Yield Tomato Seeds - 100g', 
    price: 450, 
    rating: 4.2, 
    image: 'https://placehold.co/300x200/eee/2e4722?text=Tomato+Seeds',
    seller: { name: 'SeedTech Innovations', location: 'Chennai', rating: 4.6 },
    category: 'Seeds'
  },
  { 
    id: 3, 
    name: 'Drip Irrigation Kit - Small Farm', 
    price: 3499, 
    rating: 4.7, 
    image: 'https://placehold.co/300x200/eee/2e4722?text=Drip+Irrigation+Kit',
    seller: { name: 'Modern Farm Solutions', location: 'Mumbai', rating: 4.9 },
    category: 'Irrigation'
  },
  { 
    id: 4, 
    name: 'Stainless Steel Pruning Shears', 
    price: 599, 
    rating: 4.3, 
    image: 'https://placehold.co/300x200/eee/2e4722?text=Pruning+Shears',
    seller: { name: 'AgriTools Ltd', location: 'Hyderabad', rating: 4.5 },
    category: 'Tools & Equipment'
  },
];

const AgriMart = () => {
  const { toast } = useToast();
  const [mobileOtp, setMobileOtp] = useState({ number: '', otp: '', verified: false });
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const handleSendOtp = () => {
    if (mobileOtp.number.length !== 10) {
      toast({
        title: "Invalid Mobile Number",
        description: "Please enter a valid 10-digit mobile number.",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate OTP send
    setShowOtpInput(true);
    toast({
      title: "OTP Sent",
      description: `We've sent an OTP to +91 ${mobileOtp.number}`,
    });
  };

  const handleVerifyOtp = () => {
    if (mobileOtp.otp.length !== 4) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid 4-digit OTP.",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate OTP verification
    setMobileOtp(prev => ({ ...prev, verified: true }));
    toast({
      title: "Success!",
      description: "Your mobile number has been verified.",
    });
  };
  
  const handleAddToCart = (productId: number) => {
    setCartItems(prev => prev + 1);
    toast({
      title: "Added to Cart",
      description: "Item has been added to your cart.",
    });
  };
  
  const handleShare = (productId: number) => {
    toast({
      title: "Shared!",
      description: "Product link has been copied to clipboard.",
    });
  };
  
  const handleWishlist = (productId: number) => {
    toast({
      title: "Added to Wishlist",
      description: "Item has been added to your wishlist.",
    });
  };

  // If not verified, show mobile verification first
  if (!mobileOtp.verified) {
    return (
      <div className="min-h-screen py-20 page-transition">
        <div className="container mx-auto px-4 max-w-md">
          <div className="bg-white rounded-lg shadow-soft p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-primary mb-2">AgriMart</h1>
              <p className="text-muted-foreground">Verify your mobile number to continue</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <Label htmlFor="mobileNumber">Mobile Number</Label>
                <div className="flex mt-2">
                  <span className="inline-flex items-center px-3 border border-r-0 border-input rounded-l-md bg-muted text-muted-foreground">
                    +91
                  </span>
                  <Input
                    id="mobileNumber"
                    type="tel"
                    maxLength={10}
                    className="rounded-l-none"
                    placeholder="Enter your 10-digit number"
                    value={mobileOtp.number}
                    onChange={(e) => setMobileOtp(prev => ({ ...prev, number: e.target.value }))}
                    disabled={showOtpInput}
                  />
                </div>
              </div>
              
              {!showOtpInput ? (
                <Button className="agro-button w-full" onClick={handleSendOtp}>
                  Send OTP
                </Button>
              ) : (
                <>
                  <div>
                    <Label htmlFor="otp">Enter OTP</Label>
                    <Input
                      id="otp"
                      type="text"
                      maxLength={4}
                      className="mt-2"
                      placeholder="Enter 4-digit OTP"
                      value={mobileOtp.otp}
                      onChange={(e) => setMobileOtp(prev => ({ ...prev, otp: e.target.value }))}
                    />
                    <div className="mt-2 text-right">
                      <button 
                        className="text-sm text-primary hover:underline"
                        onClick={handleSendOtp}
                      >
                        Resend OTP
                      </button>
                    </div>
                  </div>
                  
                  <Button className="agro-button w-full" onClick={handleVerifyOtp}>
                    Verify & Continue
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 page-transition">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-primary">AgriMart</h1>
            <div className="relative">
              <Button variant="outline" className="relative">
                <ShoppingCart size={20} />
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </Button>
            </div>
          </div>
          <p className="text-muted-foreground mt-2">Your one-stop marketplace for agricultural products</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-soft p-4 mb-8">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input 
              placeholder="Search for products, categories or sellers..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Button 
              variant={activeCategory === 'All' ? "default" : "outline"} 
              className="whitespace-nowrap"
              onClick={() => setActiveCategory('All')}
            >
              All Categories
            </Button>
            {categories.slice(0, 4).map(category => (
              <Button 
                key={category.id} 
                variant={activeCategory === category.name ? "default" : "outline"}
                className="whitespace-nowrap"
                onClick={() => setActiveCategory(category.name)}
              >
                {category.name}
              </Button>
            ))}
            <Button variant="outline" className="whitespace-nowrap">
              More <ChevronRight size={14} />
            </Button>
          </div>
        </div>
        
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Categories</h2>
            <Button variant="link" className="text-primary">
              View All <ChevronRight size={16} />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {categories.map(category => (
              <div 
                key={category.id} 
                className="bg-white rounded-lg shadow-soft hover:shadow-hover transition-all p-4 text-center cursor-pointer"
                onClick={() => setActiveCategory(category.name)}
              >
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-16 h-16 object-cover mx-auto mb-3 rounded-lg"
                />
                <h3 className="font-medium">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} items</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Featured Products</h2>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="cursor-pointer">
                <Filter size={14} className="mr-1" /> Filter
              </Badge>
              <Button variant="link" className="text-primary">
                View All <ChevronRight size={16} />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-soft hover:shadow-hover transition-all overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 flex flex-col gap-2">
                    <button 
                      className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                      onClick={() => handleWishlist(product.id)}
                    >
                      <Heart size={18} className="text-gray-600" />
                    </button>
                    <button 
                      className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                      onClick={() => handleShare(product.id)}
                    >
                      <Share2 size={18} className="text-gray-600" />
                    </button>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{product.rating}</span>
                  </div>
                  
                  <h3 className="font-medium mb-1">{product.name}</h3>
                  <p className="text-lg font-semibold mb-3">₹{product.price.toLocaleString()}</p>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Avatar className="w-6 h-6 border bg-primary/10">
                      <span className="text-xs">{product.seller.name.charAt(0)}</span>
                    </Avatar>
                    <span className="text-sm">{product.seller.name}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <MapPin size={14} className="mr-1" />
                    {product.seller.location}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      className="agro-button flex-1"
                      onClick={() => handleAddToCart(product.id)}
                    >
                      Add to Cart
                    </Button>
                    <Button variant="outline" className="aspect-square p-0 flex items-center justify-center">
                      <Phone size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="fixed bottom-4 right-4">
          <Button className="agro-button rounded-full w-14 h-14 p-0 shadow-lg">
            <Plus size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AgriMart;
