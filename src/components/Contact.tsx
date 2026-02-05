import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react'
import { profile } from '../data/profile'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-20 md:py-32 bg-dark-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary-400 font-mono mb-4">05. What's Next?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-100 mb-6">Get In Touch</h2>
            <p className="text-dark-200">
              I'm currently open to new opportunities and always interested in hearing about
              exciting projects. Whether you have a question or just want to say hi, feel free
              to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-dark-100 mb-6">Contact Information</h3>

              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 p-4 rounded-lg bg-dark-400/50 border border-dark-300 hover:border-primary-500/50 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-primary-500/10 text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-dark-200">Email</p>
                  <p className="text-dark-100">{profile.email}</p>
                </div>
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-4 p-4 rounded-lg bg-dark-400/50 border border-dark-300 hover:border-primary-500/50 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-primary-500/10 text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-dark-200">Phone</p>
                  <p className="text-dark-100">{profile.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-dark-400/50 border border-dark-300">
                <div className="p-3 rounded-lg bg-primary-500/10 text-primary-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-dark-200">Location</p>
                  <p className="text-dark-100">{profile.location}</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-dark-400/50 border border-dark-300 text-dark-200 hover:text-primary-400 hover:border-primary-500/50 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-dark-400/50 border border-dark-300 text-dark-200 hover:text-primary-400 hover:border-primary-500/50 transition-colors"
                >
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
                  <label htmlFor="name" className="block text-sm font-medium text-dark-200 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg bg-dark-400/50 border border-dark-300 text-dark-100 placeholder-dark-200 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg bg-dark-400/50 border border-dark-300 text-dark-100 placeholder-dark-200 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-dark-400/50 border border-dark-300 text-dark-100 placeholder-dark-200 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
