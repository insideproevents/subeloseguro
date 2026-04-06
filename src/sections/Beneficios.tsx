import { Shield, Clock, Wrench, Truck, Award, Headphones } from 'lucide-react';

const beneficios = [
  {
    icon: Shield,
    title: 'Máxima Seguridad',
    description: 'Equipos certificados con mantenimiento preventivo regular y seguro de responsabilidad civil incluido.',
  },
  {
    icon: Clock,
    title: 'Entrega Rápida',
    description: 'Entrega en 24-48 horas en todo Santiago. Disponibilidad inmediata de nuestro stock.',
  },
  {
    icon: Wrench,
    title: 'Operadores Certificados',
    description: 'Incluimos operadores capacitados y certificados para el manejo seguro de los equipos.',
  },
  {
    icon: Truck,
    title: 'Transporte Incluido',
    description: 'Traslado de equipos a tu obra sin costo adicional dentro de la Región Metropolitana.',
  },
  {
    icon: Award,
    title: 'Equipos de Calidad',
    description: 'Marcas líderes del mercado: Skyjack, JLG, Genie y Haulotte. Equipos nuevos y revisados.',
  },
  {
    icon: Headphones,
    title: 'Soporte 24/7',
    description: 'Atención técnica disponible las 24 horas para cualquier emergencia o consulta.',
  },
];

export default function Beneficios() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-black mb-4">
            ¿Por qué elegir <span className="text-brand-yellow text-shadow" style={{ textShadow: '2px 2px 0 #000' }}>SÚBELO SEGURO</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Somos líderes en arriendo de grúas de carga vertical. 
            Nuestro compromiso es brindarte el mejor servicio con equipos de primera calidad.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-xl p-8 hover:bg-brand-black transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-brand-yellow rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <beneficio.icon className="w-8 h-8 text-brand-black" />
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-3 group-hover:text-white transition-colors">
                {beneficio.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors">
                {beneficio.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Quiero conocer más
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
