import { Download, FileText, BookOpen, Users, Leaf, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ResourcesSection = () => {
  // Función para manejar la descarga de archivos
  const handleDownload = (fileName: string, filePath: string) => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resourceCategories = [
    {
      title: "Guías usadas en los talleres",
      description: "Material didáctico usado en los talleres de Excel",
      icon: BookOpen,
      color: "text-primary",
      bgColor: "bg-primary/10",
      documents: [
        { 
          name: "Guía Básica de Excel", 
          type: "PDF", 
          size: "514 KB", 
          path: "/documents/guia-basica-excel.pdf" 
        },
      ]
    },
    {
      title: "Archivos excel",
      description: "Archivos excel terminados en cada taller",
      icon: Users,
      color: "text-secondary-vibrant",
      bgColor: "bg-secondary/20",
      documents: [
        { 
          name: "Taller 2", 
          type: "Excel", 
          size: "10 KB", 
          path: "/documents/Taller2.xlsx" 
        },
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
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="hover:bg-primary/10"
                            onClick={() => handleDownload(doc.name, doc.path)}
                          >
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