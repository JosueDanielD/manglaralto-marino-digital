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
      title: "Taller 1: Introducción a Excel",
      date: "12 Septiembre 5",
      participants: 5,
      coverImage: "/images/Taller1/1.jpeg",
      images: [
        {
          src: "images/Taller1/1.jpeg",
          alt: "Introducción al taller de Excel"
        },
        {
          src: "images/Taller1/2.jpeg",
          alt: ""
        },
        {
          src: "images/Taller1/3.jpeg",
          alt: ""
        },
        {
          src: "images/Taller1/4.jpeg",
          alt: ""
        },
        {
          src: "images/Taller1/5.jpeg",
          alt: ""
        }
      ]
    },
    {
      id: 2,
      title: "Taller 2: Funciones Básicas de Excel",
      date: "19 Septiembre 2025",
      participants: 10,
      coverImage: "/images/Taller2/1.jpeg",
      images: [
        {
          src: "images/Taller2/1.jpeg",
          alt: "Introducción al taller de Excel"
        },
        {
          src: "images/Taller2/2.jpeg",
          alt: ""
        },
        {
          src: "images/Taller2/3.jpeg",
          alt: ""
        },
        {
          src: "images/Taller2/4.jpeg",
          alt: ""
        },
        {
          src: "images/Taller2/5.jpeg",
          alt: ""
        }
      ]
    },
    {
      id: 3,
      title: "Taller 3: Análisis de Datos con Excel",
      date: "26 Septiembre 2025",
      participants: 8,
      coverImage: "/images/Taller3/1.jpeg",
      images: [
        {
          src: "images/Taller3/1.jpeg",
          alt: "Introducción al taller de Excel"
        },
        {
          src: "images/Taller3/2.jpeg",
          alt: ""
        },
        {
          src: "images/Taller3/3.jpeg",
          alt: ""
        },
        {
          src: "images/Taller3/4.jpeg",
          alt: ""
        },
        {
          src: "images/Taller3/5.jpeg",
          alt: ""
        }
      ]
    }
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