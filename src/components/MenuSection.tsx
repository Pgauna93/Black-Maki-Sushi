import React, { useState } from 'react';
import SpiralDecoration from './SpiralDecoration';

const categories = [
  'All',
  'Signature Rolls',
  'Classic Rolls',
  'Sashimi',
  'Appetizers',
  'Sides',
];

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  featured: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'BLACK MAKI ROLL',
    description: 'Our signature roll with spicy tuna, avocado, tempura crunch, topped with seared salmon and special sauce',
    price: 16.99,
    imageUrl: 'https://images.pexels.com/photos/2323410/pexels-photo-2323410.jpeg',
    category: 'Signature Rolls',
    featured: true,
  },
  {
    id: 2,
    name: 'DRAGON FIRE ROLL',
    description: 'Spicy crab, cucumber, topped with seared eel, avocado, and tangy unagi sauce',
    price: 15.99,
    imageUrl: 'https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg',
    category: 'Signature Rolls',
    featured: true,
  },
  {
    id: 3,
    name: 'CALIFORNIA ROLL',
    description: 'Crab, avocado, cucumber, and tobiko',
    price: 8.99,
    imageUrl: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg',
    category: 'Classic Rolls',
    featured: false,
  },
  {
    id: 4,
    name: 'SPICY TUNA ROLL',
    description: 'Fresh tuna mixed with spicy mayo and green onions',
    price: 10.99,
    imageUrl: 'https://images.pexels.com/photos/2133989/pexels-photo-2133989.jpeg',
    category: 'Classic Rolls',
    featured: true,
  }
];

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);
  
  return (
    <section id="menu" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-10 right-10 opacity-10">
        <SpiralDecoration color="black" size={150} />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-black mb-6">One is not enough</h2>
          <p className="text-xl max-w-2xl mx-auto">Experience our bold flavors and innovative combinations. Every roll is crafted with precision and attitude.</p>
        </div>
        
        {/* Categories */}
        <div className="flex justify-center flex-wrap mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`m-2 px-8 py-3 font-bold transition-all ${
                activeCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-black hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {item.featured && (
                  <div className="absolute top-0 right-0 bg-red-600 text-white py-2 px-4 font-bold">
                    FEATURED
                  </div>
                )}
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{item.name}</h3>
                  <span className="text-2xl font-bold">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-600 mb-6 text-lg">{item.description}</p>
                <button className="bg-black hover:bg-red-600 text-white font-bold py-3 px-6 transition-colors duration-300 w-full text-lg">
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a href="#order" className="inline-block bg-red-600 text-white font-bold px-12 py-4 text-lg hover:bg-black transition-colors duration-300">
            VIEW FULL MENU
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;