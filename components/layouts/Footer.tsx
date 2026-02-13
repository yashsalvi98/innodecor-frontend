import Link from 'next/link'
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-gold mb-4">
              Innodecor Creations
            </h3>
            <p className="text-sm text-gray-300 mb-4 italic">
              Where Creativity Meets Craftsmanship
            </p>
            <p className="text-sm text-gray-400">
              Transforming spaces with luxury interior design, construction excellence, and premium real estate solutions in Indore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-gold transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Interior Design</li>
              <li className="text-gray-400">Construction</li>
              <li className="text-gray-400">Real Estate</li>
              <li className="text-gray-400">Renovation</li>
              <li className="text-gray-400">Consultation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <FiMapPin className="mt-1 flex-shrink-0" />
                <span className="text-sm">Indore, Madhya Pradesh, India</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <FiPhone />
                <a href="tel:+919876543210" className="hover:text-gold transition-colors">+91 9826777528</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <FiMail />
                <a href="mailto:info@innodecor.com" className="hover:text-gold transition-colors">info@innodecor.com</a>
              </li>
            </ul>
            
            {/* Social Links */}

          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Innodecor Creations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
