import { Star, Quote, Phone } from 'lucide-react';

const testimonios = [
  {
    nombre: 'Carlos Rodríguez',
    empresa: 'Constructora del Pacífico',
    cargo: 'Jefe de Obras',
    imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    calificacion: 5,
    texto: 'Excelente servicio. Las grúas llegaron en perfectas condiciones y el operador fue muy profesional. Cumplieron con los tiempos de entrega y el precio fue muy competitivo. Definitivamente los recomendaré.',
  },
  {
    nombre: 'María González',
    empresa: 'Mantenciones Industriales MG',
    cargo: 'Gerente General',
    imagen: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    calificacion: 5,
    texto: 'Llevamos 3 años trabajando con SÚBELO SEGURO y siempre han sido puntuales y responsables. Su soporte técnico 24/7 nos da mucha tranquilidad en proyectos urgentes.',
  },
  {
    nombre: 'Pedro Hernández',
    empresa: 'Ingeniería PH Ltda.',
    cargo: 'Ingeniero Civil',
    imagen: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    calificacion: 5,
    texto: 'La mejor relación calidad-precio del mercado. Los equipos están impecables y el personal es muy capacitado. Ya hemos rentado con ellos más de 10 veces y siempre todo perfecto.',
  },
];

export default function Testimonios() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonios" className="py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-yellow text-brand-black px-4 py-2 rounded font-bold text-sm mb-4">
            TESTIMONIOS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Lo que dicen nuestros <span className="text-brand-yellow">clientes</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Más de 500 empresas confían en nosotros para sus proyectos de elevación.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonios.map((testimonio, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-8 relative hover:bg-gray-800 transition-colors"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-yellow/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonio.calificacion)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonio.texto}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonio.imagen}
                  alt={testimonio.nombre}
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-yellow"
                />
                <div>
                  <h4 className="text-white font-bold">{testimonio.nombre}</h4>
                  <p className="text-brand-yellow text-sm">{testimonio.empresa}</p>
                  <p className="text-gray-500 text-xs">{testimonio.cargo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-900 rounded-xl p-6 text-center">
            <div className="text-4xl font-black text-brand-yellow mb-2">500+</div>
            <div className="text-gray-400 text-sm">Clientes Satisfechos</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 text-center">
            <div className="text-4xl font-black text-brand-yellow mb-2">10+</div>
            <div className="text-gray-400 text-sm">Años de Experiencia</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 text-center">
            <div className="text-4xl font-black text-brand-yellow mb-2">50+</div>
            <div className="text-gray-400 text-sm">Equipos Disponibles</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 text-center">
            <div className="text-4xl font-black text-brand-yellow mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Soporte Técnico</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Cotiza tu proyecto ahora
          </button>
        </div>
      </div>
    </section>
  );
}
