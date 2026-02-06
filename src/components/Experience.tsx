import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, MapPin, Calendar } from 'lucide-react'
import { experience } from '../data/profile'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="section-heading">
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent font-mono text-lg mr-2">03.</span>
              Work Experience
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-orange-500/50 to-transparent max-w-xs" />
          </div>

          <div className="relative">
            {/* Timeline Line - Left aligned */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-amber-500 to-yellow-500" />

            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative pl-12 md:pl-16"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2 md:left-4 top-2 w-4 h-4 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 border-4 border-white dark:border-dark-900 shadow-lg shadow-orange-500/30" />

                  <div className="card group hover:border-orange-500/30 transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500">
                        <Briefcase className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-lg font-bold text-dark-800 dark:text-white">{job.title}</span>
                    </div>

                    <h3 className="text-base font-semibold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-2">
                      {job.company}
                    </h3>

                    <div className="flex flex-wrap gap-4 text-sm text-dark-500 dark:text-dark-400 mb-3">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-orange-500" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-amber-500" />
                        <span>{job.period}</span>
                      </div>
                    </div>

                    <p className="text-dark-600 dark:text-dark-300 text-sm mb-3">{job.description}</p>

                    <ul className="space-y-1.5">
                      {job.highlights.map((highlight, i) => (
                        <li key={i} className="text-dark-600 dark:text-dark-300 text-sm flex items-start gap-2">
                          <span className="text-orange-500 mt-1">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
