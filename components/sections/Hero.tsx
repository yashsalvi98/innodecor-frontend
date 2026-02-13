'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
      
      {/* Placeholder for background image */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center" />

      {/* Content */}
      <div className="container-custom relative z-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Where Creativity Meets
            <span className="block text-gold mt-2">Craftsmanship</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your space with luxury interior design, expert construction, and premium real estate solutions
          </p>

          <div className="flex justify-center">
            <Link href="/contact" className="btn-primary flex items-center gap-2">
              Get Free Consultation
              <FiArrowRight />
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-gold rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
