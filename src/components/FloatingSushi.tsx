import React, { useEffect, useRef } from 'react';

interface FloatingSushiProps {
  position: 'left' | 'right';
}

const FloatingSushi: React.FC<FloatingSushiProps> = ({ position }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const sushi = ref.current;
    if (!sushi) return;
    
    const scrollHandler = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      
      // Adjust speed and direction based on position
      const speed = position === 'left' ? 0.05 : 0.08;
      const direction = position === 'left' ? 1 : -1;
      
      // Calculate rotation and position
      const rotation = scrollY * 0.1 * direction;
      const yOffset = scrollY * speed;
      
      // Apply transformations
      sushi.style.transform = `rotate(${rotation}deg) translateY(${yOffset}px)`;
    };
    
    window.addEventListener('scroll', scrollHandler);
    
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [position]);
  
  const imageSrc = position === 'left' 
    ? "https://images.pexels.com/photos/359993/pexels-photo-359993.jpeg"
    : "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg";
  
  return (
    <div 
      ref={ref}
      className={`fixed ${position === 'left' ? 'left-[-100px]' : 'right-[-100px]'} top-1/3 z-0 w-64 h-64 rounded-full overflow-hidden transition-transform duration-300`}
      style={{
        clipPath: 'circle(50%)',
      }}
    >
      <img 
        src={imageSrc}
        alt="Floating sushi"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default FloatingSushi;