
import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  className?: string;
  iconClassName?: string;
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  link,
  className,
  iconClassName
}: FeatureCardProps) => {
  return (
    <Link 
      to={link} 
      className={cn(
        "agro-card flex flex-col items-center text-center p-8 hover-lift",
        className
      )}
    >
      <div className={cn(
        "w-16 h-16 flex items-center justify-center rounded-full mb-6 bg-primary/10 text-primary",
        iconClassName
      )}>
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Link>
  );
};

export default FeatureCard;
