import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ServiceCard, ChakraIcon, HandsIcon, WavesIcon } from '@/components/ServiceCard';
import { Particles } from '@/components/Particles';
import { useState } from 'react';

const Services = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Comment se déroule une séance ?",
      answer: "Accueil et écoute, travail énergétique adapté, temps d'intégration et recommandations. Chaque séance dure entre 60 et 75 minutes selon vos besoins."
    },
    {
      question: "Combien de séances ?",
      answer: "Selon l'objectif : 1 à 3 séances suffisent souvent pour relancer l'équilibre ; un suivi ponctuel peut maintenir l'harmonie. Nous évaluons ensemble le rythme qui vous convient."
    },
    {
      question: "Contre-indications ?",
      answer: "Ces pratiques sont complémentaires et ne remplacent pas un suivi médical. En cas de doute, demander un avis médical. Les séances sont adaptées à chaque situation."
    }
  ];

  return (
    <div className="min-h-screen">
      <Particles />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-5xl md:text-7xl mb-6 text-glow">Pratiques & bénéfices</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reiki, magnétisme et rééquilibrage énergétique
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <ScrollReveal>
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <ScrollReveal delay={0}>
                <ServiceCard
                  icon={<ChakraIcon />}
                  title="Rééquilibrage énergétique"
                  description="Harmonisation globale des centres d'énergie (chakras) et relance des flux. Travail en profondeur pour libérer les blocages et restaurer la circulation énergétique naturelle."
                />
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <ServiceCard
                  icon={<HandsIcon />}
                  title="Reiki"
                  description="Soin par imposition des mains : apaisement, clarté, regain d'énergie. Technique douce qui favorise l'auto-guérison et la détente profonde du corps et de l'esprit."
                />
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <ServiceCard
                  icon={<WavesIcon />}
                  title="Magnétisme"
                  description="Travail ciblé sur douleurs, blocages et fatigue pour redonner de l'élan. Approche personnalisée selon vos sensations et vos besoins spécifiques."
                />
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Benefits Section */}
      <ScrollReveal delay={200}>
        <section className="py-16 px-6 bg-card/20 backdrop-blur-sm">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-display text-3xl md:text-4xl mb-12 text-center text-glow">
              Bénéfices observés
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  category: "Physique",
                  benefits: ["Détente musculaire", "Amélioration du sommeil", "Regain d'énergie", "Soulagement des tensions"]
                },
                {
                  category: "Émotionnel",
                  benefits: ["Apaisement du stress", "Clarté mentale", "Confiance en soi", "Équilibre émotionnel"]
                },
                {
                  category: "Énergétique",
                  benefits: ["Circulation harmonieuse", "Déblocage des chakras", "Ancrage renforcé", "Vitalité retrouvée"]
                },
                {
                  category: "Spirituel",
                  benefits: ["Connexion intérieure", "Intuition développée", "Sérénité durable", "Alignement personnel"]
                }
              ].map((section, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="energy-card p-6 rounded-xl">
                    <h3 className="font-display text-xl mb-4 text-foreground">{section.category}</h3>
                    <ul className="space-y-2">
                      {section.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ Section */}
      <ScrollReveal delay={300}>
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-display text-3xl md:text-4xl mb-12 text-center text-glow">
              Questions fréquentes
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="energy-card rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full p-6 text-left flex justify-between items-center"
                    >
                      <h3 className="font-semibold text-foreground">{faq.question}</h3>
                      <svg 
                        className={`w-5 h-5 text-primary transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  );
};

export default Services;