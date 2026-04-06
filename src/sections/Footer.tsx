import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-yellow px-3 py-2 rounded">
                <span className="text-brand-black font-black text-xl tracking-tight">
                  SÚBELO
                </span>
              </div>
              <span className="text-white font-bold text-xl">SEGURO</span>
            </div>
            <p className="text-gray-400 mb-6">
              Líderes en arriendo de grúas de carga vertical. 
              Equipos certificados con operadores profesionales.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-yellow hover:text-brand-black transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-yellow hover:text-brand-black transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-yellow hover:text-brand-black transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-400 hover:text-brand-yellow transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('beneficios')}
                  className="text-gray-400 hover:text-brand-yellow transition-colors"
                >
                  Beneficios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('equipos')}
                  className="text-gray-400 hover:text-brand-yellow transition-colors"
                >
                  Nuestros Equipos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonios')}
                  className="text-gray-400 hover:text-brand-yellow transition-colors"
                >
                  Testimonios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="text-gray-400 hover:text-brand-yellow transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Nuestros Servicios</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Arriendo de grúas tijera</li>
              <li className="text-gray-400">Operadores certificados</li>
              <li className="text-gray-400">Transporte de equipos</li>
              <li className="text-gray-400">Mantenimiento preventivo</li>
              <li className="text-gray-400">Soporte técnico 24/7</li>
              <li className="text-gray-400">Seguro de responsabilidad civil</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contáctanos</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+56912345678"
                  className="flex items-center gap-3 text-gray-400 hover:text-brand-yellow transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +56 9 1234 5678
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/56912345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-brand-yellow transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@subeloseguro.cl"
                  className="flex items-center gap-3 text-gray-400 hover:text-brand-yellow transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  contacto@subeloseguro.cl
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                Av. Industrial 1234, Santiago, Chile
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2024 SÚBELO SEGURO. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/56912345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-brand-green rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>
    </footer>
  );
}
