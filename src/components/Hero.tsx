import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex items-center relative overflow-hidden bg-dark-950">
      {/* Abstract flowing shape background */}
      <div className="absolute bottom-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 800 600"
          className="absolute bottom-0 right-0 w-[80%] h-auto opacity-80"
          preserveAspectRatio="xMaxYMax slice"
        >
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ea580c" />
              <stop offset="50%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path
            fill="url(#flowGradient)"
            filter="url(#glow)"
            d="M0,600 C150,550 300,400 450,450 C600,500 700,350 800,400 L800,600 Z"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M0,600 C150,550 300,400 450,450 C600,500 700,350 800,400 L800,600 Z;
                M0,600 C150,500 300,450 450,400 C600,350 700,450 800,380 L800,600 Z;
                M0,600 C150,550 300,400 450,450 C600,500 700,350 800,400 L800,600 Z
              "
            />
          </path>
          <path
            fill="url(#flowGradient)"
            opacity="0.6"
            d="M0,600 C200,500 350,550 500,480 C650,410 750,500 800,450 L800,600 Z"
          >
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M0,600 C200,500 350,550 500,480 C650,410 750,500 800,450 L800,600 Z;
                M0,600 C200,550 350,480 500,520 C650,560 750,420 800,480 L800,600 Z;
                M0,600 C200,500 350,550 500,480 C650,410 750,500 800,450 L800,600 Z
              "
            />
          </path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 font-mono text-sm mb-4"
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3"
            >
              {profile.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
                {profile.title}
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="#contact"
                className="group relative px-8 py-3 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500
                         text-dark-900 font-semibold rounded-xl overflow-hidden
                         transform transition-all duration-300
                         hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30
                         active:scale-95"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="/md_nazmul_islam.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-2 sm:px-4 md:px-8 py-3 border-2 border-orange-500 text-orange-400 font-semibold rounded-xl
                         transform transition-all duration-300
                         hover:bg-orange-500 hover:text-dark-900 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20
                         active:scale-95"
              >
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-dark-800/50 border border-dark-700 text-gray-400
                         transform transition-all duration-300
                         hover:text-orange-400 hover:border-orange-500/50 hover:scale-110 hover:-translate-y-1"
              >
                <Github size={22} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-dark-800/50 border border-dark-700 text-gray-400
                         transform transition-all duration-300
                         hover:text-amber-400 hover:border-amber-500/50 hover:scale-110 hover:-translate-y-1"
              >
                <Linkedin size={22} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-3 rounded-xl bg-dark-800/50 border border-dark-700 text-gray-400
                         transform transition-all duration-300
                         hover:text-yellow-400 hover:border-yellow-500/50 hover:scale-110 hover:-translate-y-1"
              >
                <Mail size={22} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-full blur-2xl opacity-30 animate-pulse" />

              {/* Photo container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden
                            border-4 border-gradient-to-r from-orange-500 to-yellow-500
                            shadow-2xl shadow-orange-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent" />
                <img
                  src="/profile.png"
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-full border-2 border-dashed border-orange-500/30 animate-spin" style={{ animationDuration: '20s' }} />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-orange-400 hover:text-yellow-400 transition-colors">
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
