import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrandMark } from './BrandMark';
import { Button } from './ui/button';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { label: 'Accueil', href: '/' },
    { label: 'Bio', href: '/bio' },
    { label: 'Services', href: '/services' },
    { label: 'Tarifs', href: '/tarifs' },
    { label: 'Histoire', href: '/histoire' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <BrandMark className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
            <div>
              <div className="font-display text-xl text-glow">7 Senses</div>
              <div className="text-xs text-muted-foreground">Guérisseur · Reiki · Magnétiseur</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="btn-hero">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col space-y-1 p-2"
          >
            <span className={`block w-6 h-0.5 bg-foreground transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-6 h-0.5 bg-foreground transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-foreground transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50">
            <div className="flex flex-col space-y-3 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href) ? 'text-primary' : 'text-foreground/80'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="btn-hero w-fit">
                <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};