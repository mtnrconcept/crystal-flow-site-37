import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Particles } from '@/components/Particles';

const Bio = () => {
  return (
    <div className="min-h-screen">
      <Particles />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-5xl md:text-7xl mb-6 text-glow">À propos</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Parcours, éthique et cadre de soin
          </p>
        </div>
      </section>

      {/* Main Content */}
      <ScrollReveal>
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-8 text-lg leading-relaxed">
              <p className="text-foreground/90 font-medium">
                Je pratique le Reiki, le magnétisme et l'harmonisation depuis plusieurs années. Mon approche repose sur trois piliers essentiels : l'écoute, la précision et la sécurité. Chaque séance est adaptée aux besoins uniques de la personne qui me consulte, avec toujours un temps de partage et des conseils d'intégration pour prolonger les bienfaits au-delà du soin.
              </p>
              
              <p className="text-muted-foreground">
                Mon cheminement m'a conduit à explorer différentes traditions énergétiques et à développer une méthode personnelle qui respecte la singularité de chacun tout en honorant les principes ancestraux transmis par ces pratiques.
              </p>
              
              <p className="text-foreground/80">
                Un tournant important de mon parcours a été un voyage spirituel dans le désert marocain. Aux côtés de guérisseurs expérimentés, j'ai vécu une immersion profonde dans un environnement où le silence, l'immensité et la puissance des éléments obligent à se confronter à soi-même. Dans ce cadre dépouillé de tout superflu, j'ai reçu des enseignements précieux sur la circulation des énergies, la force de l'intention et l'art d'accompagner sans imposer. C'est aussi là que j'ai appris à mieux connaître mon moi intérieur, à écouter mes intuitions et à comprendre que la guérison ne vient pas seulement d'un geste, mais d'une qualité de présence.
              </p>
              
              <p className="text-foreground/90 font-medium">
                Aujourd'hui, je transmets cette richesse dans chaque soin, en combinant rigueur et ouverture, tradition et expérience vécue. Mon intention est de créer un espace sûr, bienveillant et vibrant, où chacun peut renouer avec ses propres ressources d'équilibre et d'harmonie.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Principles Section */}
      <ScrollReveal delay={200}>
        <section className="py-16 px-6 bg-card/20 backdrop-blur-sm">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-display text-3xl md:text-4xl mb-12 text-center text-glow">
              Principes de travail
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Bienveillance",
                  description: "Chaque séance se déroule dans un cadre sécurisant et respectueux"
                },
                {
                  title: "Respect du rythme",
                  description: "J'adapte mes techniques à votre sensibilité et à vos besoins"
                },
                {
                  title: "Précision des gestes",
                  description: "Formation continue pour maintenir la qualité et l'efficacité"
                },
                {
                  title: "Confidentialité",
                  description: "Votre intimité et vos échanges sont protégés en toute circonstance"
                }
              ].map((principle, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="energy-card p-6 rounded-xl">
                    <h3 className="font-display text-xl mb-3 text-foreground">{principle.title}</h3>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Environment Section */}
      <ScrollReveal delay={300}>
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-display text-3xl md:text-4xl text-glow">
                  Un cadre propice à la détente
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Le cabinet est pensé pour favoriser votre bien-être : éclairage tamisé, 
                  matériaux naturels, température adaptée. Chaque détail contribue à créer 
                  une atmosphère de sérénité.
                </p>
                <p className="text-foreground/90">
                  L'espace est régulièrement purifié énergétiquement et maintenu dans 
                  un état de propreté irréprochable pour votre confort et votre sécurité.
                </p>
              </div>
              
              <div className="relative">
                <div className="w-80 h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-20 animate-pulse-glow" />
                  <svg className="absolute inset-0 w-full h-full text-primary/20" viewBox="0 0 300 300">
                    <path d="M150 50c40 20 60 60 50 100-10 30-50 40-70 30-15-8-20-30-10-44 15-20 40-15 50-4" stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse" />
                    <circle cx="150" cy="150" r="5" fill="currentColor" opacity="0.6">
                      <animate attributeName="r" values="3;8;3" dur="3s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  );
};

export default Bio;