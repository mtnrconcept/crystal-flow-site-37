interface BrandMarkProps {
  className?: string;
}

export const BrandMark = ({ className }: BrandMarkProps) => {
  return (
    <img 
      src="/lovable-uploads/ca1c8efa-87f5-4d4a-ab56-d4df9fa2e6be.png" 
      alt="7 Senses logo" 
      className={className}
    />
  );
};