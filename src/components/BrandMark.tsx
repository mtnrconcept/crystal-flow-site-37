interface BrandMarkProps {
  className?: string;
}

export const BrandMark = ({ className }: BrandMarkProps) => {
  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes breathe {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.6;
          }
          50% { 
            transform: scale(1.1);
            opacity: 0.9;
          }
        }
      `}</style>
      <div className={`relative ${className}`}>
        <img 
          src="/lovable-uploads/102d5c4b-6621-47c1-965b-8423fb373bbb.png" 
          alt="7 Senses logo" 
          className="relative z-10"
          style={{ 
            filter: 'drop-shadow(0 0 20px rgba(1, 143, 150, 0.6))',
            animation: 'float 6s ease-in-out infinite, breathe 4s ease-in-out infinite'
          }}
        />
        {/* Lueur de respiration */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(1, 143, 150, 0.4) 0%, transparent 70%)',
            animation: 'breathe 4s ease-in-out infinite',
            filter: 'blur(10px)'
          }}
        />
      </div>
    </>
  );
};