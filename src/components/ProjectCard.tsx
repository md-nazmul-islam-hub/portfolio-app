import { motion } from 'framer-motion'
import { ExternalLink, Github, Folder, Globe, Activity } from 'lucide-react'

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

  const projectIcons = {
    1: <Globe className="w-8 h-8" />,
    2: <Activity className="w-8 h-8" />
  }

export default function ProjectCard({ project, index, isInView, featured = false }: ProjectCardProps) {
  if (featured) {
    return (
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        className="group relative bg-white dark:bg-dark-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-dark-800 hover:border-orange-400 dark:hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10"
      >
        {/* Top gradient bar */}
        <div className="h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500" />

        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
              {projectIcons[project.id as keyof typeof projectIcons]}
            </div>
            <div className="flex gap-2">
              <a
                href={project.links.github}
                className="p-2 rounded-lg bg-gray-100 dark:bg-dark-800 text-dark-500 dark:text-dark-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={project.links.live}
                className="p-2 rounded-lg bg-gray-100 dark:bg-dark-800 text-dark-500 dark:text-dark-400 hover:bg-amber-500 hover:text-white transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Title & Subtitle */}
          <div className="mb-4">
            <span className="text-xs font-mono text-orange-500 dark:text-orange-400 mb-1 block">Featured Project</span>
            <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-1 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-amber-600 dark:text-amber-400 text-sm font-medium">{project.subtitle}</p>
          </div>

          {/* Description */}
          <p className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Features */}
          <div className="mb-5">
            <ul className="space-y-2">
              {project.features.slice(0, 3).map((feature, i) => (
                <li key={i} className="text-dark-600 dark:text-dark-300 text-sm flex items-start gap-2">
                  <span className="text-orange-500 mt-0.5">▹</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono rounded-md bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/40 dark:to-amber-950/40 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50"
              >
                {tech}
              </span>
            ))}
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
        <div className="p-2.5 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg shadow-orange-500/20">
          <Folder className="w-6 h-6 text-white" />
        </div>
        <div className="flex gap-2">
          <a
            href={project.links.github}
            className="p-2 text-dark-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={project.links.live}
            className="p-2 text-dark-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      <h3 className="text-lg font-bold text-dark-800 dark:text-dark-100 mb-1 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-amber-500 dark:text-amber-400 text-sm mb-2">{project.subtitle}</p>
      <p className="text-dark-600 dark:text-dark-300 text-sm mb-4 flex-1">{project.description}</p>

      <div className="mt-auto">
        <ul className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <li key={tech} className="text-xs font-mono px-2 py-0.5 bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 rounded">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
