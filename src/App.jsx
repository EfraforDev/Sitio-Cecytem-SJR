import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MisionVision from './components/MisionVision'
import OfertaEducativa from './components/OfertaEducativa'
import Alianzas from './components/Alianzas'
import Galeria from './components/Galeria'
import Testimonios from './components/Testimonios'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import LegalNotice from './components/LegalNotice'

export default function App() {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <Navbar />
      <Hero />
      <MisionVision />
      <OfertaEducativa />
      <Alianzas />
      <Galeria />
      <Testimonios />
      <Contacto />
      <LegalNotice />
      <Footer />
    </div>
  )
}