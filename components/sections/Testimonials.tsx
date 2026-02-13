'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { FiStar } from 'react-icons/fi'

const Testimonials = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const testimonials = [
    {
      name: 'Rajesh Sharma',
      role: 'Homeowner',
      content: 'Innodecor transformed our house into a dream home. Their attention to detail and professionalism is unmatched. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Priya Patel',
      role: 'Business Owner',
      content: 'The team designed our office space beautifully. The project was completed on time and within budget. Excellent work!',
      rating: 5,
    },
    {
      name: 'Amit Verma',
      role: 'Property Investor',
      content: 'Their real estate consultation helped me make smart investment decisions. Professional, knowledgeable, and trustworthy.',
      rating: 5,
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-primary text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary text-white mb-4">
            What Our <span className="text-gold">Clients Say</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-sm"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="text-gold fill-gold" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>

              <div>
                <h4 className="font-semibold text-gold">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
