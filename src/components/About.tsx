import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { profile } from '../data/profile'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="section-heading">
              <span className="text-primary-400 font-mono text-xl mr-2">01.</span>
              About Me
            </h2>
            <div className="flex-1 h-px bg-dark-300 max-w-xs" />
          </div>

          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2 space-y-4">
              <p className="text-dark-200 leading-relaxed">
                Hello! I'm Nazmul, a software engineer based in {profile.location}. I enjoy building
                scalable applications that solve real-world problems and create meaningful value.
              </p>
              <p className="text-dark-200 leading-relaxed">
                {profile.summary}
              </p>
              <p className="text-dark-200 leading-relaxed">
                I have worked extensively with <span className="text-primary-400">MySQL</span>,{' '}
                <span className="text-primary-400">PostgreSQL</span>,{' '}
                <span className="text-primary-400">MongoDB</span>, and{' '}
                <span className="text-primary-400">Oracle</span>, focusing on clean architecture,
                efficient data handling, and performance-oriented solutions.
              </p>
              <p className="text-dark-200 leading-relaxed">
                I follow strong software engineering best practices and have experience with{' '}
                <span className="text-primary-400">Docker</span>,{' '}
                <span className="text-primary-400">Kubernetes</span>,{' '}
                <span className="text-primary-400">CI/CD pipelines</span>,{' '}
                <span className="text-primary-400">Git workflows</span>, and{' '}
                <span className="text-primary-400">AWS Cloud</span>.
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
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl opacity-20 blur-sm" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-sm" />

              {/* Main Photo Container */}
              <div className="relative group">
                {/* Animated Gradient Border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-[2rem] opacity-70 group-hover:opacity-100 blur-sm transition-all duration-500 group-hover:blur-md animate-gradient" />

                {/* Secondary Border Ring */}
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-cyan-500 to-purple-500 rounded-[2.5rem] opacity-30 blur-md" />

                {/* Photo Frame */}
                <div className="relative bg-dark-500 p-1.5 rounded-[1.75rem]">
                  {/* Inner Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-[1.75rem] opacity-50" />

                  {/* Photo Container */}
                  <div className="relative rounded-[1.5rem] overflow-hidden bg-dark-400">
                    <img
                      src="/profile.png"
                      alt="Md. Nazmul Islam"
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-500/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Floating Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full opacity-80 animate-pulse" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-purple-500 rounded-full opacity-80 animate-pulse delay-150" />
                <div className="absolute top-1/2 -right-3 w-3 h-3 bg-pink-400 rounded-full opacity-80 animate-pulse delay-300" />
              </div>

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-2 -right-2 md:bottom-4 md:-right-8 bg-dark-400 border border-dark-300 rounded-xl px-4 py-2 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-dark-100 font-medium">Available for work</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Custom animation for gradient */}
      <style>{`
        @keyframes gradient {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .animate-gradient {
          animation: gradient 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
