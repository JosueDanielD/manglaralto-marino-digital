import { useState } from "react";
import { Camera, X, ChevronLeft, ChevronRight, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const GallerySection = () => {
  const [selectedGallery, setSelectedGallery] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cada evento tiene múltiples fotos
  const galleryCollections = [
    {
      id: 1,
      title: "Taller Básico de Excel",
      date: "15 Marzo 2024",
      participants: 25,
      coverImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      images: [
        {
          src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
          alt: "Presentación inicial del taller de Excel"
        },
        {
          src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
          alt: "Participantes aprendiendo funciones básicas"
        },
        {
          src: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop",
          alt: "Práctica con hojas de cálculo"
        },
        {
          src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
          alt: "Resolución de dudas individuales"
        }
      ]
    },
    {
      id: 2,
      title: "Fórmulas y Funciones de Excel",
      date: "20 Marzo 2024",
      participants: 18,
      coverImage: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
      images: [
        {
          src: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
          alt: "Explicación de fórmulas avanzadas"
        },
        {
          src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
          alt: "Ejercicios prácticos con funciones"
        },
        {
          src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
          alt: "Trabajo en equipo resolviendo casos"
        }
      ]
    },
    {
      id: 3,
      title: "Creación de Gráficos",
      date: "28 Marzo 2024",
      participants: 22,
      coverImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      images: [
        {
          src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
          alt: "Diseño de gráficos estadísticos"
        },
        {
          src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
          alt: "Personalización de gráficos"
        },
        {
          src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
          alt: "Presentación de resultados visuales"
        },
        {
          src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
          alt: "Análisis de datos con gráficos"
        },
        {
          src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
          alt: "Trabajo colaborativo en gráficos"
        }
      ]
    },
    {
      id: 4,
      title: "Tablas Dinámicas en Excel",
      date: "5 Abril 2024",
      participants: 28,
      coverImage: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop",
      images: [
        {
          src: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop",
          alt: "Introducción a tablas dinámicas"
        },
        {
          src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
          alt: "Configuración de campos dinámicos"
        },
        {
          src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
          alt: "Análisis de datos pesqueros"
        }
      ]
    },
    {
      id: 5,
      title: "Registro Digital de Capturas",
      date: "12 Abril 2024",
      participants: 30,
      coverImage: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=400&h=300&fit=crop",
      images: [
        {
          src: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&h=600&fit=crop",
          alt: "Creación de plantillas de registro"
        },
        {
          src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
          alt: "Digitalización de datos de pesca"
        },
        {
          src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
          alt: "Capacitación con pescadores locales"
        },
        {
          src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
          alt: "Uso de tablets para registro"
        }
      ]
    },
    {
      id: 6,
      title: "Control de Gastos Pesqueros",
      date: "18 Abril 2024",
      participants: 24,
      coverImage: "https://images.unsplash.com/photo-1570497492707-9f54797f24d3?w=400&h=300&fit=crop",
      images: [
        {
          src: "https://images.unsplash.com/photo-1570497492707-9f54797f24d3?w=800&h=600&fit=crop",
          alt: "Plantillas para control de gastos"
        },
        {
          src: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop",
          alt: "Análisis financiero de actividades"
        },
        {
          src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
          alt: "Planificación económica comunitaria"
        }
      ]
    },
  ];

  const openGallery = (galleryIndex: number) => {
    setSelectedGallery(galleryIndex);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedGallery !== null && galleryCollections[selectedGallery]) {
      setCurrentImageIndex((prev) => 
        prev < galleryCollections[selectedGallery].images.length - 1 ? prev + 1 : 0
      );
    }
  };

  const prevImage = () => {
    if (selectedGallery !== null && galleryCollections[selectedGallery]) {
      setCurrentImageIndex((prev) => 
        prev > 0 ? prev - 1 : galleryCollections[selectedGallery].images.length - 1
      );
    }
  };

  const currentCollection = selectedGallery !== null ? galleryCollections[selectedGallery] : null;
  const currentImage = currentCollection ? currentCollection.images[currentImageIndex] : null;

  return (
    <section id="galeria" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Galería Fotográfica
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Momentos destacados de nuestras capacitaciones de Excel y talleres comunitarios 
            en Manglaralto
          </p>
        </div>

        {/* Cuadrícula de colecciones de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryCollections.map((collection, index) => (
            <Card 
              key={collection.id} 
              className="group overflow-hidden shadow-coastal hover-wave cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openGallery(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={collection.coverImage}
                  alt={`Portada de ${collection.title}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Camera className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">{collection.images.length} fotos</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-primary mb-2">{collection.title}</h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{collection.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{collection.participants}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal de galería con navegación */}
        {currentCollection && currentImage && (
          <div 
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            onClick={closeGallery}
          >
            <div className="relative max-w-5xl max-h-full w-full mx-4" onClick={(e) => e.stopPropagation()}>
              {/* Imagen principal */}
              <div className="relative">
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="max-w-full max-h-[80vh] rounded-lg shadow-deep mx-auto block"
                />
                
                {/* Botón cerrar */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/70"
                  onClick={closeGallery}
                >
                  <X className="w-6 h-6" />
                </Button>

                {/* Navegación izquierda */}
                {currentCollection.images.length > 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                )}

                {/* Navegación derecha */}
                {currentCollection.images.length > 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={nextImage}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                )}
              </div>

              {/* Información de la imagen */}
              <div className="mt-4 text-center text-white">
                <h3 className="text-xl font-semibold mb-2">{currentCollection.title}</h3>
                <p className="text-white/80 mb-4">{currentImage.alt}</p>
                
                {/* Indicador de posición */}
                <div className="flex items-center justify-center space-x-2 mb-4">
                  {currentCollection.images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex 
                          ? 'bg-white scale-125' 
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
                
                <p className="text-sm text-white/60">
                  {currentImageIndex + 1} de {currentCollection.images.length} fotos
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;