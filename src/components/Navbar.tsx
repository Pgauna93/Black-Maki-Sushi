import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo className="h-12 w-auto" isWhite={!scrolled} />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks isScrolled={scrolled} />
          <OrderButton />
        </div>
        
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${scrolled ? 'text-black' : 'text-white'} focus:outline-none`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      } bg-white overflow-hidden`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <MobileNavLinks closeMenu={() => setIsOpen(false)} />
          <div className="pt-2">
            <OrderButton isMobile />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLinks: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
  const linkClass = isScrolled ? 'text-black' : 'text-white';
  
  return (
    <>
      <a href="#menu\" className={`${linkClass} font-medium hover:text-red-600 transition-colors`}>
        MENU
      </a>
      <a href="#about" className={`${linkClass} font-medium hover:text-red-600 transition-colors`}>
        ABOUT
      </a>
      <a href="#locations" className={`${linkClass} font-medium hover:text-red-600 transition-colors`}>
        LOCATIONS
      </a>
      <a href="#contact" className={`${linkClass} font-medium hover:text-red-600 transition-colors`}>
        CONTACT
      </a>
    </>
  );
};

const MobileNavLinks: React.FC<{closeMenu: () => void}> = ({ closeMenu }) => {
  return (
    <>
      <a 
        href="#menu" 
        className="text-black font-medium py-2 border-b border-gray-100"
        onClick={closeMenu}
      >
        MENU
      </a>
      <a 
        href="#about" 
        className="text-black font-medium py-2 border-b border-gray-100"
        onClick={closeMenu}
      >
        ABOUT
      </a>
      <a 
        href="#locations" 
        className="text-black font-medium py-2 border-b border-gray-100"
        onClick={closeMenu}
      >
        LOCATIONS
      </a>
      <a 
        href="#contact" 
        className="text-black font-medium py-2"
        onClick={closeMenu}
      >
        CONTACT
      </a>
    </>
  );
};

const OrderButton: React.FC<{isMobile?: boolean}> = ({ isMobile }) => {
  return (
    <a 
      href="#order"
      className={`${
        isMobile ? 'w-full' : ''
      } inline-flex items-center justify-center bg-red-600 text-white font-bold px-6 py-2 rounded-sm hover:bg-black transition-colors duration-300`}
    >
      <ShoppingBag size={18} className="mr-2" />
      ORDER NOW
    </a>
  );
};

export default Navbar;