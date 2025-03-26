
import React, { useState, useEffect } from 'react';

interface GreetingProps {
  name?: string;
  className?: string;
}

const Greeting: React.FC<GreetingProps> = ({ name, className }) => {
  const [greeting, setGreeting] = useState('');
  
  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours();
      
      if (hour >= 5 && hour < 12) {
        return 'Good morning';
      } else if (hour >= 12 && hour < 18) {
        return 'Good afternoon';
      } else {
        return 'Good evening';
      }
    };
    
    setGreeting(getGreeting());
    
    // Update greeting every minute
    const intervalId = setInterval(() => {
      setGreeting(getGreeting());
    }, 60000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <span className={className}>
      {greeting}{name ? `, ${name}` : ''}!
    </span>
  );
};

export default Greeting;
