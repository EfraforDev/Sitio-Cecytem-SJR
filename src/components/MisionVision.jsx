import '../styles/components/cards.css'

export default function MisionVision() {
  const items = [
    {
      icon: '🎯',
      title: 'Misión',
      text: 'Impartir educación media superior de calidad, en su modalidad de bachillerato tecnológico bivalente, con el objeto de que los egresados cuenten con educación tecnológica terminal que les permita incorporarse a una actividad productiva, o bien, continuar sus estudios de nivel superior.'
    },
    {
      icon: '🌟',
      title: 'Visión',
      text: 'Ser la mejor opción en educación media superior en su modalidad de bachillerato tecnológico bivalente en el Sistema Nacional de los CECyTE’s, así como en el Estado de México.'
    },
    {
      icon: '💎',
      title: 'Valores',
      items: ['Excelencia', 'Integridad', 'Responsabilidad', 'Inclusión']
    }
  ]

  return (
    <section id="mision" className="section bg-light">
      <div className="container-fluid">
        <h2 className="section-title">Misión y Visión</h2>

        <div className="row g-4 mb-5">
          {items.map((item, idx) => (
            <div key={idx} className="col-md-4">
              <div className="card-content h-100 ">
                <div className="card-icon">{item.icon}</div>
                <h3 className="card-title">{item.title}</h3>
                {item.text ? (
                  <p className="card-text">{item.text}</p>
                ) : (
                  <ul className="card-list">
                    {item.items.map((val, i) => (
                      <li key={i}>{val}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Sobre Nosotros */}
        <div className="card-content">
          <h3 className="card-title mb-4">Conoce nuestro Plantel</h3>
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <p className="card-text mb-3">
                El Cecytem Plantel San José del Rincón es una institución educativa comprometida con la excelencia académica y la formación integral de jóvenes talentos. Con más de 28 años de experiencia en educación técnica superior, hemos formado miles de profesionales que hoy se desempeñan en diversos sectores.
              </p>
              <p className="card-text">
                Nuestras instalaciones cuentan con laboratorios modernos, docentes especializados y programas educativos actualizados conforme a las demandas del mercado laboral.
              </p>
            </div>
            <div className="col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.588492253867!2d-100.1345328245552!3d19.64488308168034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d29323f7ef9b31%3A0x358b17bb046eebb0!2sCecytem%20San%20Jose%20Del%20Rincon!5e0!3m2!1ses-419!2smx!4v1777445570647!5m2!1ses-419!2smx"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '0.5rem' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}