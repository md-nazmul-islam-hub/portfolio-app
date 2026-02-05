import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, MapPin, Calendar, ExternalLink } from 'lucide-react'
import { education, publication } from '../data/profile'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="section-heading">
              <span className="text-primary-400 font-mono text-xl mr-2">04.</span>
              Education & Publication
            </h2>
            <div className="flex-1 h-px bg-dark-300 max-w-xs" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-primary-500 to-blue-500">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-100">Education</h3>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-dark-100">{education.degree}</h4>
                <p className="text-primary-400 font-medium">{education.institution}</p>

                <div className="flex flex-wrap gap-4 text-sm text-dark-200">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{education.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
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
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-8 py-1 transform rotate-45 translate-x-6 translate-y-3">
                  AWARD
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-100">Publication</h3>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-dark-100 leading-tight">
                  {publication.title}
                </h4>
                <p className="text-dark-200">{publication.venue}</p>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg border border-yellow-500/30">
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span className="text-yellow-400 font-semibold text-sm">{publication.award}</span>
                </div>

                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors mt-4"
                >
                  <span>View Paper</span>
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
