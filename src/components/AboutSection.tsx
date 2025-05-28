import React from 'react';
import SpiralDecoration from './SpiralDecoration';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-20 -left-20">
        <SpiralDecoration color="black" size={150} className="opacity-10" />
      </div>
      <div className="absolute bottom-10 right-10">
        <SpiralDecoration color="red" size={120} className="opacity-10" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1028426/pexels-photo-1028426.jpeg" 
              alt="Sushi chef preparing food" 
              className="relative z-10 w-full h-auto object-cover shadow-xl"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-black mb-6">THE BLACK MAKI EXPERIENCE</h2>
            <div className="w-16 h-1 bg-red-600 mb-6"></div>
            <p className="text-lg mb-6">
              Black Maki Sushi was born from a passion for pushing boundaries. Our chefs blend traditional Japanese techniques with bold, innovative flavors to create a sushi experience like no other.
            </p>
            <p className="text-lg mb-8">
              We source only the freshest ingredients, preparing each roll with precision and attitude. Whether you're a sushi aficionado or a first-timer, we promise an unforgettable culinary adventure.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 shadow-sm">
                <h3 className="font-bold text-xl mb-2">FRESH</h3>
                <p>Premium ingredients sourced daily</p>
              </div>
              <div className="bg-white p-4 shadow-sm">
                <h3 className="font-bold text-xl mb-2">BOLD</h3>
                <p>Fearless flavors that make a statement</p>
              </div>
              <div className="bg-white p-4 shadow-sm">
                <h3 className="font-bold text-xl mb-2">CRAFTED</h3>
                <p>Precision techniques from expert chefs</p>
              </div>
              <div className="bg-white p-4 shadow-sm">
                <h3 className="font-bold text-xl mb-2">ATTITUDE</h3>
                <p>Unforgettable dining experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;