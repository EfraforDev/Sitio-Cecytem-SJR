import { useState } from 'react'
import '../styles/components/gallery.css'


export default function Galeria() {
  const [filtro, setFiltro] = useState('todos')

  const fotos = [
    { id: 1, titulo: 'Laboratorio de Química', categoria: 'laboratorios', src: '/src/assets/images/Laboratorio_quimica.jpeg'},
    { id: 2, titulo: 'Laboratorio de Química', categoria: 'laboratorios', src: '/src/assets/images/Laboratorio_quimica2.jpeg'},
    { id: 3, titulo: 'Sala de Cómputo 1', categoria: 'laboratorios', src: '/src/assets/images/Sala_1.jpeg' },
    { id: 4, titulo: 'Sala de Cómputo 2', categoria: 'laboratorios', src: '/src/assets/images/Sala_2.jpeg' },
    { id: 5, titulo: 'Evento de dia de muertos', categoria: 'eventos', src: '/src/assets/images/Dia_de_muertos.jpeg' },
    { id: 6, titulo: 'Campaña Vacunación', categoria: 'eventos', src: '/src/assets/images/Campaña_Vacunacion.jpeg' },
    { id: 7, titulo: 'Semana del Cerebro', categoria: 'eventos', src: '/src/assets/images/Semana_del_cerebro.jpeg' },
    { id: 8, titulo: 'Plantel Vista Aérea', categoria: 'instalaciones', src: '/src/assets/images/Plantel_area.jpeg' },
    { id: 9, titulo: 'Atardecer en el Plantel', categoria: 'instalaciones', src: '/src/assets/images/Plantel_tarde.jpeg' },
    { id: 10, titulo: 'Anochecer en el Plantel', categoria: 'instalaciones', src: '/src/assets/images/Plantel_noche.jpeg' },
  ]

  const filtrado = filtro === 'todos' ? fotos : fotos.filter(f => f.categoria === filtro)

  return (
    <section id="galeria" className="section">
      <div className="container-fluid">
        <h2 className="section-title">Galería</h2>
        <p className="section-subtitle">Conoce nuestras instalaciones y eventos</p>

        {/* Filtros */}
        <div className="gallery-filters">
          {['todos', 'laboratorios', 'eventos', 'instalaciones'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`filter-btn ${filtro === cat ? 'active' : ''}`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid de Fotos */}
        <div className="gallery-grid">
          {filtrado.map((foto) => (
            <div key={foto.id} className="gallery-item">
              <div className="gallery-image">
                <img 
                src={foto.src}
                />
              </div>
              <div className="gallery-info">
                <h3 className="gallery-title">{foto.titulo}</h3>
                <p className="gallery-category">{foto.categoria}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}