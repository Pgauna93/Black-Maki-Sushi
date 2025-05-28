import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import PhoneMockup from '../components/PhoneMockup';
import MenuSection from '../components/MenuSection';
import AboutSection from '../components/AboutSection';
import LocationsSection from '../components/LocationsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <HeroSlider />
      
      {/* Phone Mockup Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6">ORDER ON THE GO</h2>
              <div className="w-16 h-1 bg-red-600 mb-6"></div>
              <p className="text-lg mb-6">
                Download our mobile app and order your favorite sushi rolls anytime, anywhere. Get exclusive deals and rewards with every purchase.
              </p>
              <p className="text-lg mb-8">
                Available for iOS and Android devices. Fast, convenient, and always fresh.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-black text-white px-6 py-3 font-bold hover:bg-red-600 transition-colors">
                  APP STORE
                </button>
                <button className="bg-black text-white px-6 py-3 font-bold hover:bg-red-600 transition-colors">
                  GOOGLE PLAY
                </button>
              </div>
            </div>
            <div>
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>
      
      <MenuSection />
      <AboutSection />
      <LocationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;