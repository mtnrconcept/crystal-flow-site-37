import { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { BrandMark } from './BrandMark';
import heroImage from '@/assets/hero-reiki-male.jpg';

export const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        parallaxRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      </div>

      {/* Energy Overlay */}
      <div className="absolute inset-0 z-10">
        <svg className="absolute top-0 left-0 w-1/3 h-1/3 text-primary/20" viewBox="0 0 200 200">
          <path 
            d="M50 10c20 15 30 35 25 55-5 15-25 20-35 15-8-4-10-15-5-22 8-10 20-8 25-2" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse-glow"
          />
          <circle cx="100" cy="100" r="3" fill="currentColor" className="animate-pulse">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
        
        <svg className="absolute bottom-0 right-0 w-1/3 h-1/3 text-primary/20" viewBox="0 0 200 200">
          <path 
            d="M150 190c-20-15-30-35-25-55 5-15 25-20 35-15 8 4 10 15 5 22-8 10-20 8-25 2" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse-glow"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        {/* Logo en grande taille */}
        <div className="mb-8 fade-in-up">
          <BrandMark className="w-40 h-40 md:w-48 md:h-48" />
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl mb-6 text-glow fade-in-up" style={{ animationDelay: '0.2s' }}>
          7 Senses
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-foreground/90 fade-in-up" style={{ animationDelay: '0.4s' }}>
          Guérisseur · Reiki · Magnétiseur
        </p>
        <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.6s' }}>
          Rééquilibrage énergétique, apaisement et clarté intérieure. 
          Une approche douce et structurée pour retrouver l'harmonie.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button asChild size="lg" className="btn-hero">
            <Link to="/contact">Prendre rendez-vous</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="btn-ghost-hero">
            <Link to="/services">Découvrir les services</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};