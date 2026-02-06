import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-6 border-t border-gray-200 dark:border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* <div className="flex items-center gap-2 text-dark-600 dark:text-dark-400 text-sm">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span>by {profile.name}</span>
          </div> */}

          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-dark-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-dark-500 dark:text-dark-400 text-sm">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
