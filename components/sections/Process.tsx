'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { FiMessageSquare, FiPenTool, FiTool, FiCheckCircle } from 'react-icons/fi'

const Process = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const steps = [
    {
      icon: <FiMessageSquare />,
      title: 'Consultation',
      description: 'We understand your vision, requirements, and budget through detailed discussions',
    },
    {
      icon: <FiPenTool />,
      title: 'Design & Planning',
      description: 'Our experts create detailed designs and project plans tailored to your needs',
    },
    {
      icon: <FiTool />,
      title: 'Execution',
      description: 'Skilled craftsmen bring the design to life with precision and quality',
    },
    {
      icon: <FiCheckCircle />,
      title: 'Delivery',
      description: 'Final inspection and handover of your dream space, ready to use',
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
            Our <span className="text-gold-gradient">Process</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A streamlined approach to transform your vision into reality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center font-serif text-2xl font-bold text-primary">
                {index + 1}
              </div>

              <div className="bg-white p-8 pt-12 rounded-sm hover:shadow-lg transition-shadow">
                <div className="text-5xl text-gold mb-4">{step.icon}</div>
                <h3 className="font-serif text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gold/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
