import { FiAward, FiUsers, FiTrendingUp, FiTarget, FiHeart, FiShield } from 'react-icons/fi'
import Link from 'next/link'

export const metadata = {
  title: 'About Us | Innodecor Creations',
  description: 'Learn about Innodecor Creations - Indore\'s premier interior design, construction, and real estate company with over 15 years of excellence.',
}

const AboutPage = () => {
  const values = [
    {
      icon: <FiTarget />,
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering quality that exceeds expectations.',
    },
    {
      icon: <FiHeart />,
      title: 'Passion',
      description: 'Our love for design and craftsmanship drives us to create extraordinary spaces.',
    },
    {
      icon: <FiShield />,
      title: 'Integrity',
      description: 'Transparency, honesty, and ethical practices are the foundation of our business.',
    },
  ]

  const team = [
    {
      name: 'Architect Name',
      role: 'Principal Architect',
      description: 'Leading design innovation with 20+ years of experience',
    },
    {
      name: 'Engineer Name',
      role: 'Chief Engineer',
      description: 'Ensuring structural excellence and quality construction',
    },
    {
      name: 'Designer Name',
      role: 'Lead Interior Designer',
      description: 'Creating beautiful, functional spaces that inspire',
    },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-serif text-5xl font-bold mb-4">
            About <span className="text-gold">Innodecor Creations</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto italic">
            Where Creativity Meets Craftsmanship
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">
                Our <span className="text-gold-gradient">Story</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2008, Innodecor Creations has grown from a small design studio to become one of Indore's most trusted names in interior design, construction, and real estate services.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                With over 15 years of experience and 500+ successful projects, we've built a reputation for excellence, innovation, and unwavering commitment to client satisfaction.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of skilled architects, designers, engineers, and craftsmen work together to transform visions into reality, creating spaces that are not just beautiful, but also functional and sustainable.
              </p>
            </div>
            <div className="h-96 bg-gray-200 rounded-sm flex items-center justify-center">
              <span className="text-gray-400">Company Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-serif text-5xl font-bold text-gold mb-2">500+</div>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div>
              <div className="font-serif text-5xl font-bold text-gold mb-2">15+</div>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div>
              <div className="font-serif text-5xl font-bold text-gold mb-2">450+</div>
              <p className="text-gray-400">Happy Clients</p>
            </div>
            <div>
              <div className="font-serif text-5xl font-bold text-gold mb-2">50+</div>
              <p className="text-gray-400">Expert Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4">
              Our <span className="text-gold-gradient">Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-sm text-center">
                <div className="text-5xl text-gold mb-4 flex justify-center">{value.icon}</div>
                <h3 className="font-serif text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4">
              Meet Our <span className="text-gold-gradient">Team</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Talented professionals dedicated to bringing your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-400">Photo</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gold mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Ready to transform your space? Get in touch with us today
          </p>
          <Link href="/contact" className="btn-primary text-lg px-10 py-4">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
