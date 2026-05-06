import '../styles/components/cards.css'
import '../styles/components/tables.css'

export default function OfertaEducativa() {
  const carreras = [
    {
      id: 1,
      nombre: 'Técnico en Programación',
      descripcion: 'La carrera de Técnico en Programación ofrece las competencias profesionales que permiten al estudiante realizar actividades dirigidas a: analizar, diseñar, desarrollar, instalar y mantener software de aplicación tomando como base los requerimientos del usuario. Todas estas competencias posibilitan al egresado su incorporación al mundo laboral o desarrollar procesos productivos independientes, de acuerdo con sus intereses profesionales y necesidades de su entorno social.',
      semestres: 6,
      areas: ['Desarollo Web (Frontend/Backend)', 'Desarrollo de aplicaciones Moviles', 'Administracion de BD', 'Soporte Tecnico y Sistemas'],
      imagen: '/images/Programacion.png',
    },
    {
      id: 2,
      nombre: 'Técnico en Ventas',
      descripcion: 'La carrera de Técnico en Ventas ofrece las competencias profesionales que permiten al estudiante realizar actividades dirigidas a: posicionar un producto o servicio de una empresa en el mercado, auxiliar en el proceso de administración del área de ventas y en la elaboración del estudio de mercado, así como comercializar un servicio y/o producto aplicando las estrategias de comunicación y asesorar al cliente.',
      semestres: 6,
      areas: ['Marketing y Publicidad', 'Servicio al Cliente y Postventa', 'Administración Comercial', 'Emprendimiento'],
      imagen: '/images/Ventas.png',
    }
  ]

  return (
    <section id="carreras" className="section">
      <div className="container-fluid">
        <h2 className="section-title">Oferta Educativa</h2>
        <p className="section-subtitle">Carreras técnicas reconocidas y actualizadas</p>

        {/* Tarjetas de Carreras */}
        <div className="row g-3 mb-5 justify-content-center" >
          {carreras.map((carrera) => (
            <div key={carrera.id} className="col-md-6 col-lg-3">
              <div className="card-content h-100 d-flex flex-column">
                <h3 className="card-title">{carrera.nombre}</h3>
                {/* IMAGEN AQUÍ */}
                <img 
                  src={carrera.imagen} 
                  alt={carrera.nombre}
                  className="card-image-carrera"
                />
                <p className="card-text small mb-3">{carrera.descripcion}</p>
                <p className="text-muted small mb-3">
                  <strong>Duración:</strong> {carrera.semestres} semestres
                </p>
                <div className="d-flex flex-wrap gap-2 mt-auto">
                  {carrera.areas.map((area) => (
                    <span key={area} className="badge bg-danger">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabla de Carreras */}
        <div className="table-container">
          <h3 className="table-title">Plan de Estudios Detallado</h3>
          <table className="table-custom">
            <thead>
              <tr>
                <th>Carrera</th>
                <th>Semestres</th>
                <th>Especialidades</th>
                <th>Salida Laboral</th>
              </tr>
            </thead>
            <tbody>
              {carreras.map((carrera) => (
                <tr key={carrera.id}>
                  <td className="text-primary">{carrera.nombre}</td>
                  <td>{carrera.semestres}</td>
                  <td>{carrera.areas.join(', ')}</td>
                  <td className="text-muted">Industria, Empresas, Autoempleo</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Video Promocional */}
        <div className="ratio ratio-16x9" style={{ 
          borderRadius: '0.75rem', 
          overflow: 'hidden',
          backgroundColor: '#000'
        }}>
          <iframe
            src="./public/videos/Video_Promocional.mp4"
            title="Presentación del Cecytem"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  )
}