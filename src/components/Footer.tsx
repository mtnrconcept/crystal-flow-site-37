import { Link } from 'react-router-dom';
import { BrandMark } from './BrandMark';

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <BrandMark className="w-6 h-6 text-primary" />
              <div className="font-display text-lg text-glow">7 Senses</div>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Guérisseur · Reiki · Magnétiseur</p>
              <p>Genève, Suisse</p>
            </div>
          </div>

          {/* Pages Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Pages</h3>
            <div className="space-y-2 text-sm">
              <Link to="/bio" className="block text-muted-foreground hover:text-primary transition-colors">
                Bio
              </Link>
              <Link to="/services" className="block text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/tarifs" className="block text-muted-foreground hover:text-primary transition-colors">
                Tarifs
              </Link>
              <Link to="/histoire" className="block text-muted-foreground hover:text-primary transition-colors">
                Histoire
              </Link>
            </div>
          </div>

          {/* Legal Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Légal</h3>
            <div className="space-y-2 text-sm">
              <Link to="/mentions-legales" className="block text-muted-foreground hover:text-primary transition-colors">
                Mentions légales
              </Link>
              <Link to="/confidentialite" className="block text-muted-foreground hover:text-primary transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          © 7 Senses — Énergies, équilibre et bienveillance.
        </div>
      </div>
    </footer>
  );
};