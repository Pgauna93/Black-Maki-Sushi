import React from 'react';
import SpiralDecoration from './SpiralDecoration';

const PhoneMockup: React.FC = () => {
  return (
    <div className="relative">
      {/* Decorative Elements */}
      <div className="absolute -top-16 -left-16 z-0 opacity-20">
        <SpiralDecoration color="black" size={120} rotation={45} />
      </div>
      <div className="absolute -bottom-20 -right-10 z-0 opacity-30">
        <SpiralDecoration color="red" size={100} rotation={-45} />
      </div>
    
      <div className="relative z-10 mx-auto w-[280px] bg-black rounded-[36px] p-2 shadow-xl">
        <div className="rounded-[32px] overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20 flex justify-center items-center">
            <div className="w-16 h-2 rounded-full bg-black border-4 border-gray-800"></div>
          </div>
          
          {/* Phone Screen */}
          <div className="relative pt-8 pb-4 h-[580px] overflow-hidden">
            <div className="h-full relative">
              <img 
                src="https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg"
                alt="Sushi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <button className="bg-red-600 text-white font-bold text-xl px-8 py-3 hover:bg-white hover:text-black transition-all duration-300">
                  ORDER NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Home Button / Bar */}
        <div className="mt-2 mx-auto w-1/3 h-1 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default PhoneMockup;