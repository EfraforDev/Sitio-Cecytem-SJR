import '../styles/components/cards.css'

export default function Testimonios() {
  const testimonios = [
    {
      id: 1,
      nombre: 'Diana Laura Diaz',
      carrera: 'Técnico en Programación',
      empresa: 'Fletes Maquinas y Movimientos. S.A. de C.V.',
      testimonio: 'El Cecytem me dio las herramientas necesarias para desarrollarme como profesional ya que desarrolle habilidades lógicas y analiticas que hoy aplico en mi profesion. Hoy me desempeño como Ingeniera Civil en una empresa Méxicana.',
      avatar: '/images/Avatar_1.png',
    },
    {
      id: 2,
      nombre: 'Fanny Cruz',
      carrera: 'Técnico en Ventas',
      empresa: 'Cubik Arquitectos',
      testimonio: 'La educación práctica que recibí fue fundamental para mi éxito laboral ya que puedo ofrecer soluciones que se ajusten a las necesidades del cliente. Pasé de ser estudiante a ser una Arquitecta Profesional',
      avatar: '/images/Avatar_2.png',
    },
    {
      id: 3,
      nombre: 'Maria del Rosario Cruz',
      carrera: 'Técnico en Programación',
      empresa: 'Punto Idioma',
      testimonio: 'Haber sido técnica en programación me facilito el aprender el uso de herramientas tecnologícas, lo cual ahora en mi vida profesional como Maestra de Ingles y Frances me permite poder realizar clases mas dinamicas',
      avatar: '/images/Avatar_3.png',
    },
  ]

  return (
    <section className="section bg-light">
      <div className="container-fluid">
        <h2 className="section-title">Historias de Éxito</h2>
        <p className="section-subtitle">Conoce las experiencias de nuestros egresados</p>

        <div className="row g-4">
          {testimonios.map((test) => (
            <div key={test.id} className="col-md-6 col-lg-4">
              <div className="testimonial-card h-100 d-flex flex-column">
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    <img 
                    src={test.avatar}
                    />
                  </div>
                  <div className="testimonial-info">
                    <h3>{test.nombre}</h3>
                    <p>{test.carrera}</p>
                  </div>
                </div>

                <p className="testimonial-text">"{test.testimonio}"</p>

                <div className="testimonial-footer mt-auto">
                  <p>
                    <span className="fw-semibold">Actualmente:</span> {test.empresa}
                  </p>
                </div>

                <div className="testimonial-rating">
                  {'⭐⭐⭐⭐⭐'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}