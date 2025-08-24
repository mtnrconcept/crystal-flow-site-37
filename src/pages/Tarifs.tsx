import { Navigation } from '@/components/Navigation';
import { PricingCard } from '@/components/PricingCard';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Footer } from '@/components/Footer';
import { Particles } from '@/components/Particles';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Tarifs = () => {
  return (
    <div className="min-h-screen">
      <Particles />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/80" />
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-6xl mb-6 text-glow">
            Tarifs clairs
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Transparence et simplicité pour votre sérénité
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <ScrollReveal>
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              <ScrollReveal delay={0}>
                <PricingCard
                  title="Séance découverte"
                  price={90}
                  unit="CHF / 60 min"
                  features={["Anamnèse + soin", "Conseils personnalisés", "Première approche"]}
                  ctaLabel="Réserver"
                  ctaHref="/contact"
                />
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <PricingCard
                  title="Séance standard"
                  price={120}
                  unit="CHF / 75 min"
                  features={["Rééquilibrage complet", "Suivi 48h", "Accompagnement personnalisé"]}
                  ctaLabel="Réserver"
                  ctaHref="/contact"
                  highlighted={true}
                />
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <PricingCard
                  title="Forfait 3 séances"
                  price={320}
                  unit="CHF"
                  features={["Accompagnement progressif", "Suivi entre les séances", "Tarif avantageux"]}
                  ctaLabel="Commencer"
                  ctaHref="/contact"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Additional Info Section */}
      <ScrollReveal delay={200}>
        <section className="py-20 px-6 bg-card/20 backdrop-blur-sm">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl mb-6 text-glow">Informations pratiques</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card/30 border border-border/50 rounded-lg p-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Modalités de paiement</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Cash accepté
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Paiement Twint
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Possibilité de reçu
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Tarifs solidaires sur demande
                  </li>
                </ul>
              </div>
              
              <div className="bg-card/30 border border-border/50 rounded-lg p-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 text-foreground">À savoir</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Réservation à l'avance conseillée
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Annulation 24h avant sans frais
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Cadre confidentiel garanti
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Pratiques complémentaires au suivi médical
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <p className="text-foreground/90 leading-relaxed">
                  <strong>Important :</strong> Ces pratiques énergétiques sont complémentaires et ne remplacent pas un suivi médical. 
                  En cas de doute sur votre état de santé, consultez un professionnel de santé.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal delay={300}>
        <section className="py-20 px-6">
          <div className="container mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl mb-6 text-glow">
              Prêt·e à commencer ?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Choisissez la formule qui vous convient et prenez votre premier rendez-vous
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-hero">
                <Link to="/contact">Prendre rendez-vous</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-ghost-hero">
                <Link to="/services">Découvrir les services</Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  );
};

export default Tarifs;