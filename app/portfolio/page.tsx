'use client'

import { useState } from 'react'
import Link from 'next/link'

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = ['all', 'residential', 'commercial', 'renovation']

  const projects = [
    {
      id: 1,
      title: 'Luxury Villa Interior',
      category: 'residential',
      location: 'Indore',
      description: 'Modern luxury villa with contemporary design elements',
      image: '/images/portfolio/project1.jpg',
    },
    {
      id: 2,
      title: 'Corporate Office Design',
      category: 'commercial',
      location: 'Indore',
      description: 'Professional workspace with ergonomic design',
      image: '/images/portfolio/project2.jpg',
    },
    {
      id: 3,
      title: 'Modern Home Renovation',
      category: 'renovation',
      location: 'Indore',
      description: 'Complete home transformation with modern aesthetics',
      image: '/images/portfolio/project3.jpg',
    },
    {
      id: 4,
      title: 'Boutique Hotel Interior',
      category: 'commercial',
      location: 'Indore',
      description: 'Elegant hotel interiors with luxury finishes',
      image: '/images/portfolio/project4.jpg',
    },
    {
      id: 5,
      title: 'Penthouse Design',
      category: 'residential',
      location: 'Indore',
      description: 'High-end penthouse with panoramic views',
      image: '/images/portfolio/project5.jpg',
    },
    {
      id: 6,
      title: 'Restaurant Makeover',
      category: 'renovation',
      location: 'Indore',
      description: 'Contemporary restaurant redesign',
      image: '/images/portfolio/project6.jpg',
    },
    {
      id: 7,
      title: 'Residential Complex',
      category: 'residential',
      location: 'Indore',
      description: 'Multi-unit residential development',
      image: '/images/portfolio/project7.jpg',
    },
    {
      id: 8,
      title: 'Retail Store Design',
      category: 'commercial',
      location: 'Indore',
      description: 'Modern retail space with brand identity',
      image: '/images/portfolio/project8.jpg',
    },
    {
      id: 9,
      title: 'Heritage Home Restoration',
      category: 'renovation',
      location: 'Indore',
      description: 'Preserving history with modern comfort',
      image: '/images/portfolio/project9.jpg',
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-serif text-5xl font-bold mb-4">
            Our <span className="text-gold">Portfolio</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our collection of stunning projects that showcase our expertise and creativity
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-3 rounded-sm capitalize font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-gold text-primary shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Project Image
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <button className="btn-primary text-sm">View Details</button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-gold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold mt-2 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                  <p className="text-gray-500 text-xs">📍 {project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Want to See Your Project Here?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us to start your project
          </p>
          <Link href="/contact" className="btn-primary text-lg px-10 py-4">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  )
}

export default PortfolioPage
