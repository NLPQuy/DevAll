'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, Bot, Monitor, Smartphone, Leaf, Target, RefreshCw, Wrench, BookOpen } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Data Solutions',
    description: 'Intelligent data analysis and processing, building Data Warehouses, ETL Pipelines, and Business Intelligence solutions.',
    features: [
      'Data Analytics & Visualization',
      'Data Warehouse & ETL',
      'Business Intelligence',
      'Big Data Processing',
    ],
    color: 'from-red-600 to-red-700',
  },
  {
    icon: Bot,
    title: 'AI & Machine Learning',
    description: 'Applying artificial intelligence and machine learning to businesses, from smart chatbots to prediction and automation.',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'AI Chatbots & Automation',
    ],
    color: 'from-red-700 to-red-800',
    featured: true,
  },
  {
    icon: Monitor,
    title: 'Web Development',
    description: 'Professional, responsive, SEO-optimized website design and development with the latest technologies.',
    features: [
      'Responsive Web Design',
      'E-commerce Solutions',
      'CMS & Web Applications',
      'SEO Optimization',
    ],
    color: 'from-red-600 to-red-700',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Cross-platform mobile application development with optimal user experience and high performance.',
    features: [
      'iOS & Android Apps',
      'Cross-platform Development',
      'UI/UX Design',
      'App Maintenance & Support',
    ],
    color: 'from-red-700 to-red-800',
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-red-50 to-white relative overflow-hidden">
      {/* Maple leaves decoration */}
      <motion.div 
        className="absolute top-10 left-10 opacity-5"
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="200" height="200" viewBox="0 0 600 600" className="fill-red-600">
          <path d="M300 20l40 120 120-40-40 120 120 40-120 40 40 120-120-40-40 120-40-120-120 40 40-120-120-40 120-40-40-120 120 40z"/>
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-poppins)]">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto flex items-center justify-center gap-2">
            Comprehensive technology solutions with professional Canadian style <Leaf className="w-5 h-5 text-red-600 inline-block" />
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-maple-red ${
                service.featured ? 'ring-2 ring-maple-red' : ''
              }`}
            >
              {/* Featured Badge */}
              {service.featured && (
                <div className="absolute -top-3 -right-3 bg-maple-gradient text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                  <Leaf className="w-4 h-4" /> Popular
                </div>
              )}

              {/* Icon */}
              <div className="mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-16 h-16 text-red-600" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 font-[family-name:var(--font-poppins)] group-hover:text-maple-red transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-2 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-maple-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Link */}
              <a
                href="#contact"
                className="inline-flex items-center text-maple-red font-semibold group-hover:translate-x-2 transition-transform"
              >
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Comprehensive Services */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-3xl p-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-8 font-[family-name:var(--font-poppins)] flex items-center justify-center gap-2">
            <Leaf className="w-8 h-8" /> Comprehensive Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, text: 'Technology Strategy Consulting' },
              { icon: RefreshCw, text: 'Digital Transformation' },
              { icon: Wrench, text: '24/7 Maintenance & Support' },
              { icon: BookOpen, text: 'Technology Training & Transfer' },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors">
                <item.icon className="w-8 h-8 mx-auto mb-2" />
                <p className="font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
