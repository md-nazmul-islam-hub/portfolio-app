import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/profile'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <main className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-dark-800 dark:text-dark-100 mb-4">
              All <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-dark-600 dark:text-dark-300">
              A collection of projects I've worked on throughout my career, from community
              management platforms to hospital management systems and more.
            </p>
          </div>

          {/* Featured Projects */}
          <section className="mb-16">
            <h2 className="text-xl font-bold text-dark-800 dark:text-dark-100 mb-6 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></span>
              Featured Projects
            </h2>
            <div className="space-y-16">
              {projects.slice(0, 2).map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isInView={isInView}
                  featured
                />
              ))}
            </div>
          </section>

          {/* Other Projects */}
          <section className="mb-16">
            <h2 className="text-xl font-bold text-dark-800 dark:text-dark-100 mb-6 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"></span>
              Other Noteworthy Projects
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.slice(2).map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>
          </section>

          {/* Project Highlights */}
          <section>
            <h2 className="text-xl font-bold text-dark-800 dark:text-dark-100 mb-6 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></span>
              Project Highlights
            </h2>
            <div className="space-y-6">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5 }}
                  className="card"
                >
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="md:w-1/3">
                      <div className="aspect-video bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-950/30 dark:to-amber-950/30 rounded-xl flex items-center justify-center">
                        <span className="text-4xl font-bold bg-gradient-to-br from-orange-500 to-amber-500 bg-clip-text text-transparent">{project.title[0]}</span>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-lg font-bold text-dark-800 dark:text-dark-100 mb-1">{project.title}</h3>
                      <p className="text-amber-500 dark:text-amber-400 text-sm mb-2">{project.subtitle}</p>
                      <p className="text-dark-600 dark:text-dark-300 text-sm mb-3">{project.description}</p>

                      <h4 className="text-sm font-semibold text-dark-700 dark:text-dark-200 mb-2">Key Features:</h4>
                      <ul className="grid sm:grid-cols-2 gap-1.5 mb-3">
                        {project.features.map((feature, i) => (
                          <li key={i} className="text-dark-600 dark:text-dark-300 text-sm flex items-start gap-2">
                            <span className="text-orange-500 dark:text-orange-400">▹</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="skill-tag text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  )
}
