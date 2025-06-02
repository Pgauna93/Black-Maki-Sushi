import React from 'react';

const LocationsSection: React.FC = () => {
  return (
    <section id="locations" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4">VISIT US IN MIAMI BEACH</h2>
          <p className="text-xl max-w-2xl mx-auto">Experience our badass sushi at our flagship location in the heart of Miami Beach.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-xl p-6 max-w-md">
            <h3 className="text-xl font-bold mb-4">BLACK MAKI MIAMI BEACH</h3>
            <div className="space-y-3 mb-4 text-sm">
              <p><strong>Address:</strong><br />1234 Ocean Drive, Miami Beach, FL 33139</p>
              <p><strong>Hours:</strong><br />Mon-Thu: 11:30am - 10:00pm<br />Fri-Sat: 11:30am - 11:00pm<br />Sun: 12:00pm - 9:00pm</p>
              <p><strong>Phone:</strong><br />(305) 555-0123</p>
            </div>
            <a 
              href="https://goo.gl/maps/your-location" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-black hover:bg-red-600 text-white font-bold py-2 px-4 text-sm transition-colors duration-300"
            >
              GET DIRECTIONS
            </a>
          </div>
          
          <div className="h-[400px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14360.66147705904!2d-80.13426559218751!3d25.790654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b4c9a8d23b37%3A0x67e5adc3b2cc4965!2sMiami%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1709669153043!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="shadow-xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;