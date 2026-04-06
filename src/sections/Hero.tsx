import { Phone, MessageCircle, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-grua.jpg"
          alt="Grúa de carga vertical"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            ¡Arriendo de{' '}
            <span className="text-brand-yellow">Grúas de Carga Vertical!</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 font-semibold mb-4">
            Equipos desde 6 hasta 16 metros de altura
          </p>
          <p className="text-lg text-white/80 mb-8">
            Soluciones seguras y eficientes para tus proyectos de construcción, 
            mantenimiento y logística. Entrega inmediata en todo Santiago.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="tel:+56912345678"
              className="flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded font-bold text-lg transition-all transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Llámanos Ahora
            </a>
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-black px-8 py-4 rounded font-bold text-lg transition-all transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-yellow text-brand-black px-6 py-3 rounded font-bold">
            <FileText className="w-5 h-5" />
            <span>Cotización Gratis en menos de 1 minuto</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-brand-black/90 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-white text-center text-sm sm:text-base">
            <span className="text-brand-yellow font-semibold">¡Operadores certificados incluidos!</span>{' '}
            Todos nuestros equipos cuentan con mantenimiento preventivo y seguro de responsabilidad civil.
          </p>
        </div>
      </div>
    </section>
  );
}
