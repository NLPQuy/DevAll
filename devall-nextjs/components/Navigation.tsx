'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect maple-shadow' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1.5 sm:space-x-2 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0 relative overflow-hidden bg-transparent">
              <Image 
                src="/logo.jpg" 
                alt="DevAll Logo" 
                width={40} 
                height={40}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                style={{ 
                  mixBlendMode: 'darken',
                  filter: 'contrast(1.2) brightness(1.1)'
                }}
                priority
              />
            </div>
            <span className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-poppins)] bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent whitespace-nowrap">
              DevAll
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Home', href: '#home' },
              { label: 'About', href: '#about' },
              { label: 'Services', href: '#services' },
              { label: 'Contact', href: '#contact' }
            ].map((item) => (
              <motion.div key={item.label} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link href={item.href} className="nav-link text-gray-700 hover:text-gray-900">
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-gray-800 to-black text-white rounded-lg font-medium shadow-lg">
                Book Consultation
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pb-4 glass-effect rounded-b-2xl overflow-hidden"
            >
              <div className="flex flex-col space-y-3 px-4">
                {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      href={`#${item.toLowerCase()}`}
                      className="py-2 hover:text-gray-900 transition-colors block text-gray-700"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link 
                    href="#contact" 
                    className="py-2.5 bg-gradient-to-r from-gray-800 to-black text-white rounded-lg text-center font-medium block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book Consultation
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
