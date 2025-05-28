import React from 'react';

interface SpiralDecorationProps {
  color: 'black' | 'red';
  size: number;
  className?: string;
  rotation?: number;
}

const SpiralDecoration: React.FC<SpiralDecorationProps> = ({ 
  color = 'black', 
  size = 100,
  className = '',
  rotation = 0
}) => {
  const colorClass = color === 'red' ? 'text-red-600' : 'text-black';
  
  return (
    <div 
      className={`${colorClass} ${className}`}
      style={{ 
        width: size, 
        height: size,
        transform: `rotate(${rotation}deg)`
      }}
    >
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path 
          d="M50,10 A40,40 0 0,0 10,50 A40,40 0 0,0 50,90 A40,40 0 0,0 90,50 A30,30 0 0,0 60,20 A20,20 0 0,0 40,40 A10,10 0 0,0 50,50"
          stroke="currentColor" 
          strokeWidth="8" 
          strokeLinecap="round"
          className="animate-drawSpiral"
        />
      </svg>
    </div>
  );
};

export default SpiralDecoration;