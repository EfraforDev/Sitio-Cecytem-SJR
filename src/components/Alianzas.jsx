import '../styles/components/cards.css'

export default function Alianzas() {
  const alianzas = [
    { id: 1, nombre: 'Instituciones Educativas',icono:'📚', sector: 'Educativo' },
    { id: 2, nombre: 'Semartec', icono:'👩🏻‍💼', sector: 'Asociación Civil' },
    { id: 3, nombre: 'Unidad de Servicios Publicos (Ayuntamiento)',icono:'🏦', sector: 'Gobernamental' },
    { id: 4, nombre: 'Centro Institucional Universitario',icono:'🏛️', sector: 'Educativo' },
    { id: 5, nombre: 'Instituciones de Salud',icono:'🏥', sector: 'Salud' },
    { id: 6, nombre: 'Ucofort',icono:'🪵', sector: 'Forestal Madedero' },
    { id: 7, nombre: 'Tecnologico de Estudios Superiores San Felipe Del Progreso',icono:'🏛️', sector: 'Educativo' },
    { id: 8, nombre: 'Maquinas agricolas',icono:'⚙️', sector: 'Maquinaria Agricola' },
  ]

  return (
    <section className="section bg-light">
      <div className="container-fluid">
        <h2 className="section-title">Nuestras Alianzas Estratégicas</h2>
        <p className="section-subtitle">Empresas e Instituciones donde nuestros alumnos realizan servicio social y prácticas profesionales</p>

        <div className="row g-4 mb-5">
          {alianzas.map((alianza) => (
            <div key={alianza.id} className="col-md-6 col-lg-4">
              <div className="alliance-card h-100 d-flex flex-column">
                <div className="alliance-icon">{alianza.icono}</div>
                <h3 className="card-title mb-2">{alianza.nombre}</h3>
                <p className="text-primary small mb-0">{alianza.sector}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="card-content">
          <h3 className="card-title mb-4">Oportunidades para Egresados</h3>
          <div className="row">
            <div className="col-md-6">
              <ul className="card-list">
                <li>Servicio Social en empresas del sector</li>
                <li>Prácticas profesionales en Educación EDUAL </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="card-list">
                <li>Contratación directa tras egreso</li>
                <li>Capacitación continua y certificaciones</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}