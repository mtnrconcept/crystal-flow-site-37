import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const ServiceCard = ({ icon, title, description, className }: ServiceCardProps) => {
  return (
    <div className={`energy-card p-6 rounded-xl h-full ${className}`}>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground energy-glow">
          {icon}
        </div>
        <h3 className="font-display text-xl text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// Service Icons
export const ChakraIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-8 h-8">
    <circle cx="12" cy="12" r="6"/>
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3"/>
  </svg>
);

export const HandsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-8 h-8">
    <path d="M7 14c2-2 3-4 3-6M17 14c-2-2-3-4-3-6"/>
    <path d="M5 12c-1 3 1 6 4 6h6c3 0 5-3 4-6"/>
  </svg>
);

export const WavesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-8 h-8">
    <path d="M3 8c3 2 6 2 9 0s6-2 9 0"/>
    <path d="M3 16c3 2 6 2 9 0s6-2 9 0"/>
  </svg>
);