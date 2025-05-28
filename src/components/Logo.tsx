import React from 'react';

interface LogoProps {
  className?: string;
  isWhite?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, isWhite }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className={`text-2xl font-black tracking-tight ${isWhite ? 'text-white' : ''}`}>
        <span className={isWhite ? 'text-white' : 'text-black'}>black</span>
        <span className="text-red-600">maki</span>
      </span>
    </div>
  );
};

export default Logo;