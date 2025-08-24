import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { ServiceCard, ChakraIcon, HandsIcon, WavesIcon } from '@/components/ServiceCard';
import { PricingCard } from '@/components/PricingCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Footer } from '@/components/Footer';
import { Particles } from '@/components/Particles';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Particles />
      <Navigation />
      <Hero />
      
      {/* About Brief Section */}
      <ScrollReveal>
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-display text-4xl md:text-5xl text-glow">
                  Une approche douce et précise
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Les séances visent à relancer la circulation énergétique, libérer les tensions 
                  et restaurer l'harmonie. Chaque personne reçoit un soin adapté à son rythme.
                </p>
                <p className="text-foreground/90">
                  Mon approche combine bienveillance, écoute attentive et techniques précises 
                  pour vous accompagner vers un mieux-être durable.
                </p>
              </div>
              <div className="relative">
                <div className="w-64 h-64 mx-auto bg-gradient-primary rounded-full opacity-20 animate-pulse-glow" />
                <svg className="absolute inset-0 w-full h-full text-primary/30" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse" />
                  <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
                  <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Services Section */}
      <ScrollReveal delay={200}>
        <section className="py-20 px-6 bg-card/20 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl mb-6 text-glow">Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Des pratiques complémentaires pour répondre à vos besoins
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal delay={0}>
                <ServiceCard
                  icon={<ChakraIcon />}
                  title="Rééquilibrage énergétique"
                  description="Harmonisation globale des centres d'énergie (chakras) et relance des flux."
                />
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <ServiceCard
                  icon={<HandsIcon />}
                  title="Reiki"
                  description="Soin par imposition des mains : apaisement, clarté, regain d'énergie."
                />
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <ServiceCard
                  icon={<WavesIcon />}
                  title="Magnétisme"
                  description="Travail ciblé sur douleurs, blocages et fatigue pour redonner de l'élan."
                />
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Pricing Section */}
      <ScrollReveal delay={300}>
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl mb-6 text-glow">Tarifs clairs et simples</h2>
              <p className="text-xl text-muted-foreground">
                Transparence et simplicité pour votre sérénité
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <ScrollReveal delay={0}>
                <PricingCard
                  title="Séance découverte"
                  price={90}
                  unit="CHF / 60 min"
                  features={["Anamnèse + soin", "Conseils personnalisés"]}
                  ctaLabel="Réserver"
                  ctaHref="/contact"
                />
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <PricingCard
                  title="Séance standard"
                  price={120}
                  unit="CHF / 75 min"
                  features={["Rééquilibrage complet", "Suivi 48h"]}
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
                  features={["Accompagnement progressif", "Suivi entre les séances"]}
                  ctaLabel="Commencer"
                  ctaHref="/contact"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials Section */}
      <ScrollReveal delay={400}>
        <section className="py-20 px-6 bg-card/20 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl mb-6 text-glow">Ils témoignent</h2>
              <p className="text-xl text-muted-foreground">
                L'expérience de ceux qui ont franchi le pas
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal delay={0}>
                <TestimonialCard
                  quote="Soin très apaisant, j'ai ressenti un vrai relâchement."
                  name="Camille"
                  location="Genève"
                />
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <TestimonialCard
                  quote="Après trois séances, sommeil et énergie nettement meilleurs."
                  name="Hugo"
                  location="Carouge"
                />
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <TestimonialCard
                  quote="Approche bienveillante, résultats concrets sur le stress."
                  name="Maya"
                  location="Plainpalais"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Final CTA Section */}
      <ScrollReveal delay={500}>
        <section className="py-20 px-6">
          <div className="container mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl mb-6 text-glow">
              Prêt·e à (re)trouver l'équilibre ?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Prenez le temps d'un soin pour vous reconnecter à votre énergie vitale
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-hero">
                <Link to="/contact">Prendre rendez-vous</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-ghost-hero">
                <Link to="/services">En savoir plus</Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  );
};

export default Index;
