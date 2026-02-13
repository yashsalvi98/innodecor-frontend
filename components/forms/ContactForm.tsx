'use client'

import { useState } from 'react'
import { FiSend } from 'react-icons/fi'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.message || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
      setTimeout(() => {
        setSubmitStatus('idle')
        setErrorMessage('')
      }, 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          minLength={2}
          maxLength={100}
          className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gold"
          placeholder="Your name"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gold"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[6-9][0-9]{9}"
            title="Please enter a valid 10-digit Indian phone number"
            className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gold"
            placeholder="9876543210"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-2">
          Service Interested In *
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gold"
        >
          <option value="">Select a service</option>
          <option value="interior-design">Interior Design</option>
          <option value="construction">Construction</option>
          <option value="real-estate">Real Estate</option>
          <option value="renovation">Renovation</option>
          <option value="consultation">Consultation</option>
          <option value="turnkey">Turnkey Projects</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          minLength={10}
          maxLength={1000}
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gold resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      {submitStatus === 'success' && (
        <div className="bg-green-50 text-green-800 p-4 rounded-sm">
          <strong>Thank you!</strong> Your message has been sent successfully. We'll contact you within 24 hours.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 text-red-800 p-4 rounded-sm">
          <strong>Error:</strong> {errorMessage || 'Something went wrong. Please try again.'}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
        <FiSend />
      </button>

      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to be contacted by Innodecor Creations regarding your inquiry.
      </p>
    </form>
  )
}

export default ContactForm
