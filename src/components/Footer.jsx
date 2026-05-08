import '../styles/components/footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Sobre Nosotros */}
          <div className="footer-column">
            <h3>Cecytem SJR</h3>
            <p>
              Institución educativa comprometida con la excelencia en educación técnica superior.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div className="footer-column">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><a href="#inicio" className="footer-link">Inicio</a></li>
              <li><a href="#mision" className="footer-link">Misión y Visión</a></li>
              <li><a href="#carreras" className="footer-link">Carreras</a></li>
              <li><a href="#contacto" className="footer-link">Contacto</a></li>
            </ul>
          </div>

          {/* Contacto Rápido */}
          <div className="footer-column">
            <h3>Contacto</h3>
            <ul>
              <li>📍 Camino a San Joaquín del Monte, Dom. Conocido, San José del Rincón, Estado de México, C.P. 50664</li>
              <li>📞 <a href="tel:+525555555555" className="footer-link"> +52 (712) 488 47 06</a></li>
              <li>✉️ <a href="mailto:info@cecytem-sjr.edu.mx" className="footer-link">plantel.sanjosedelr@cecytem.mx</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Cecytem Plantel San José del Rincón. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
