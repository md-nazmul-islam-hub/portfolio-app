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
        <div
          className={`md:col-span-7 ${index % 2 === 0 ? '' : 'md:order-2'}`}
        >
          <div className="relative group rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/80 to-purple-500/80 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300" />
            <div className="aspect-video bg-dark-400 flex items-center justify-center">
              <Folder className="w-20 h-20 text-dark-300" />
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div
          className={`md:col-span-5 ${
            index % 2 === 0 ? 'md:-ml-16' : 'md:-mr-16 md:order-1'
          } relative z-10`}
        >
          <p className="text-primary-400 font-mono text-sm mb-2">Featured Project</p>
          <h3 className="text-2xl font-bold text-dark-100 mb-2">{project.title}</h3>
          <p className="text-primary-400 text-sm mb-4">{project.subtitle}</p>

          <div className="card mb-4">
            <p className="text-dark-200 text-sm">{project.description}</p>
          </div>

          <ul className={`flex flex-wrap gap-2 mb-4 text-sm font-mono text-dark-200 ${
            index % 2 === 0 ? '' : 'md:justify-end'
          }`}>
            {project.technologies.slice(0, 5).map((tech) => (
              <li key={tech} className="text-xs">{tech}</li>
            ))}
          </ul>

          <div className={`flex gap-4 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
            <a
              href={project.links.github}
              className="text-dark-200 hover:text-primary-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={project.links.live}
              className="text-dark-200 hover:text-primary-400 transition-colors"
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
      <div className="flex items-center justify-between mb-6">
        <Folder className="w-10 h-10 text-primary-400" />
        <div className="flex gap-3">
          <a
            href={project.links.github}
            className="text-dark-200 hover:text-primary-400 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={project.links.live}
            className="text-dark-200 hover:text-primary-400 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      <h3 className="text-xl font-bold text-dark-100 mb-1 group-hover:text-primary-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-primary-400 text-sm mb-3">{project.subtitle}</p>
      <p className="text-dark-200 text-sm mb-6 flex-1">{project.description}</p>

      <div className="mt-auto">
        <ul className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <li key={tech} className="text-xs font-mono text-dark-200">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
