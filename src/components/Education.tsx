import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, MapPin, Calendar, ExternalLink } from 'lucide-react'
import { education, publication } from '../data/profile'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="section-heading">
              <span className="text-warm-500 dark:text-warm-400 font-mono text-lg mr-2">04.</span>
              Education & Publication
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-warm-300 to-transparent dark:from-warm-700 max-w-xs" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary-500 to-violet-500 shadow-lg shadow-primary-500/30">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-dark-800 dark:text-dark-100">Education</h3>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-dark-800 dark:text-dark-100">{education.degree}</h4>
                <p className="text-primary-500 dark:text-primary-400 font-medium">{education.institution}</p>

                <div className="flex flex-wrap gap-3 text-sm text-dark-500 dark:text-dark-400">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-secondary-500" />
                    <span>{education.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-violet-500" />
                    <span>Graduated: {education.passingYear}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Publication Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card relative overflow-hidden"
            >
              {/* Award Ribbon */}
              <div className="absolute top-0 right-0">
                <div className="bg-gradient-to-r from-warm-500 to-accent-500 text-white text-xs font-bold px-8 py-1 transform rotate-45 translate-x-6 translate-y-3 shadow-lg">
                  AWARD
                </div>
              </div>

              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-gradient-to-br from-warm-500 to-accent-500 shadow-lg shadow-warm-500/30">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-dark-800 dark:text-dark-100">Publication</h3>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-dark-800 dark:text-dark-100 leading-tight pr-16">
                  {publication.title}
                </h4>
                <p className="text-dark-600 dark:text-dark-300 text-sm">{publication.venue}</p>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-warm-100 to-accent-100 dark:from-warm-900/30 dark:to-accent-900/30 rounded-lg border border-warm-300 dark:border-warm-700">
                  <Award className="w-4 h-4 text-warm-500" />
                  <span className="text-warm-700 dark:text-warm-300 font-semibold text-sm">{publication.award}</span>
                </div>

                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-500 dark:text-primary-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors mt-2"
                >
                  <span className="text-sm font-medium">View Paper</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
