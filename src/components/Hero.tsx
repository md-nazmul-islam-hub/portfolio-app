import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="home" className="min-h-[85vh] flex items-center justify-center relative overflow-hidden">
      {/* Colorful Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 blob-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 blob-secondary rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 blob-accent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-secondary-600 dark:text-secondary-400 font-mono mb-4">Hi, my name is</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-dark-800 dark:text-dark-100 mb-4"
          >
            {profile.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-dark-500 dark:text-dark-300 mb-6"
          >
            I build things for the <span className="gradient-text">web</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-dark-600 dark:text-dark-300 text-lg max-w-2xl mx-auto mb-8"
          >
            {profile.title} with 5+ years of experience building scalable SaaS applications.
            Specialized in backend development with NestJS, Laravel, and cloud infrastructure on AWS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Github size={22} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="social-link"
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-primary-500 dark:text-primary-400 hover:text-violet-500 transition-colors">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={24} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
