import React from 'react';

const LocationsSection: React.FC = () => {
  return (
    <section id="locations" className="py-20 bg-gradient-to-br from-zinc-900 to-black text-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-red-600 text-lg font-bold tracking-wider">FIND US</span>
          <h2 className="text-3xl font-black mt-2">
            <span className="block text-zinc-400">EXPERIENCE</span>
            <span className="block text-white mt-1">BLACK MAKI SUSHI</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2 h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14360.66147705904!2d-80.13426559218751!3d25.790654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b4c9a8d23b37%3A0x67e5adc3b2cc4965!2sMiami%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1709669153043!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter grayscale"
            ></iframe>
          </div>
          
          {/* Location Details */}
          <div className="bg-zinc-800 rounded-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-6 text-red-600">BLACK MAKI MIAMI BEACH</h3>
              
              <div className="space-y-6 text-zinc-300">
                <div>
                  <h4 className="text-white text-sm font-bold mb-2">ADDRESS</h4>
                  <p className="text-sm">1234 Ocean Drive,<br />Miami Beach, FL 33139</p>
                </div>
                
                <div>
                  <h4 className="text-white text-sm font-bold mb-2">HOURS</h4>
                  <div className="text-sm space-y-1">
                    <p>Mon-Thu: 11:30am - 10:00pm</p>
                    <p>Fri-Sat: 11:30am - 11:00pm</p>
                    <p>Sun: 12:00pm - 9:00pm</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white text-sm font-bold mb-2">CONTACT</h4>
                  <p className="text-sm">(305) 555-0123</p>
                </div>
                
                <div className="pt-2">
                  <a 
                    href="https://goo.gl/maps/your-location" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-3 px-6 rounded-sm transition-colors duration-300 w-full text-center"
                  >
                    GET DIRECTIONS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;