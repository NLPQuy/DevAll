'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Package, Lightbulb, Calendar, ArrowRight, ChevronDown, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Maple Pattern Background */}
      <div className="absolute inset-0 maple-pattern opacity-10" />
      
      {/* Maple Leaf Decorations - Hidden on mobile */}
      <motion.div 
        className="absolute top-20 left-10 opacity-10 hidden md:block"
        animate={{
          y: [0, 20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 600 600" className="fill-gray-700">
          <path d="M300 20l40 120 120-40-40 120 120 40-120 40 40 120-120-40-40 120-40-120-120 40 40-120-120-40 120-40-40-120 120 40z"/>
        </svg>
      </motion.div>
      <motion.div 
        className="absolute bottom-20 right-10 opacity-10 hidden md:block"
        animate={{
          y: [0, -20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <svg width="150" height="150" viewBox="0 0 600 600" className="fill-gray-700">
          <path d="M300 20l40 120 120-40-40 120 120 40-120 40 40 120-120-40-40 120-40-120-120 40 40-120-120-40 120-40-40-120 120 40z"/>
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Animated Logo */}
          <motion.div 
            className="mb-6 md:mb-8 flex justify-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100,
              damping: 10,
              duration: 1 
            }}
          >
            <div className="relative">
              <motion.div 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 relative drop-shadow-2xl bg-transparent"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image 
                  src="/logo.jpg" 
                  alt="DevAll Logo" 
                  width={160} 
                  height={160}
                  className="w-full h-full object-contain"
                  style={{ 
                    mixBlendMode: 'darken',
                    filter: 'contrast(1.2) brightness(1.1)'
                  }}
                  priority
                />
              </motion.div>
              {/* Gray circle behind */}
              <motion.div 
                className="absolute inset-0 -z-10 bg-gray-700 rounded-full blur-3xl opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Company Name */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-3 md:mb-4 font-[family-name:var(--font-poppins)] px-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent drop-shadow-lg">
              DevAll
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 md:mb-6 font-medium tracking-wide flex items-center justify-center gap-2 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Digitalise Solutions <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 inline-block" />
          </motion.p>

          {/* Slogan */}
          <motion.div 
            className="mb-8 md:mb-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Your vision is the start of <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">market leadership...</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We transform your vision into reality with advanced technology solutions, delivered with Canadian professionalism and international excellence.
            </p>
          </motion.div>

          {/* Main CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-gray-800 to-black text-white rounded-xl font-bold text-lg shadow-lg flex items-center space-x-2 group"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, backgroundColor: 'rgb(31, 41, 55)', color: 'white' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-gray-800 border-2 border-gray-800 rounded-xl font-bold text-lg transition-all"
            >
              Explore Services
            </motion.a>
          </motion.div>

          {/* Additional CTA Grid - Order, Consult, Booking */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            {[
              { icon: Package, title: 'Order', desc: 'Order services', color: 'from-gray-800 to-black' },
              { icon: Lightbulb, title: 'Consult', desc: 'Free consultation', color: 'from-gray-700 to-gray-900' },
              { icon: Calendar, title: 'Book Meeting', desc: 'In-person meeting', color: 'from-gray-800 to-black' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={index}
                  href="#contact"
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-gradient-to-r ${item.color} text-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all cursor-pointer`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-8 h-8" />
                    <div className="text-left">
                      <p className="font-bold text-lg">{item.title}</p>
                      <p className="text-sm opacity-90">{item.desc}</p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-20 cursor-pointer hover:scale-110 transition-transform"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            aria-label="Scroll to About section"
            suppressHydrationWarning
          >
            <ChevronDown className="w-6 h-6 mx-auto text-gray-800" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
