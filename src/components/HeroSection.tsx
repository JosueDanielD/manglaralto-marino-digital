import { ArrowDown, Leaf, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
//import heroImage from "@/assets/hero-manglaralto.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img 
          src="/images/fondo.jpg"
          alt="Costa de Manglaralto - Desarrollo sostenible marino-costero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>

      {/* Contenido */}
      <div className="relative container mx-auto px-4 text-center text-white animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transformación Digital e Innovación
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-4 text-secondary">
            para el Desarrollo Sostenible Marino-Costero
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Parroquia Manglaralto 2025
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/20 rounded-lg backdrop-blur-sm hover-wave">
              <Users className="w-10 h-10 mb-3 text-secondary" />
              <h3 className="font-semibold text-lg mb-2">Comunidad</h3>
              <p className="text-sm text-white/90">Fortalecimiento comunitario y participación activa</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/20 rounded-lg backdrop-blur-sm hover-wave">
              <Leaf className="w-10 h-10 mb-3 text-accent" />
              <h3 className="font-semibold text-lg mb-2">Sostenibilidad</h3>
              <p className="text-sm text-white/90">Conservación del ecosistema marino-costero</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/20 rounded-lg backdrop-blur-sm hover-wave">
              <BookOpen className="w-10 h-10 mb-3 text-secondary-vibrant" />
              <h3 className="font-semibold text-lg mb-2">Capacitación Excel</h3>
              <p className="text-sm text-white/90">Aprende Excel para mejorar tu actividad pesquera</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-secondary-vibrant hover:bg-secondary text-primary font-semibold px-8 py-3 shadow-wave hover-wave"
              onClick={() => document.getElementById('recursos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explorar Recursos
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 shadow-wave hover-wave"
              onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Galería
            </Button>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-gentle-float">
        <ArrowDown className="w-6 h-6 text-white/80" />
      </div>
    </section>
  );
};

export default HeroSection;