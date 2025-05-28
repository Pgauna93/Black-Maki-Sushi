import React from 'react';
import Logo from './Logo';
import SpiralDecoration from './SpiralDecoration';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      <div className="absolute -top-10 right-0 opacity-10">
        <SpiralDecoration color="red" size={150} />
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo className="mb-4" />
            <p className="mb-4">BADASS SUSHI.<br />THAT'S HOW WE ROLL</p>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Black Maki Sushi.<br />All rights reserved.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">MENU</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Signature Rolls</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Classic Rolls</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sashimi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Appetizers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sides</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">COMPANY</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#locations" className="text-gray-400 hover:text-white transition-colors">Locations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">CONNECT</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              Design by Black Maki Sushi | Built with React & Tailwind CSS
            </p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors mr-6">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;