import { Check, Phone } from 'lucide-react';

// Version 2 - Colores actualizados
const equipos = [
  {
    nombre: 'Tijera Eléctrica 6m',
    modelo: 'SKYJACK SJ3213M',
    altura: '6 metros',
    capacidad: '227 kg',
    imagen: '/grua-6m.jpg',
    caracteristicas: [
      'Altura de trabajo: 6 metros',
      'Capacidad: 227 kg (2 personas)',
      'Ancho: 0.76 metros',
      'Eléctrica 100%',
      'Ideal para espacios reducidos',
    ],
  },
  {
    nombre: 'Tijera Eléctrica 8m',
    modelo: 'SKYJACK SJ3219',
    altura: '8 metros',
    capacidad: '227 kg',
    imagen: '/grua-8m.jpg',
    caracteristicas: [
      'Altura de trabajo: 8 metros',
      'Capacidad: 227 kg (2 personas)',
      'Ancho: 0.81 metros',
      'Eléctrica 100%',
      'Perfecta para mantenimiento',
    ],
  },
  {
    nombre: 'Tijera Eléctrica 12m',
    modelo: 'SKYJACK SJ3226E',
    altura: '12 metros',
    capacidad: '454 kg',
    imagen: '/grua-12m.jpg',
    caracteristicas: [
      'Altura de trabajo: 12 metros',
      'Capacidad: 454 kg (3 personas)',
      'Ancho: 1.17 metros',
      'Eléctrica 100%',
      'Para proyectos grandes',
    ],
  },
];

export default function Equipos() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="equipos" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-yellow text-brand-black px-4 py-2 rounded font-bold text-sm mb-4">
            AMPLIO STOCK DISPONIBLE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-black mb-4">
            Nuestros <span className="text-brand-red">Equipos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contamos con grúas de carga vertical tipo tijera eléctrica 
            disponibles para arriendo diario, semanal y mensual.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {equipos.map((equipo, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative bg-gray-100 p-6 flex items-center justify-center h-80">
                <span className="absolute top-4 right-4 bg-brand-red text-white px-3 py-1 rounded text-sm font-bold">
                  {equipo.altura}
                </span>
                <img
                  src={equipo.imagen}
                  alt={equipo.nombre}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-black mb-1">
                  {equipo.nombre}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{equipo.modelo}</p>

                <ul className="space-y-2 mb-6">
                  {equipo.caracteristicas.map((caracteristica, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-brand-yellow flex-shrink-0 mt-0.5" />
                      {caracteristica}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToContact}
                  className="w-full flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-black px-6 py-3 rounded-lg font-bold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Quiero cotizarla
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-brand-black rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Necesitas una altura diferente?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            También contamos con equipos de 10, 14 y 16 metros de altura. 
            Contáctanos y te asesoramos con la mejor opción para tu proyecto.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-black px-8 py-3 rounded-lg font-bold transition-colors"
          >
            <Phone className="w-5 h-5" />
            Hablar con un ejecutivo
          </button>
        </div>
      </div>
    </section>
  );
}
