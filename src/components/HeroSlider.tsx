import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SpiralDecoration from './SpiralDecoration';

const slides = [
  {
    imageUrl: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg",
    subtitle: "Experience the perfect fusion of traditional Japanese cuisine and modern flavors. Our expert chefs craft each roll with precision and passion, bringing you an unforgettable dining experience that combines authenticity with innovation.",
    cta: "ORDER NOW"
  },
  {
    imageUrl: "https://images.pexels.com/photos/8951199/pexels-photo-8951199.jpeg",
    subtitle: "Join us at our food truck locations throughout Miami Beach for a quick and delicious sushi fix. Fresh ingredients, bold flavors, and unmatched quality on the go.",
    cta: "FIND US"
  },
  {
    imageUrl: "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg",
    subtitle: "From signature rolls to classic favorites, every dish is a masterpiece of flavor and presentation. Let our expert chefs take you on a culinary journey through the finest Japanese cuisine.",
    cta: "VIEW MENU"
  }
];

const InstagramFeed = () => {
  const images = [
    "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg",
    "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg",
    "https://images.pexels.com/photos/8951199/pexels-photo-8951199.jpeg",
    "https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg"
  ];

  return (
    <div className="bg-red-600 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-2xl font-bold mb-8 text-center">#BLACKMAKISUSHI</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden">
              <img 
                src={image} 
                alt="Instagram feed" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrent(current === slides.length - 1 ? 0 : current + 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrent(current === 0 ? slides.length - 1 : current - 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <>
      <div className="relative h-screen overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 z-10">
          <SpiralDecoration color="red" size={120} rotation={45} />
        </div>
        <div className="absolute bottom-20 right-10 z-10">
          <SpiralDecoration color="black" size={150} rotation={-90} />
        </div>
        
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === current ? 'opacity-100 z-20' : 'opacity-0 z-10'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>
            
            <div className="relative h-full flex items-center z-30">
              <div className="container mx-auto px-4 pt-40">
                <div className="max-w-3xl text-white">
                  <h1 className="text-4xl md:text-5xl font-black mb-8 leading-none">
                    <span className="block">BADASS SUSHI.</span>
                    <span className="block text-red-600">THAT'S HOW WE ROLL</span>
                  </h1>
                  <p className="text-lg md:text-xl mb-12 text-gray-200 leading-relaxed max-w-2xl">
                    {slide.subtitle}
                  </p>
                  <a
                    href="#order"
                    className="inline-block bg-red-600 text-white font-bold px-12 py-4 text-lg hover:bg-black transition-colors duration-300"
                  >
                    {slide.cta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-2 bg-white bg-opacity-30 rounded-full hover:bg-opacity-50 transition-all"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-2 bg-white bg-opacity-30 rounded-full hover:bg-opacity-50 transition-all"
        >
          <ChevronRight size={24} className="text-white" />
        </button>
        
        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current ? 'bg-red-600 w-6' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
      <InstagramFeed />
    </>
  );
};

export default HeroSlider;