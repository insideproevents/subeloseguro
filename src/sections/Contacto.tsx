import { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    email: '',
    altura: '',
    duracion: '',
    mensaje: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({
      nombre: '',
      empresa: '',
      telefono: '',
      email: '',
      altura: '',
      duracion: '',
      mensaje: '',
    });
  };

  return (
    <section id="contacto" className="py-20 bg-brand-yellow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <div>
            <span className="inline-block bg-brand-black text-white px-4 py-2 rounded font-bold text-sm mb-4">
              COTIZA AHORA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-black mb-6">
              ¿Listo para tu <span className="text-brand-red">proyecto</span>?
            </h2>
            <p className="text-lg text-brand-black/80 mb-8">
              Completa el formulario y te enviaremos una cotización personalizada 
              en menos de 1 hora. También puedes contactarnos directamente.
            </p>

            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              <a
                href="tel:+56912345678"
                className="flex items-center gap-4 bg-white rounded-xl p-4 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Llámanos</p>
                  <p className="text-lg font-bold text-brand-black">+56 9 1234 5678</p>
                </div>
              </a>

              <a
                href="https://wa.me/56912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white rounded-xl p-4 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-brand-yellow rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">WhatsApp</p>
                  <p className="text-lg font-bold text-brand-black">+56 9 1234 5678</p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-white rounded-xl p-4">
                <div className="w-12 h-12 bg-brand-black rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg font-bold text-brand-black">contacto@subeloseguro.cl</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white rounded-xl p-4">
                <div className="w-12 h-12 bg-brand-black rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Dirección</p>
                  <p className="text-lg font-bold text-brand-black">Av. Industrial 1234, Santiago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-brand-black mb-6">
              Solicita tu cotización
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all"
                    placeholder="+56 9 1234 5678"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Altura requerida
                  </label>
                  <select
                    name="altura"
                    value={formData.altura}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Selecciona</option>
                    <option value="6m">6 metros</option>
                    <option value="8m">8 metros</option>
                    <option value="10m">10 metros</option>
                    <option value="12m">12 metros</option>
                    <option value="14m">14 metros</option>
                    <option value="16m">16 metros</option>
                    <option value="otra">Otra (especificar)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Duración del arriendo
                  </label>
                  <select
                    name="duracion"
                    value={formData.duracion}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Selecciona</option>
                    <option value="diario">Diario</option>
                    <option value="semanal">Semanal</option>
                    <option value="mensual">Mensual</option>
                    <option value="proyecto">Todo el proyecto</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje adicional
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Cuéntanos más sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-[1.02]"
              >
                <Send className="w-5 h-5" />
                Enviar cotización
              </button>

              <p className="text-xs text-gray-500 text-center">
                Te responderemos en menos de 1 hora hábil
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-brand-yellow">
              <CheckCircle className="w-6 h-6" />
              ¡Cotización enviada!
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Gracias por contactarnos. Hemos recibido tu solicitud y te enviaremos 
              una cotización personalizada en menos de 1 hora hábil.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-brand-yellow hover:bg-brand-yellow-dark text-brand-black px-6 py-2 rounded-lg font-bold transition-colors"
            >
              Entendido
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
