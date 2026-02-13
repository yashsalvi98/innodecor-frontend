'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { FiAward, FiUsers, FiTrendingUp } from 'react-icons/fi'

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const features = [
    {
      icon: <FiUsers className="text-4xl" />,
      title: 'Expert Team',
      description: 'Skilled professionals with decades of combined experience',
    },
    {
      icon: <FiTrendingUp className="text-4xl" />,
      title: 'Client Satisfaction',
      description: 'Dedicated to exceeding expectations on every project',
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-secondary mb-6">
              Crafting Spaces That
              <span className="text-gold-gradient block">Inspire & Elevate</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Innodecor Creations is Indore's premier destination for luxury interior design, construction excellence, and real estate solutions. With over 15 years of experience, we've transformed hundreds of residential and commercial spaces into masterpieces.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our commitment to quality, attention to detail, and client-centric approach has made us the trusted choice for discerning clients across Madhya Pradesh.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex gap-4 items-start"
                >
                  <div className="text-gold">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-sm overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80" 
              alt="Luxury interior design by Innodecor Creations" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
