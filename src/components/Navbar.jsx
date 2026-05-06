import { useState } from 'react'
import '../styles/components/navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Misión y Visión', href: '#mision' },
    { label: 'Carreras', href: '#carreras' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <nav className="navbar-custom">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#" className="navbar-brand">
          <img 
            src="/src/assets/images/logo_navbar.png" 
            alt="Logo Cecytem" 
          />
          <span>Cecytem SJR</span>
        </a>

        {/* Menu - Se oculta en móvil automáticamente */}
        <ul className={`navbar-nav ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a 
                href={link.href} 
                className="nav-link" 
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button - Se muestra solo en móvil */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}