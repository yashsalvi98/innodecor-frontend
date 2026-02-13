import { FiHome, FiTool, FiKey, FiRefreshCw, FiClipboard, FiLayers, FiCheck } from 'react-icons/fi'
import Link from 'next/link'

export const metadata = {
  title: 'Our Services | Innodecor Creations',
  description: 'Comprehensive interior design, construction, and real estate services in Indore. Expert solutions for residential and commercial projects.',
}

const ServicesPage = () => {
  const services = [
    {
      icon: <FiHome className="text-6xl" />,
      title: 'Interior Design',
      description: 'Transform your space with our luxury interior design services. We create functional, beautiful environments that reflect your style and personality.',
      features: [
        'Residential Interior Design',
        'Commercial Interior Design',
        'Space Planning & Layout',
        '3D Visualization & Rendering',
        'Custom Furniture Design',
        'Material & Color Consultation',
        'Lighting Design',
        'Décor & Styling',
      ],
    },
    {
      icon: <FiTool className="text-6xl" />,
      title: 'Construction Services',
      description: 'From foundation to finishing, we deliver construction excellence with quality craftsmanship and attention to detail.',
      features: [
        'New Construction',
        'Structural Work',
        'Civil Engineering',
        'Project Management',
        'Quality Control',
        'Timely Delivery',
        'Budget Management',
        'Safety Compliance',
      ],
    },
    {
      icon: <FiKey className="text-6xl" />,
      title: 'Real Estate Solutions',
      description: 'Navigate the real estate market with confidence. Our expert guidance helps you make informed property decisions.',
      features: [
        'Property Buying Consultation',
        'Property Selling Services',
        'Investment Advisory',
        'Market Analysis',
        'Legal Documentation Support',
        'Property Valuation',
        'Site Visits & Inspections',
        'Negotiation Support',
      ],
    },
    {
      icon: <FiRefreshCw className="text-6xl" />,
      title: 'Renovation & Remodeling',
      description: 'Breathe new life into existing spaces with our comprehensive renovation and remodeling services.',
      features: [
        'Home Renovation',
        'Office Remodeling',
        'Kitchen Upgrades',
        'Bathroom Makeovers',
        'Facade Restoration',
        'Structural Modifications',
        'Modern Upgrades',
        'Heritage Restoration',
      ],
    },
    {
      icon: <FiClipboard className="text-6xl" />,
      title: 'Design Consultation',
      description: 'Expert guidance for your design and construction projects. Get professional advice to make the right decisions.',
      features: [
        'Initial Consultation',
        'Design Review',
        'Budget Planning',
        'Material Selection',
        'Vendor Coordination',
        'Site Analysis',
        'Feasibility Studies',
        'Technical Guidance',
      ],
    },
    {
      icon: <FiLayers className="text-6xl" />,
      title: 'Turnkey Projects',
      description: 'Complete project execution from concept to completion. One point of contact for hassle-free project delivery.',
      features: [
        'End-to-End Solutions',
        'Single Point Contact',
        'Design & Build',
        'Project Coordination',
        'Quality Assurance',
        'Timely Completion',
        'Post-Delivery Support',
        'Warranty Coverage',
      ],
    },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-serif text-5xl font-bold mb-4">
            Our <span className="text-gold">Services</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive solutions for all your interior, construction, and real estate needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="text-gold mb-6">{service.icon}</div>
                <h2 className="font-serif text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Link href="/contact" className="btn-primary inline-block">
                  Get Started
                </Link>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-gray-50 p-8 rounded-sm">
                  <h3 className="font-semibold text-xl mb-6">What We Offer:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FiCheck className="text-gold mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let's discuss how we can bring your vision to life
          </p>
          <Link href="/contact" className="btn-primary text-lg px-10 py-4">
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
