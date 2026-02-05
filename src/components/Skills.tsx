import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Server, Layout, Database, Cloud, GitBranch, Plug } from 'lucide-react'
import { skills } from '../data/profile'

const skillCategories = [
  { name: 'Backend', icon: Server, skills: skills.backend, color: 'from-blue-500 to-cyan-500' },
  { name: 'Frontend', icon: Layout, skills: skills.frontend, color: 'from-purple-500 to-pink-500' },
  { name: 'Databases', icon: Database, skills: skills.databases, color: 'from-green-500 to-emerald-500' },
  { name: 'Cloud (AWS)', icon: Cloud, skills: skills.cloud, color: 'from-orange-500 to-yellow-500' },
  { name: 'DevOps', icon: GitBranch, skills: skills.devops, color: 'from-red-500 to-rose-500' },
  { name: 'Integrations', icon: Plug, skills: skills.integrations, color: 'from-indigo-500 to-violet-500' },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 md:py-32 bg-dark-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="section-heading">
              <span className="text-primary-400 font-mono text-xl mr-2">02.</span>
              Skills & Technologies
            </h2>
            <div className="flex-1 h-px bg-dark-300 max-w-xs" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-dark-100">{category.name}</h3>
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
