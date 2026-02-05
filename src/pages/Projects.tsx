import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/profile'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-dark-100 mb-6">
              All <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-dark-200 text-lg">
              A collection of projects I've worked on throughout my career, from community
              management platforms to hospital management systems and more.
            </p>
          </div>

          {/* Featured Projects */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-dark-100 mb-8">Featured Projects</h2>
            <div className="space-y-24">
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
          <section>
            <h2 className="text-2xl font-bold text-dark-100 mb-8">Other Noteworthy Projects</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

          {/* Project Details Modal/Expanded View could go here */}
          <section className="mt-20">
            <h2 className="text-2xl font-bold text-dark-100 mb-8">Project Highlights</h2>
            <div className="space-y-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5 }}
                  className="card"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="aspect-video bg-dark-300 rounded-lg flex items-center justify-center">
                        <span className="text-4xl font-bold text-dark-200/50">{project.title[0]}</span>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-bold text-dark-100 mb-1">{project.title}</h3>
                      <p className="text-primary-400 text-sm mb-3">{project.subtitle}</p>
                      <p className="text-dark-200 mb-4">{project.description}</p>

                      <h4 className="text-sm font-semibold text-dark-100 mb-2">Key Features:</h4>
                      <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                        {project.features.map((feature, i) => (
                          <li key={i} className="text-dark-200 text-sm flex items-start gap-2">
                            <span className="text-primary-400 mt-1">▹</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
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
