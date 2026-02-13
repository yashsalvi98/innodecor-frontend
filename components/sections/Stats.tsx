'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import CountUp from '@/components/ui/CountUp'

const Stats = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 })

  const stats = [
    { number: 500, suffix: '+', label: 'Projects Completed' },
    { number: 15, suffix: '+', label: 'Years Experience' },
    { number: 450, suffix: '+', label: 'Happy Clients' },
    { number: 50, suffix: '+', label: 'Expert Team' },
  ]

  return (
    <section ref={ref} className="bg-primary text-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-serif text-4xl md:text-5xl font-bold text-gold mb-2">
                {isInView && <CountUp end={stat.number} duration={2} />}
                {stat.suffix}
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
