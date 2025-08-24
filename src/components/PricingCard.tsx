import { Button } from './ui/button';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  title: string;
  price: number;
  unit: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  className?: string;
}

export const PricingCard = ({ 
  title, 
  price, 
  unit, 
  features, 
  ctaLabel, 
  ctaHref, 
  highlighted = false,
  className 
}: PricingCardProps) => {
  return (
    <div className={`
      energy-card p-8 rounded-xl h-full relative
      ${highlighted ? 'ring-2 ring-primary ring-opacity-50' : ''}
      ${className}
    `}>
      {highlighted && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
            Populaire
          </span>
        </div>
      )}
      
      <div className="text-center space-y-6">
        <div>
          <h3 className="font-display text-2xl text-foreground mb-2">{title}</h3>
          <div className="flex items-baseline justify-center space-x-1">
            <span className="text-4xl font-bold text-primary">{price}</span>
            <span className="text-muted-foreground">{unit}</span>
          </div>
        </div>
        
        <ul className="space-y-3 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button asChild className="w-full btn-hero">
          <Link to={ctaHref}>{ctaLabel}</Link>
        </Button>
      </div>
    </div>
  );
};