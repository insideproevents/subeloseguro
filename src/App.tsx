import './App.css';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Beneficios from './sections/Beneficios';
import Equipos from './sections/Equipos';
import Testimonios from './sections/Testimonios';
import Contacto from './sections/Contacto';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Beneficios />
        <Equipos />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
