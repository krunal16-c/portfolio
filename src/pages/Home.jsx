import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Research from '../components/Research'
import Projects from '../components/Projects'
import Ventures from '../components/Ventures'
import BlogPreview from '../components/BlogPreview'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Research />
      <Projects />
      <Ventures />
      <BlogPreview />
      <Contact />
      <Footer />
    </main>
  )
}
