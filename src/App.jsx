import { Disclaimer } from './components/Disclaimer'
import { Hero } from './components/Hero'
import { Packages } from './components/Packages'
import { Destinations } from './components/Destinations'
import { WhyFinestra } from './components/WhyFinestra'
import { Reviews } from './components/Reviews'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div id="top">
      <Disclaimer />
      <Hero />
      <Packages />
      <Destinations />
      <WhyFinestra />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}
