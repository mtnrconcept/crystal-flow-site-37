import { useState, useEffect, useCallback } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Particles } from '@/components/Particles';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface EnergyOrb {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  active: boolean;
  targetTime: number;
}

export default function Jeu() {
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'breathing' | 'results'>('menu');
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [orbs, setOrbs] = useState<EnergyOrb[]>([]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [breathingPhase, setBreathingPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [breathingCount, setBreathingCount] = useState(0);
  const [mentalEnergy, setMentalEnergy] = useState(100);

  // Jeu de concentration avec orbes
  const startConcentrationGame = () => {
    setGameState('playing');
    setScore(0);
    setLevel(1);
    setTimeLeft(60);
    setMentalEnergy(100);
    generateOrbs();
  };

  const generateOrbs = useCallback(() => {
    const newOrbs: EnergyOrb[] = [];
    const orbCount = Math.min(3 + level, 8);
    
    for (let i = 0; i < orbCount; i++) {
      newOrbs.push({
        id: Date.now() + i,
        x: Math.random() * 80 + 10, // 10-90% de l'écran
        y: Math.random() * 60 + 20, // 20-80% de l'écran
        size: Math.random() * 30 + 20,
        opacity: 0.3 + Math.random() * 0.7,
        active: Math.random() > 0.7, // 30% des orbes sont actifs
        targetTime: Date.now() + 2000 + Math.random() * 3000
      });
    }
    setOrbs(newOrbs);
  }, [level]);

  const handleOrbClick = (orb: EnergyOrb) => {
    if (orb.active && orb.targetTime > Date.now()) {
      setScore(prev => prev + 10 * level);
      setMentalEnergy(prev => Math.min(100, prev + 5));
      
      // Régénérer les orbes
      setTimeout(generateOrbs, 500);
    } else {
      setMentalEnergy(prev => Math.max(0, prev - 10));
    }
  };

  // Exercice de respiration
  const startBreathingExercise = () => {
    setGameState('breathing');
    setBreathingCount(0);
    setBreathingPhase('inhale');
    setMentalEnergy(100);
  };

  useEffect(() => {
    if (gameState === 'breathing') {
      const interval = setInterval(() => {
        setBreathingPhase(current => {
          if (current === 'inhale') return 'hold';
          if (current === 'hold') return 'exhale';
          setBreathingCount(prev => prev + 1);
          return 'inhale';
        });
      }, 4000); // 4 secondes par phase

      return () => clearInterval(interval);
    }
  }, [gameState]);

  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameState('results');
    }
  }, [gameState, timeLeft]);

  useEffect(() => {
    if (gameState === 'playing') {
      const interval = setInterval(() => {
        setOrbs(current => 
          current.map(orb => ({
            ...orb,
            active: orb.targetTime > Date.now() && Math.random() > 0.5
          }))
        );
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [gameState]);

  const getBreathingInstruction = () => {
    switch (breathingPhase) {
      case 'inhale': return 'Inspirez profondément...';
      case 'hold': return 'Retenez votre souffle...';
      case 'exhale': return 'Expirez lentement...';
    }
  };

  const getBreathingScale = () => {
    switch (breathingPhase) {
      case 'inhale': return 'scale-125';
      case 'hold': return 'scale-125';
      case 'exhale': return 'scale-75';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoalDeep via-charcoal to-charcoalDeep relative overflow-hidden">
      <Particles />
      
      <div className="relative z-10">
        <Navigation />
        
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-display text-brand mb-6">
                  Entraînement Mental
                </h1>
                <p className="text-xl text-paper/80 max-w-2xl mx-auto">
                  Développez votre force mentale et votre concentration à travers des exercices énergétiques
                </p>
              </div>
            </ScrollReveal>

            {gameState === 'menu' && (
              <ScrollReveal>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <Card className="p-8 bg-gradient-to-br from-charcoal/30 to-charcoal/10 border-brand/20 hover:border-brand/40 transition-all duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand/20 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-brand animate-pulse"></div>
                      </div>
                      <h3 className="text-2xl font-display text-brand mb-4">Concentration</h3>
                      <p className="text-paper/70 mb-6">
                        Suivez les orbes d'énergie et développez votre focus mental
                      </p>
                      <Button onClick={startConcentrationGame} className="w-full">
                        Commencer
                      </Button>
                    </div>
                  </Card>

                  <Card className="p-8 bg-gradient-to-br from-charcoal/30 to-charcoal/10 border-brand/20 hover:border-brand/40 transition-all duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand/20 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-brand/60 animate-[pulse_4s_ease-in-out_infinite]"></div>
                      </div>
                      <h3 className="text-2xl font-display text-brand mb-4">Respiration</h3>
                      <p className="text-paper/70 mb-6">
                        Exercices de respiration guidée pour la paix intérieure
                      </p>
                      <Button onClick={startBreathingExercise} className="w-full">
                        Commencer
                      </Button>
                    </div>
                  </Card>
                </div>
              </ScrollReveal>
            )}

            {gameState === 'playing' && (
              <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8 p-4 bg-charcoal/20 rounded-lg border border-brand/20">
                  <div className="text-brand font-semibold">Score: {score}</div>
                  <div className="text-brand font-semibold">Niveau: {level}</div>
                  <div className="text-brand font-semibold">Temps: {timeLeft}s</div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-paper/70">Énergie:</span>
                    <div className="w-20 h-2 bg-charcoal rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-brand to-brand/60 transition-all duration-300"
                        style={{ width: `${mentalEnergy}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="relative h-96 bg-charcoal/10 rounded-lg border border-brand/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent"></div>
                  {orbs.map(orb => (
                    <div
                      key={orb.id}
                      className={`absolute cursor-pointer transition-all duration-500 ${
                        orb.active ? 'animate-pulse' : 'opacity-30'
                      }`}
                      style={{
                        left: `${orb.x}%`,
                        top: `${orb.y}%`,
                        width: `${orb.size}px`,
                        height: `${orb.size}px`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      onClick={() => handleOrbClick(orb)}
                    >
                      <div 
                        className={`w-full h-full rounded-full bg-gradient-to-br ${
                          orb.active 
                            ? 'from-brand to-brand/60 shadow-[0_0_20px_rgba(1,143,150,0.6)]' 
                            : 'from-brand/30 to-brand/10'
                        } transition-all duration-300`}
                        style={{ opacity: orb.opacity }}
                      ></div>
                    </div>
                  ))}
                  
                  <div className="absolute bottom-4 left-4 text-paper/60 text-sm">
                    Cliquez sur les orbes qui brillent pour développer votre concentration
                  </div>
                </div>

                <div className="text-center mt-6">
                  <Button 
                    variant="outline" 
                    onClick={() => setGameState('menu')}
                    className="border-brand/40 text-brand hover:bg-brand/10"
                  >
                    Retour au menu
                  </Button>
                </div>
              </div>
            )}

            {gameState === 'breathing' && (
              <div className="max-w-2xl mx-auto text-center">
                <div className="mb-8 p-4 bg-charcoal/20 rounded-lg border border-brand/20">
                  <div className="text-brand font-semibold">Cycles de respiration: {breathingCount}</div>
                </div>

                <div className="relative mb-12">
                  <div 
                    className={`w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-brand/40 to-brand/20 
                    shadow-[0_0_50px_rgba(1,143,150,0.4)] transition-all duration-4000 ease-in-out ${getBreathingScale()}`}
                  >
                    <div className="absolute inset-8 rounded-full bg-gradient-to-br from-brand/60 to-brand/30 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-display text-paper mb-2">
                          {getBreathingInstruction()}
                        </div>
                        <div className="text-sm text-paper/70">
                          {breathingPhase === 'inhale' && '4 secondes'}
                          {breathingPhase === 'hold' && '4 secondes'}
                          {breathingPhase === 'exhale' && '4 secondes'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-paper/70">
                  <p>Suivez le rythme de l'orbe pour synchroniser votre respiration</p>
                  <p className="text-sm">4 secondes d'inspiration - 4 secondes de rétention - 4 secondes d'expiration</p>
                </div>

                <div className="mt-8">
                  <Button 
                    variant="outline" 
                    onClick={() => setGameState('menu')}
                    className="border-brand/40 text-brand hover:bg-brand/10"
                  >
                    Terminer l'exercice
                  </Button>
                </div>
              </div>
            )}

            {gameState === 'results' && (
              <div className="max-w-2xl mx-auto text-center">
                <Card className="p-8 bg-gradient-to-br from-charcoal/30 to-charcoal/10 border-brand/20">
                  <h2 className="text-3xl font-display text-brand mb-6">Résultats</h2>
                  <div className="space-y-4 text-paper/80">
                    <div className="text-2xl">Score final: <span className="text-brand">{score}</span></div>
                    <div className="text-xl">Niveau atteint: <span className="text-brand">{level}</span></div>
                    <div className="text-lg">Énergie mentale: <span className="text-brand">{mentalEnergy}%</span></div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-brand/10 rounded-lg border border-brand/20">
                    <p className="text-paper/80">
                      {score >= 200 ? "Excellente concentration ! Votre force mentale se développe." :
                       score >= 100 ? "Bonne progression. Continuez à vous entraîner régulièrement." :
                       "C'est un début. La méditation régulière améliore la concentration."}
                    </p>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <Button onClick={startConcentrationGame} className="flex-1">
                      Rejouer
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setGameState('menu')}
                      className="flex-1 border-brand/40 text-brand hover:bg-brand/10"
                    >
                      Menu
                    </Button>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}