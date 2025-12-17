import Image from 'next/image';
import { Leaf, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Top border with maple gradient */}
      <div className="h-1 bg-gradient-to-r from-gray-800 to-black" />

      {/* Logo watermark */}
      <div className="absolute top-10 right-10 opacity-5">
        <Image 
          src="/logo.jpg" 
          alt="DevAll Watermark" 
          width={300} 
          height={300}
          className="object-contain brightness-0 invert"
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 relative overflow-hidden">
                <Image 
                  src="/logo.jpg" 
                  alt="DevAll Logo" 
                  width={40} 
                  height={40}
                  className="object-contain brightness-0 invert"
                />
              </div>
              <h3 className="text-2xl font-bold">DevAll</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Digitalise Solutions
            </p>
            <p className="text-gray-400 text-sm italic mb-4 flex items-center gap-1">
              <Leaf className="w-4 h-4 inline-block" /> Your vision is the start of market leadership...
            </p>
            <p className="text-gray-400 text-sm">
              Trusted technology partner with Canadian professionalism and international excellence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-400">Services</h4>
            <ul className="space-y-2">
              {['Data Solutions', 'AI & Machine Learning', 'Web Development', 'App Development'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <svg className="w-4 h-4 mr-2 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-400">Company</h4>
            <ul className="space-y-2">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Contact', href: '#contact' },
                { name: 'Blog', href: '#' },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <svg className="w-4 h-4 mr-2 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-400">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@devall.vn
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +84 XXX XXX XXX
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Vietnam 🍁
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} DevAll Digitalise Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Made with love */}
          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm">
              Made with <Heart className="w-4 h-4 text-gray-700 fill-gray-700 inline-block" /> and <Leaf className="w-4 h-4 text-gray-700 fill-gray-700 inline-block" /> by DevAll Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
