interface BrandMarkProps {
  className?: string;
}

export const BrandMark = ({ className }: BrandMarkProps) => {
  return (
    <img 
      src="/lovable-uploads/102d5c4b-6621-47c1-965b-8423fb373bbb.png" 
      alt="7 Senses logo" 
      className={className}
      style={{ filter: 'drop-shadow(0 0 20px rgba(1, 143, 150, 0.3))' }}
    />
  );
};