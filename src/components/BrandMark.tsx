interface BrandMarkProps {
  className?: string;
}

export const BrandMark = ({ className }: BrandMarkProps) => {
  return (
    <svg 
      viewBox="0 0 64 64" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none"
      className={className}
    >
      <path 
        d="M46 15c-9 7-21 20-18 32 2 8 13 10 19 5 4-4 5-10 1-15-5-6-15-7-22-2" 
        stroke="currentColor" 
        strokeWidth="3.2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M46 15c2 5 3 8-1 13" 
        stroke="currentColor" 
        strokeWidth="3.2" 
        strokeLinecap="round"
      />
      <path 
        d="M49 28c5 2 9 3 12-1-2 8-9 11-14 11" 
        fill="currentColor" 
        opacity=".7"
      />
    </svg>
  );
};