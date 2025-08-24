interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  className?: string;
}

export const TestimonialCard = ({ quote, name, location, className }: TestimonialCardProps) => {
  return (
    <div className={`energy-card p-6 rounded-xl h-full ${className}`}>
      <div className="space-y-4">
        <div className="text-primary/50">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
          </svg>
        </div>
        
        <blockquote className="text-foreground leading-relaxed">
          "{quote}"
        </blockquote>
        
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
            {name.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-foreground">{name}</div>
            <div className="text-sm text-muted-foreground">{location}</div>
          </div>
        </div>
      </div>
    </div>
  );
};