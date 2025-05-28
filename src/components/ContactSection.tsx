import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">GET IN TOUCH</h2>
            <p className="text-xl">Have questions or feedback? We'd love to hear from you.</p>
          </div>
          
          <div className="bg-white p-8 shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-2">NAME</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-black"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-2">EMAIL</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-black"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-bold mb-2">SUBJECT</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-black"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-2">MESSAGE</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-black resize-none"
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-black text-white font-bold py-3 px-8 transition-colors duration-300"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg font-bold mb-2">FOLLOW US</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-red-600 transition-colors">
                FB
              </a>
              <a href="#" className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-red-600 transition-colors">
                IG
              </a>
              <a href="#" className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-red-600 transition-colors">
                TW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;