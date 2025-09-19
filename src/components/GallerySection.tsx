import { useState } from "react";
import { Camera, X, Upload, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Imágenes de ejemplo para la galería
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      alt: "Taller de pesca sostenible en Manglaralto",
      title: "Taller Básico de Excel",
      date: "15 Marzo 2024",
      participants: 25
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
      alt: "Capacitación en fórmulas de Excel",
      title: "Fórmulas y Funciones de Excel",
      date: "20 Marzo 2024",
      participants: 18
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      alt: "Taller de gráficos en Excel",
      title: "Creación de Gráficos",
      date: "28 Marzo 2024",
      participants: 22
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop",
      alt: "Capacitación en tablas dinámicas",
      title: "Tablas Dinámicas en Excel",
      date: "5 Abril 2024",
      participants: 28
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=400&h=300&fit=crop",
      alt: "Taller de registro de capturas",
      title: "Registro Digital de Capturas",
      date: "12 Abril 2024",
      participants: 30
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1570497492707-9f54797f24d3?w=400&h=300&fit=crop",
      alt: "Capacitación en control de gastos",
      title: "Control de Gastos Pesqueros",
      date: "18 Abril 2024",
      participants: 24
    },
  ];

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

        {/* Cuadrícula de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card 
              key={image.id} 
              className="group overflow-hidden shadow-coastal hover-wave cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-primary mb-2">{image.title}</h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{image.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{image.participants}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal de imagen ampliada */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Imagen ampliada"
                className="max-w-full max-h-full rounded-lg shadow-deep"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/70"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;