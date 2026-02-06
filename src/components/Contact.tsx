import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react'
import { profile } from '../data/profile'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-12 md:py-16 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent font-mono mb-3">05. What's Next?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-800 dark:text-dark-100 mb-4">Get In Touch</h2>
            <p className="text-dark-600 dark:text-dark-300">
              I'm currently open to new opportunities and always interested in hearing about
              exciting projects. Whether you have a question or just want to say hi, feel free
              to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-dark-800 dark:text-dark-100 mb-4">Contact Information</h3>

              <a href={`mailto:${profile.email}`} className="contact-card">
                <div className="contact-icon">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-dark-500 dark:text-dark-400">Email</p>
                  <p className="text-dark-800 dark:text-dark-100 text-sm font-medium">{profile.email}</p>
                </div>
              </a>

              <a href={`tel:${profile.phone}`} className="contact-card">
                <div className="contact-icon">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-dark-500 dark:text-dark-400">Phone</p>
                  <p className="text-dark-800 dark:text-dark-100 text-sm font-medium">{profile.phone}</p>
                </div>
              </a>

              <div className="contact-card">
                <div className="contact-icon">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-dark-500 dark:text-dark-400">Location</p>
                  <p className="text-dark-800 dark:text-dark-100 text-sm font-medium">{profile.location}</p>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-link">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input-field"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input-field"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  <span className="relative z-10 inline-flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
