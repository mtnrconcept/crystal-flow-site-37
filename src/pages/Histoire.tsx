import { Navigation } from '@/components/Navigation';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Footer } from '@/components/Footer';
import { Particles } from '@/components/Particles';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Histoire = () => {
  return (
    <div className="min-h-screen">
      <Particles />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/80" />
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-6xl mb-6 text-glow">
            Histoire des pratiques
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Origines, courants et éthique
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <ScrollReveal>
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-12">
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                <div className="mb-8">
                  <span className="text-sm text-primary font-semibold">Ancien monde</span>
                  <h3 className="text-2xl font-display mb-4 text-glow">Traditions d'imposition des mains</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Techniques présentes dans de nombreuses cultures pour apaiser et soutenir. 
                    Ces pratiques ancestrales témoignent d'une compréhension intuitive des 
                    bienfaits du toucher thérapeutique et de l'attention focalisée.
                  </p>
                </div>
              </div>
              
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                <div className="mb-8">
                  <span className="text-sm text-primary font-semibold">Début XXe siècle</span>
                  <h3 className="text-2xl font-display mb-4 text-glow">Système Reiki</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Codifié au Japon par Mikao Usui ; transmission par degrés, pratique structurée. 
                    Le Reiki moderne s'est développé comme une méthode d'harmonisation énergétique 
                    accessible et respectueuse.
                  </p>
                </div>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                <div className="mb-8">
                  <span className="text-sm text-primary font-semibold">Aujourd'hui</span>
                  <h3 className="text-2xl font-display mb-4 text-glow">Approches complémentaires</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Magnétisme et travail énergétique intégrés à un accompagnement global. 
                    Ces pratiques s'inscrivent dans une démarche de bien-être holistique, 
                    en complément du suivi médical traditionnel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ Section */}
      <ScrollReveal delay={200}>
        <section className="py-20 px-6 bg-card/20 backdrop-blur-sm">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl mb-6 text-glow">Questions fréquentes</h2>
              <p className="text-xl text-muted-foreground">
                Comprendre les fondements et les bienfaits
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-card/30 border border-border/50 rounded-lg p-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Qu'est-ce que l'énergie au sens des soins ?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Terme parapluie pour décrire sensations, chaleur, mouvements fins, relaxation 
                  et modulation du tonus neurovégétatif. Il s'agit d'une approche globale qui 
                  favorise l'équilibre naturel du corps et de l'esprit.
                </p>
              </div>
              
              <div className="bg-card/30 border border-border/50 rounded-lg p-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Pourquoi cela peut aider ?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Le cadre sécurisant, l'attention focalisée et le relâchement favorisent 
                  l'auto-régulation et l'apaisement. Ces conditions optimales permettent au 
                  corps de mobiliser ses propres ressources de guérison et d'harmonisation.
                </p>
              </div>
              
              <div className="bg-card/30 border border-border/50 rounded-lg p-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Quelle est l'approche éthique ?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Respect absolu du rythme de chaque personne, écoute bienveillante et 
                  techniques précises. Les séances sont adaptées aux besoins individuels, 
                  dans un cadre professionnel et confidentiel.
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
              Une tradition au service du bien-être
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Découvrez comment ces pratiques ancestrales peuvent vous accompagner aujourd'hui
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-hero">
                <Link to="/contact">Prendre rendez-vous</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-ghost-hero">
                <Link to="/services">Voir les services</Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  );
};

export default Histoire;