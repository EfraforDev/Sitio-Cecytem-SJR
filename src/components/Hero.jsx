import '../styles/components/hero.css'

export default function Hero() {
  return (
    <section id="inicio" className="hero gradient-accent">
      <div className="hero-content">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="hero-title">
              Cecytem Plantel<br />
              <span className="hero-title-accent">San José del Rincón</span>
            </h1>
            <p className="hero-text">
              Formación técnica de excelencia para jóvenes talentosos. Preparamos a los líderes del mañana con educación innovadora y práctica.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-light btn-lg"
                onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
              >
                Solicita tu admisión
              </button>
              
              <a href="#carreras" className="btn btn-outline-light btn-lg">
                Conoce más
              </a>
            </div>
          </div>

          <div className="col-lg-6 hero-image">
            <div className="hero-image-box">
              <div>
                <div className="hero-image-icon"> 
                  <img 
                  src="/src/assets/images/Cecytem_logo.png" 
                  alt="Logo Cecytem" 
                  /> 
                </div>
                <p className="hero-image-text">Educación Técnica<br />de Calidad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}