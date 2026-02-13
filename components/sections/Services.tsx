'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { FiHome, FiTool, FiKey, FiRefreshCw, FiClipboard, FiLayers } from 'react-icons/fi'
import Link from 'next/link'

const Services = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const services = [
    {
      icon: <FiHome />,
      title: 'Interior Design',
      description: 'Luxury residential and commercial interior design tailored to your vision',
      features: ['Space Planning', 'Custom Furniture', '3D Visualization', 'Material Selection'],
    },
    {
      icon: <FiTool />,
      title: 'Construction',
      description: 'End-to-end construction services with quality craftsmanship',
      features: ['New Construction', 'Project Management', 'Quality Assurance', 'Timely Delivery'],
    },
    {
      icon: <FiKey />,
      title: 'Real Estate',
      description: 'Premium property solutions for buying, selling, and investment',
      features: ['Property Consultation', 'Market Analysis', 'Legal Support', 'Investment Advisory'],
    },
    {
      icon: <FiRefreshCw />,
      title: 'Renovation',
      description: 'Transform existing spaces with modern upgrades and redesign',
      features: ['Home Makeover', 'Office Renovation', 'Restoration', 'Modernization'],
    },
    {
      icon: <FiClipboard />,
      title: 'Consultation',
      description: 'Expert guidance for your design and construction projects',
      features: ['Design Consultation', 'Budget Planning', 'Vendor Coordination', 'Site Visits'],
    },
    {
      icon: <FiLayers />,
      title: 'Turnkey Projects',
      description: 'Complete project execution from concept to completion',
      features: ['Full Service', 'Single Point Contact', 'Hassle-Free', 'Warranty Support'],
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            Our <span className="text-gold-gradient">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for all your interior, construction, and real estate needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="text-5xl text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="text-gold hover:text-gold-dark font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
