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
              <span className="text-accent-500 dark:text-accent-400 font-mono text-lg mr-2">03.</span>
              Work Experience
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-accent-300 to-transparent dark:from-accent-700 max-w-xs" />
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line transform md:-translate-x-1/2" />

            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative pl-8 md:pl-0 pb-10 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:ml-auto md:pl-10'
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute top-0 timeline-dot
                    left-0 md:left-auto ${index % 2 === 0 ? 'md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'}
                    transform -translate-x-1/2 md:translate-x-0`}
                />

                <div className="card">
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Briefcase className="w-4 h-4 text-primary-500 dark:text-primary-400" />
                    <span className="text-primary-500 dark:text-primary-400 font-semibold">{job.title}</span>
                  </div>

                  <h3 className="text-lg font-bold text-dark-800 dark:text-dark-100 mb-2">{job.company}</h3>

                  <div className={`flex flex-wrap gap-3 text-sm text-dark-500 dark:text-dark-400 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-secondary-500" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-violet-500" />
                      <span>{job.period}</span>
                    </div>
                  </div>

                  <p className="text-dark-600 dark:text-dark-300 text-sm mb-3">{job.description}</p>

                  <ul className={`space-y-1.5 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="text-dark-600 dark:text-dark-300 text-sm flex items-start gap-2">
                        <span className="text-accent-500 dark:text-accent-400 mt-1">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
