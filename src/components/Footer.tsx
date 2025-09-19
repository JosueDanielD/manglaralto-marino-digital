import { Waves, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-ocean text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-white/20 rounded-lg">
                <Waves className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Manglaralto 2025</h3>
                <p className="text-sm text-white/90">Transformación Digital Sostenible</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Promoviendo el desarrollo sostenible marino-costero a través de la innovación 
              y la participación comunitaria en la Parroquia Manglaralto.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <nav className="space-y-2">
              {[
                { href: "#inicio", label: "Inicio" },
                { href: "#recursos", label: "Recursos" },
                { href: "#galeria", label: "Galería" },
                { href: "#contacto", label: "Contacto" }
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white/80 hover:text-white transition-smooth text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Información del proyecto */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-semibold text-lg mb-4">Sobre el Proyecto</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-white/90 font-medium">Ubicación</p>
                <p className="text-white/70">Parroquia Manglaralto, Santa Elena, Ecuador</p>
              </div>
              <div>
                <p className="text-white/90 font-medium">Duración</p>
                <p className="text-white/70">2024 - 2025</p>
              </div>
              <div>
                <p className="text-white/90 font-medium">Enfoque</p>
                <p className="text-white/70">Desarrollo Sostenible Marino-Costero</p>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-white/70">
            <p>
              © 2024 Proyecto Manglaralto 2025. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-1 mt-2 sm:mt-0">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>para la comunidad de Manglaralto</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;