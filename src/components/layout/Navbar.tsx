
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, User, ChevronDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );
  const location = useLocation();

  // Mock user data - in a real app this would come from authentication/context
  const [user, setUser] = useState<null | {
    name: string;
    profilePicture: string | null;
  }>(null);

  useEffect(() => {
    // For demo purposes, we'll check local storage for user data
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      try {
        const userData = JSON.parse(storedUserData);
        setUser(userData);
      } catch (e) {
        console.error('Error parsing user data from localStorage', e);
      }
    }
  }, []);

  const toggleMobileMenu = () => setIsOpen(!isOpen);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  useEffect(() => {
    // Set initial theme preference
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Community', path: '/community' },
    { name: 'GovConnect', path: '/govconnect' },
    { name: 'AgriMart', path: '/agrimart' },
    { name: 'Discover', path: '/discover' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLogout = () => {
    // For demo purposes, clear the user data from localStorage
    localStorage.removeItem('userData');
    setUser(null);
    // Redirect to login page
    window.location.href = '/login';
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-morphism' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl text-primary">AgroSphere</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className={`nav-link font-medium transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-foreground/80 hover:text-foreground'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleDarkMode} 
              className="rounded-full"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            
            {user ? (
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-8 w-8 border-2 border-primary">
                          {user.profilePicture ? (
                            <AvatarImage src={user.profilePicture} alt={user.name} />
                          ) : (
                            <AvatarFallback className="bg-primary/10 text-primary">
                              {user.name.charAt(0).toUpperCase()}
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <span className="font-medium">{user.name}</span>
                        <ChevronDown size={16} />
                      </div>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-[180px] p-2">
                      <div className="grid gap-1">
                        <Link to="/dashboard">
                          <Button variant="ghost" className="w-full justify-start">
                            Dashboard
                          </Button>
                        </Link>
                        <Button 
                          variant="ghost" 
                          className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
                          onClick={handleLogout}
                        >
                          Logout
                        </Button>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            ) : (
              <Link to="/login">
                <Button className="agro-button flex items-center space-x-2">
                  <User size={18} />
                  <span>Login</span>
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleDarkMode} 
              className="rounded-full"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              className="rounded-full"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block animate-fade-in' : 'hidden'} md:hidden glass-morphism border-t`}>
        <div className="container mx-auto px-4 py-4 space-y-4">
          {user && (
            <div className="flex items-center space-x-3 p-4 bg-primary/5 rounded-md mb-4">
              <Avatar className="h-10 w-10 border-2 border-primary">
                {user.profilePicture ? (
                  <AvatarImage src={user.profilePicture} alt={user.name} />
                ) : (
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {user.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                )}
              </Avatar>
              <div>
                <p className="font-medium">{user.name}</p>
                <Link to="/dashboard" className="text-sm text-primary">View Dashboard</Link>
              </div>
            </div>
          )}
          
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className={`block py-2 px-4 rounded-md transition-colors ${location.pathname === link.path ? 'bg-primary/10 text-primary' : 'hover:bg-accent'}`}
            >
              {link.name}
            </Link>
          ))}
          
          {user ? (
            <Button 
              variant="ghost" 
              className="w-full justify-start text-red-500 mt-4" 
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <Link to="/login" className="block mt-4">
              <Button className="agro-button w-full">
                <User size={18} className="mr-2" />
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
