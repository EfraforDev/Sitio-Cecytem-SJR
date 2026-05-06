import '../styles/components/legal.css'

export default function LegalNotice() {
  return (
    <section id="legal" className="section bg-light">
      <div className="legal-section">
        <h2 className="legal-title text-center">Avisos y Políticas Legales</h2>

        {/* Aviso de Privacidad */}
        <div className="legal-card">
          <h3>Aviso de Privacidad</h3>
          <div className="legal-content">
            <p>
              <strong>Responsable de los datos:</strong> Cecytem Plantel San José del Rincón se compromete a proteger tu privacidad y la seguridad de tus datos personales.
            </p>
            <p>
              <strong>Datos que recopilamos:</strong> Nombre, correo electrónico, teléfono, y información relacionada con tu solicitud de inscripción o consulta.
            </p>
            <p>
              <strong>Uso de datos:</strong> Utilizamos tus datos para procesar solicitudes de admisión, enviar información académica y comunicaciones institucionales.
            </p>
            <p>
              <strong>Protección:</strong> Implementamos medidas de seguridad técnicas y administrativas para proteger tu información contra acceso no autorizado.
            </p>
          </div>
        </div>

        {/* Términos de Uso */}
        <div className="legal-card">
          <h3>Términos de Uso</h3>
          <div className="legal-content">
            <p>
              <strong>Licencia de uso:</strong> El contenido de este sitio web está protegido por derechos de autor. Está permitido descargar y imprimir contenido para uso personal y no comercial.
            </p>
            <p>
              <strong>Restricciones:</strong> No está permitido reproducir, distribuir, modificar o transmitir el contenido sin autorización previa.
            </p>
            <p>
              <strong>Enlaces externos:</strong> Este sitio contiene enlaces a terceros. No somos responsables del contenido de sitios externos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}