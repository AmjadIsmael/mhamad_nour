import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import SkillsGrid from './components/SkillsGrid'
import Work from './components/Work'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Spotlight from './components/Spotlight'
import Contact from './components/Contact'
import { useScrollEffects } from './hooks/useScrollEffects'

function App() {
  useScrollEffects()

  return (
    <div className="font-body-md overflow-x-hidden">
      <Navbar />
      <Hero />
      <Expertise />
      <SkillsGrid />
      <Work />
      <Services />
      <Testimonials />
      <Spotlight />
      <Contact />
    </div>
  )
}

export default App
