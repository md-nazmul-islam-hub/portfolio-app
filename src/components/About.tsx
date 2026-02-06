import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { profile } from '../data/profile'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="section-heading">
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent font-mono text-lg mr-2">01.</span>
              About Me
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-orange-500/50 to-transparent max-w-xs" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-4">
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                Hello! I'm Nazmul, a software engineer based in {profile.location}. I enjoy building
                scalable applications that solve real-world problems and create meaningful value.
              </p>
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                {profile.summary}
              </p>
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                I have worked extensively with <span className="text-orange-500 dark:text-orange-400 font-medium">MySQL</span>,{' '}
                <span className="text-amber-500 dark:text-amber-400 font-medium">PostgreSQL</span>,{' '}
                <span className="text-yellow-600 dark:text-yellow-400 font-medium">MongoDB</span>, and{' '}
                <span className="text-orange-600 dark:text-orange-400 font-medium">Oracle</span>, focusing on clean architecture,
                efficient data handling, and performance-oriented solutions.
              </p>
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                I follow strong software engineering best practices and have experience with{' '}
                <span className="text-orange-500 dark:text-orange-400 font-medium">Docker</span>,{' '}
                <span className="text-amber-500 dark:text-amber-400 font-medium">Kubernetes</span>,{' '}
                <span className="text-yellow-600 dark:text-yellow-400 font-medium">CI/CD pipelines</span>,{' '}
                <span className="text-orange-600 dark:text-orange-400 font-medium">Git workflows</span>, and{' '}
                <span className="text-amber-600 dark:text-amber-400 font-medium">AWS Cloud</span>.
              </p>
            </div>

            {/* Modern Profile Photo Design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-sm mx-auto"
            >
              {/* Decorative Background Shapes */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-400 rounded-2xl opacity-20 blur-sm" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full opacity-20 blur-sm" />

              {/* Main Photo Container */}
              <div className="relative group">
                {/* Animated Gradient Border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-2xl opacity-70 group-hover:opacity-100 blur-sm transition-all duration-500 group-hover:blur-md" />

                {/* Photo Frame */}
                <div className="relative bg-white dark:bg-dark-900 p-1 rounded-2xl">
                  <div className="relative rounded-xl overflow-hidden bg-gray-100 dark:bg-dark-800">
                    <img
                      src="/profile.png"
                      alt="Md. Nazmul Islam"
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full animate-pulse" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full animate-pulse delay-150" />
              </div>

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-2 -right-2 md:bottom-4 md:-right-6 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl px-3 py-2 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-green-400 to-amber-400 rounded-full animate-pulse" />
                  <span className="text-xs text-dark-700 dark:text-dark-200 font-medium">Available for work</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
