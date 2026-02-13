import ContactForm from '@/components/forms/ContactForm'
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export const metadata = {
  title: 'Contact Us | Innodecor Creations',
  description: 'Get in touch with Innodecor Creations for your interior design, construction, and real estate needs in Indore.',
}

const ContactPage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-serif text-5xl font-bold mb-4">
            Get In <span className="text-gold">Touch</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a free consultation
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">
                Let's Create Something Amazing Together
              </h2>
              <p className="text-gray-600 mb-8">
                Whether you're planning a new project or need expert consultation, our team is here to help bring your vision to life.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="text-gold text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="text-gray-600">Indore, Madhya Pradesh, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiPhone className="text-gold text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <a href="tel:+919876543210" className="text-gray-600 hover:text-gold">
                      +91 9826777528
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiMail className="text-gold text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <a href="mailto:info@innodecor.com" className="text-gray-600 hover:text-gold">
                      info@innodecor.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="text-gold text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/9826777528"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gold"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiClock className="text-gold text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-sm">
              <h3 className="font-serif text-2xl font-bold mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
    </div>
  )
}

export default ContactPage
