'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import Link from 'next/link'
import { FiPhone, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const CTA = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 })

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-primary via-primary to-gray-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s bring your vision to life with our expert design and construction services
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact" className="btn-primary text-lg px-10 py-4">
              Get Free Consultation
            </Link>
            <a
              href="tel:+919826777528"
              className="btn-secondary text-lg px-10 py-4 flex items-center justify-center gap-2"
            >
              <FiPhone />
              Call Now
            </a>
          </div>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-400">
            <a
              href="https://wa.me/9826777528"
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <FaWhatsapp className="text-2xl" />
              <span>WhatsApp Us</span>
            </a>
            <span className="hidden sm:block">|</span>
            <a
              href="mailto:info@innodecor.com"
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <FiMail className="text-xl" />
              <span>info@innodecor.com</span>
            </a>
            <span className="hidden sm:block">|</span>
            <a
              href="tel:+919826777528"
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <FiPhone className="text-xl" />
              <span>+91 9826777528</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
