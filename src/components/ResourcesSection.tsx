import { Download, FileText, BookOpen, Users, Leaf, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ResourcesSection = () => {
  const resourceCategories = [
    {
      title: "Guías de Capacitación",
      description: "Material didáctico para talleres comunitarios",
      icon: BookOpen,
      color: "text-primary",
      bgColor: "bg-primary/10",
      documents: [
        { name: "Guía de Pesca Sostenible", type: "PDF", size: "2.3 MB" },
        { name: "Manual de Turismo Comunitario", type: "PDF", size: "1.8 MB" },
        { name: "Conservación de Manglares", type: "PDF", size: "3.1 MB" },
      ]
    },
    {
      title: "Informes de Investigación",
      description: "Estudios y análisis del proyecto",
      icon: FileText,
      color: "text-accent-dark",
      bgColor: "bg-accent/10",
      documents: [
        { name: "Diagnóstico Socio-ambiental", type: "PDF", size: "4.2 MB" },
        { name: "Análisis de Biodiversidad Marina", type: "PDF", size: "5.7 MB" },
        { name: "Evaluación Participativa", type: "PDF", size: "2.9 MB" },
      ]
    },
    {
      title: "Materiales Comunitarios",
      description: "Recursos para organizaciones locales",
      icon: Users,
      color: "text-secondary-vibrant",
      bgColor: "bg-secondary/20",
      documents: [
        { name: "Reglamento de Pesca Artesanal", type: "PDF", size: "1.2 MB" },
        { name: "Actas de Asambleas Comunitarias", type: "PDF", size: "0.9 MB" },
        { name: "Plan de Desarrollo Local", type: "PDF", size: "3.8 MB" },
      ]
    }
  ];

  return (
    <section id="recursos" className="py-20 gradient-horizon">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Recursos y Documentos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Accede a materiales de capacitación, informes de investigación y recursos comunitarios 
            para el desarrollo sostenible de Manglaralto
          </p>
        </div>

        {/* Botón de carga de documentos */}
        <div className="mb-12 text-center">
          <Card className="max-w-md mx-auto shadow-coastal hover-coastal">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-center space-x-2 text-primary">
                <Upload className="w-5 h-5" />
                <span>Contribuir</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                ¿Tienes documentos para compartir con la comunidad?
              </p>
              <Button className="w-full gradient-coastal text-white hover:opacity-90 shadow-wave">
                Subir Documento
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {resourceCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="h-full shadow-wave hover-wave bg-card/80 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <div className={`inline-flex p-3 rounded-full ${category.bgColor} mb-4`}>
                      <IconComponent className={`w-8 h-8 ${category.color}`} />
                    </div>
                    <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.documents.map((doc, docIndex) => (
                        <div 
                          key={docIndex}
                          className="flex items-center justify-between p-3 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-smooth"
                        >
                          <div className="flex items-center space-x-3">
                            <FileText className="w-4 h-4 text-muted-foreground" />
                            <div>
                              <p className="font-medium text-sm">{doc.name}</p>
                              <p className="text-xs text-muted-foreground">{doc.type} • {doc.size}</p>
                            </div>
                          </div>
                          <Button size="sm" variant="ghost" className="hover:bg-primary/10">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;