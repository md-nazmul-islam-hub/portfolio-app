import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import FeaturedProjects from '../components/FeaturedProjects'
import Education from '../components/Education'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <Education />
      <Contact />
    </main>
  )
}
