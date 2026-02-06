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

          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2 space-y-4 relative z-10">
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

            {/* 3D Modern Profile Photo Design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-sm mx-auto perspective-1000"
              style={{ perspective: '1000px' }}
            >
              {/* 3D Background Layers */}
              <div className="absolute -inset-8 bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-yellow-500/10 rounded-3xl transform rotate-3 scale-105" />
              <div className="absolute -inset-6 bg-gradient-to-tl from-orange-400/15 via-transparent to-amber-400/15 rounded-3xl transform -rotate-2 scale-102" />

              {/* Main 3D Photo Container */}
              <div
                className="relative group transform-gpu transition-all duration-700 ease-out hover:rotate-y-3 hover:rotate-x-3"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Deep Shadow Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 to-dark-900/60 rounded-2xl transform translate-x-4 translate-y-4 blur-xl" />

                {/* Mid Shadow Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 to-amber-600/30 rounded-2xl transform translate-x-2 translate-y-2 blur-md" />

                {/* Glowing Border Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500 rounded-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{ animationDuration: '3s' }} />

                {/* Photo Frame with 3D depth */}
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-800 dark:to-dark-900 p-1.5 rounded-2xl shadow-2xl">
                  {/* Inner Frame Border */}
                  <div className="absolute inset-1 border-2 border-orange-500/20 rounded-xl pointer-events-none" />

                  {/* Photo Container */}
                  <div className="relative rounded-xl overflow-hidden">
                    {/* Photo */}
                    <img
                      src="/profile.png"
                      alt="Md. Nazmul Islam"
                      className="w-full aspect-square object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 via-dark-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                    {/* Top Light Reflection */}
                    <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

                    {/* Name Overlay at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-900/90 to-transparent">
                      <p className="text-white font-semibold text-lg tracking-wide">Md. Nazmul Islam</p>
                      <p className="text-orange-400 text-sm font-medium">Software Engineer</p>
                    </div>
                  </div>
                </div>

                {/* 3D Floating Elements */}
                <motion.div
                  className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg shadow-lg shadow-orange-500/50"
                  animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transform: 'translateZ(20px)' }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full shadow-lg shadow-amber-500/50"
                  animate={{ y: [0, 6, 0], rotate: [0, -15, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  style={{ transform: 'translateZ(15px)' }}
                />
                <motion.div
                  className="absolute top-1/2 -left-4 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-md shadow-md shadow-yellow-500/40"
                  animate={{ x: [0, -5, 0], y: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  style={{ transform: 'translateZ(25px)' }}
                />
              </div>

              {/* Status Badge with 3D effect */}
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -bottom-4 -right-4 md:bottom-2 md:-right-8 bg-white dark:bg-dark-800 border border-orange-200 dark:border-orange-800/50 rounded-xl px-4 py-2.5 shadow-xl shadow-orange-500/20"
                style={{ transform: 'translateZ(30px)' }}
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-green-400 to-emerald-500"></span>
                  </span>
                  <span className="text-xs text-dark-700 dark:text-dark-200 font-semibold">Available for work</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
