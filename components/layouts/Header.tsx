'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom flex items-center justify-between py-4 px-4 md:px-8">
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-2xl md:text-3xl font-bold text-gold">
            Innodecor Creations
          </span>
          <span className="text-xs text-gold/80 italic">Where Creativity Meets Craftsmanship</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+919826777528"
            className="btn-primary flex items-center gap-2"
          >
            <FiPhone />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white text-2xl"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary/98 backdrop-blur-sm"
          >
            <div className="container-custom px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-gold transition-colors duration-300 py-2"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+919826777528"
                className="btn-primary flex items-center justify-center gap-2 mt-4"
              >
                <FiPhone />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
