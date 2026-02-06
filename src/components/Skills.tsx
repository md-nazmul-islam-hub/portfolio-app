import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Server, Layout, Database, Cloud, GitBranch, Plug } from 'lucide-react'
import { skills } from '../data/profile'

const skillCategories = [
  { name: 'Backend', icon: Server, skills: skills.backend, gradient: 'from-orange-500 to-amber-500' },
  { name: 'Frontend', icon: Layout, skills: skills.frontend, gradient: 'from-amber-500 to-yellow-500' },
  { name: 'Databases', icon: Database, skills: skills.databases, gradient: 'from-yellow-500 to-orange-500' },
  { name: 'Cloud (AWS)', icon: Cloud, skills: skills.cloud, gradient: 'from-orange-600 to-amber-500' },
  { name: 'DevOps', icon: GitBranch, skills: skills.devops, gradient: 'from-amber-600 to-yellow-500' },
  { name: 'Integrations', icon: Plug, skills: skills.integrations, gradient: 'from-orange-500 to-yellow-500' },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-12 md:py-16 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="section-heading">
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent font-mono text-lg mr-2">02.</span>
              Skills & Technologies
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-orange-500/50 to-transparent max-w-xs" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-100">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
