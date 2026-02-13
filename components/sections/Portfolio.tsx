'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { useState } from 'react'
import Link from 'next/link'

const Portfolio = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = ['all', 'residential', 'commercial', 'renovation']

  const projects = [
    {
      id: 1,
      title: 'Luxury Villa Interior',
      category: 'residential',
      location: 'Indore',
      image: '/images/portfolio/project1.jpg',
    },
    {
      id: 2,
      title: 'Corporate Office Design',
      category: 'commercial',
      location: 'Indore',
      image: '/images/portfolio/project2.jpg',
    },
    {
      id: 3,
      title: 'Modern Home Renovation',
      category: 'renovation',
      location: 'Indore',
      image: '/images/portfolio/project3.jpg',
    },
    {
      id: 4,
      title: 'Boutique Hotel Interior',
      category: 'commercial',
      location: 'Indore',
      image: '/images/portfolio/project4.jpg',
    },
    {
      id: 5,
      title: 'Penthouse Design',
      category: 'residential',
      location: 'Indore',
      image: '/images/portfolio/project5.jpg',
    },
    {
      id: 6,
      title: 'Restaurant Makeover',
      category: 'renovation',
      location: 'Indore',
      image: '/images/portfolio/project6.jpg',
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary mb-4">
            Our <span className="text-gold-gradient">Portfolio</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our collection of stunning projects that showcase our expertise
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-sm capitalize transition-all ${
                  activeFilter === filter
                    ? 'bg-gold text-primary'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-sm bg-gray-200 h-80 cursor-pointer"
            >
              {/* Placeholder for project image */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Project Image
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gold text-sm">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/portfolio" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
