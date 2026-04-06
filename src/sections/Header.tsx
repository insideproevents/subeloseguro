import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-yellow py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-brand-black" />
            <span className="text-brand-black font-semibold text-sm">
              Llámanos: <a href="tel:+56912345678" className="hover:underline">+56 9 1234 5678</a>
            </span>
          </div>
          <div className="hidden sm:block text-brand-black text-sm font-medium">
            Horario: Lunes a Viernes 8:00 - 18:00
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-black shadow-lg'
            : 'bg-gradient-to-b from-black/80 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-brand-yellow px-3 py-2 rounded">
                <span className="text-brand-black font-black text-xl tracking-tight">
                  SÚBELO
                </span>
              </div>
              <span className="text-white font-bold text-xl">SEGURO</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-white hover:text-brand-yellow font-medium transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('beneficios')}
                className="text-white hover:text-brand-yellow font-medium transition-colors"
              >
                Beneficios
              </button>
              <button
                onClick={() => scrollToSection('equipos')}
                className="text-white hover:text-brand-yellow font-medium transition-colors"
              >
                Equipos
              </button>
              <button
                onClick={() => scrollToSection('testimonios')}
                className="text-white hover:text-brand-yellow font-medium transition-colors"
              >
                Testimonios
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="bg-brand-red hover:bg-brand-red-dark text-white px-6 py-2 rounded font-semibold transition-colors"
              >
                Cotiza Ahora
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-brand-black border-t border-gray-800">
            <nav className="flex flex-col p-4 gap-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-white hover:text-brand-yellow font-medium text-left py-2"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('beneficios')}
                className="text-white hover:text-brand-yellow font-medium text-left py-2"
              >
                Beneficios
              </button>
              <button
                onClick={() => scrollToSection('equipos')}
                className="text-white hover:text-brand-yellow font-medium text-left py-2"
              >
                Equipos
              </button>
              <button
                onClick={() => scrollToSection('testimonios')}
                className="text-white hover:text-brand-yellow font-medium text-left py-2"
              >
                Testimonios
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded font-semibold text-center"
              >
                Cotiza Ahora
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
