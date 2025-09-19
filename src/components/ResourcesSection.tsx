import { Download, FileText, BookOpen, Users, Leaf, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ResourcesSection = () => {
  const resourceCategories = [
    {
      title: "Guías de Capacitación Excel",
      description: "Material didáctico para aprender Excel",
      icon: BookOpen,
      color: "text-primary",
      bgColor: "bg-primary/10",
      documents: [
        { name: "Guía Básica de Excel", type: "PDF", size: "2.1 MB" },
        { name: "Fórmulas y Funciones Esenciales", type: "PDF", size: "1.8 MB" },
        { name: "Creación de Gráficos en Excel", type: "PDF", size: "2.5 MB" },
        { name: "Tablas Dinámicas para Principiantes", type: "PDF", size: "3.2 MB" },
      ]
    },
    {
      title: "Materiales Comunitarios",
      description: "Recursos específicos para la comunidad pesquera",
      icon: Users,
      color: "text-secondary-vibrant",
      bgColor: "bg-secondary/20",
      documents: [
        { name: "Registro de Capturas en Excel", type: "PDF", size: "1.4 MB" },
        { name: "Control de Gastos Pesqueros", type: "PDF", size: "1.1 MB" },
        { name: "Inventario de Equipos de Pesca", type: "PDF", size: "0.9 MB" },
        { name: "Planilla de Ventas Diarias", type: "PDF", size: "1.2 MB" },
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
            Accede a guías de Excel y materiales específicos para la comunidad pesquera de Manglaralto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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