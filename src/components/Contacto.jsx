import { useState } from 'react'
import '../styles/components/forms.css'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    carrera: '',
    mensaje: '',
  })

  const [enviado, setEnviado] = useState(false)
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setCargando(true)
    setError(null)

    try {
      const response = await fetch('https://formspree.io/f/xzdorlvd', {  // ← TU FORM ID
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setEnviado(true)
        setFormData({ nombre: '', email: '', telefono: '', carrera: '', mensaje: '' })
        setTimeout(() => setEnviado(false), 5000)
      } else {
        setError('Hubo un error al enviar el formulario. Intenta de nuevo.')
      }
    } catch (err) {
      setError('Error de conexión. Intenta de nuevo.')
      console.error(err)
    } finally {
      setCargando(false)
    }
  }
  return (
    <section id="contacto" className="section">
      <div className="container-fluid">
        <h2 className="section-title">Contacto e Inscripción</h2>
        <p className="section-subtitle">¿Tienes preguntas? Comunícate con nosotros</p>

        <div className="row g-4">
          {/* Información de Contacto */}
          <div className="col-lg-6">
            <div className="space-y-4">
              {/* Ubicación */}
              <div className="d-flex gap-3 mb-4">
                <div style={{ fontSize: '1.875rem' }}>📍</div>
                <div>
                  <h5 className="fw-bold text-secondary-dark mb-2">Ubicación</h5>
                  <p className="text-muted">
                    San José del Rincón, Estado de México, C.P. 50664<br />
                    Plantel: Camino a San Joaquín del Monte, Dom. Conocido.
                  </p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="d-flex gap-3 mb-4">
                <div style={{ fontSize: '1.875rem' }}>📞</div>
                <div>
                  <h5 className="fw-bold text-secondary-dark mb-2">Teléfono</h5>
                  <a href="tel:+525555555555" className="text-danger text-decoration-none">
                    +52 (712) 488 47 06
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="d-flex gap-3 mb-4">
                <div style={{ fontSize: '1.875rem' }}>✉️</div>
                <div>
                  <h5 className="fw-bold text-secondary-dark mb-2">Email</h5>
                  <a href="mailto:info@cecytem-sjr.edu.mx" className="text-danger text-decoration-none">
                    plantel.sanjosedelr@cecytem.mx
                  </a>
                </div>
              </div>

              {/* Horario */}
              <div className="d-flex gap-3 mb-4">
                <div style={{ fontSize: '1.875rem' }}>🕐</div>
                <div>
                  <h5 className="fw-bold text-secondary-dark mb-2">Horario de Atención</h5>
                  <p className="text-muted mb-0">
                    Lunes a Viernes: 8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              {/* Redes Sociales */}
              <div className="mt-5">
                <h5 className="fw-bold text-secondary-dark mb-3">Síguenos</h5>
                <div className="d-flex gap-3">
                  <a href="https://www.facebook.com/share/18YsyNGZf1/" target="_blank" rel="noopener noreferrer" 
                    className="btn btn-danger btn-sm rounded-circle d-flex align-items-center justify-content-center" 
                    style={{ width: '2.5rem', height: '2.5rem', fontSize: '1.25rem' }}>
                    f
                  </a>
                  <a href="https://www.youtube.com/@CECYTEMWEB" target="_blank" rel="noopener noreferrer" 
                    className="btn btn-danger btn-sm rounded-circle d-flex align-items-center justify-content-center" 
                    style={{ width: '2.5rem', height: '2.5rem', fontSize: '1.25rem' }}>
                    ▶️
                  </a>
                  <a href="https://x.com/somoscecytem" target="_blank" rel="noopener noreferrer" 
                    className="btn btn-danger btn-sm rounded-circle d-flex align-items-center justify-content-center" 
                    style={{ width: '2.5rem', height: '2.5rem', fontSize: '1.25rem' }}>
                    𝕏
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de Inscripción */}
          <div className="col-lg-6">
            <form onSubmit={handleSubmit} className="form-container">
              <h3 className="form-title">Formulario de Inscripción</h3>

              {enviado && (
                <div className="alert-success">✅ Tu solicitud ha sido recibida. Nos contactaremos pronto.</div>
              )}

              {error && (
                <div className="alert-danger">❌ {error}</div>
              )}

              <div className="form-group">
                <label className="form-label">Nombre Completo *</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="form-control"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-control"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Teléfono *</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="form-control"
                  placeholder="+52 55 5555 5555"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Carrera de Interés *</label>
                <select
                  name="carrera"
                  value={formData.carrera}
                  onChange={handleChange}
                  required
                  className="form-control"
                >
                  <option value="">Selecciona una carrera</option>
                  <option value="Programación">Técnico en Programación</option>
                  <option value="Ventas">Técnico en Ventas</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Mensaje</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Cuéntanos sobre ti..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-danger w-100 fw-bold"
                disabled={cargando}
              >
                {cargando ? 'Enviando...' : 'Enviar Solicitud'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

