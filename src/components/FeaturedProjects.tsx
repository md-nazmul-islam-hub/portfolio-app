import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/profile'

export default function FeaturedProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const featuredProjects = projects.slice(0, 2)

  return (
    <section className="py-20 md:py-32 bg-dark-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <h2 className="section-heading">
                <span className="text-primary-400 font-mono text-xl mr-2">03.</span>
                Featured Projects
              </h2>
              <div className="flex-1 h-px bg-dark-300 max-w-xs hidden sm:block" />
            </div>
            <Link
              to="/projects"
              className="hidden sm:flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-24">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isInView={isInView}
                featured
              />
            ))}
          </div>

          <div className="mt-12 text-center sm:hidden">
            <Link to="/projects" className="btn-outline">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
