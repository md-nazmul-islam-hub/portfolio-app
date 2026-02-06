import { motion } from 'framer-motion'
import { ExternalLink, Github, Folder } from 'lucide-react'

interface Project {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  technologies: string[]
  features: string[]
  links: {
    live: string
    github: string
  }
}

interface ProjectCardProps {
  project: Project
  index: number
  isInView: boolean
  featured?: boolean
}

export default function ProjectCard({ project, index, isInView, featured = false }: ProjectCardProps) {
  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`relative grid md:grid-cols-12 gap-4 items-center ${
          index % 2 === 0 ? '' : 'md:text-right'
        }`}
      >
        {/* Project Image */}
        <div className={`md:col-span-7 ${index % 2 === 0 ? '' : 'md:order-2'}`}>
          <div className="relative group rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/80 via-violet-500/80 to-accent-500/80 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300" />
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-800 dark:to-dark-700 flex items-center justify-center">
              <Folder className="w-16 h-16 text-dark-300 dark:text-dark-600" />
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div
          className={`md:col-span-5 ${
            index % 2 === 0 ? 'md:-ml-12' : 'md:-mr-12 md:order-1'
          } relative z-10`}
        >
          <p className="text-secondary-500 dark:text-secondary-400 font-mono text-sm mb-2">Featured Project</p>
          <h3 className="text-xl font-bold text-dark-800 dark:text-dark-100 mb-1">{project.title}</h3>
          <p className="text-violet-500 dark:text-violet-400 text-sm mb-3">{project.subtitle}</p>

          <div className="card mb-4">
            <p className="text-dark-600 dark:text-dark-300 text-sm">{project.description}</p>
          </div>

          <ul className={`flex flex-wrap gap-2 mb-4 text-xs font-mono text-dark-500 dark:text-dark-400 ${
            index % 2 === 0 ? '' : 'md:justify-end'
          }`}>
            {project.technologies.slice(0, 5).map((tech) => (
              <li key={tech} className="px-2 py-1 bg-primary-50 dark:bg-primary-950/30 rounded text-primary-600 dark:text-primary-400">{tech}</li>
            ))}
          </ul>

          <div className={`flex gap-3 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
            <a
              href={project.links.github}
              className="social-link"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={project.links.live}
              className="social-link"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group h-full flex flex-col"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary-500 to-violet-500 shadow-lg shadow-primary-500/20">
          <Folder className="w-6 h-6 text-white" />
        </div>
        <div className="flex gap-2">
          <a
            href={project.links.github}
            className="p-2 text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={project.links.live}
            className="p-2 text-dark-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      <h3 className="text-lg font-bold text-dark-800 dark:text-dark-100 mb-1 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-violet-500 dark:text-violet-400 text-sm mb-2">{project.subtitle}</p>
      <p className="text-dark-600 dark:text-dark-300 text-sm mb-4 flex-1">{project.description}</p>

      <div className="mt-auto">
        <ul className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <li key={tech} className="text-xs font-mono px-2 py-0.5 bg-secondary-50 dark:bg-secondary-950/30 text-secondary-600 dark:text-secondary-400 rounded">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
