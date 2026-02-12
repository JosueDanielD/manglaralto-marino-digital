import { Download, FileText, BookOpen, Users, Leaf, Upload, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ResourcesSection = () => {
  // Funcion para manejar la descarga de archivos
  const handleDownload = (fileName: string, filePath: string) => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resourceCategories = [
    {
      title: "Capacitacion Excel",
      description: "Guias, practicas y archivos de los talleres de Excel",
      icon: BookOpen,
      color: "text-primary",
      bgColor: "bg-primary/10",
      documents: [
        {
          name: "Guia basica de Excel",
          type: "PDF",
          size: "502 KB",
          path: "/documents/Excel/guia-basica-excel.pdf",
        },
        {
          name: "Taller1_PracticaGuiada.pdf",
          type: "PDF",
          size: "496 KB",
          path: "/documents/Excel/Taller1_PracticaGuiada.pdf",
        },
        {
          name: "Taller2_PracticaGuiada.pdf",
          type: "PDF",
          size: "1.7 MB",
          path: "/documents/Excel/Taller2_PracticaGuiada.pdf",
        },
        {
          name: "Taller3_PracticaGuiada.pdf",
          type: "PDF",
          size: "619 KB",
          path: "/documents/Excel/Taller3_PracticaGuiada.pdf",
        },
        {
          name: "Taller4_PracticaGuiada.pdf",
          type: "PDF",
          size: "5 KB",
          path: "/documents/Excel/Taller4_PracticaGuiada.pdf",
        },
        {
          name: "Taller 1",
          type: "Excel",
          size: "9 KB",
          path: "/documents/Excel/Taller1.xlsx",
        },
        {
          name: "Taller 2",
          type: "Excel",
          size: "10 KB",
          path: "/documents/Excel/Taller2.xlsx",
        },
        {
          name: "Taller 3",
          type: "Excel",
          size: "21 KB",
          path: "/documents/Excel/Taller3.xlsx",
        },
        {
          name: "Taller 4",
          type: "Excel",
          size: "6 KB",
          path: "/documents/Excel/Taller4.xlsx",
        },
        {
          name: "Taller 2 Presentacion",
          type: "PPTX",
          size: "1.9 MB",
          path: "/documents/Excel/Taller2Presentacion.pptx",
        },
        {
          name: "Taller 3 Presentacion",
          type: "PPTX",
          size: "1.4 MB",
          path: "/documents/Excel/Taller3Presentacion.pptx",
        },
      ],
    },
    {
      title: "Capacitacion Word",
      description: "Presentaciones, talleres y guias de ofimatica en Word",
      icon: Upload,
      color: "text-secondary-vibrant",
      bgColor: "bg-secondary/20",
      documents: [
        {
          name: "Capacitacion ofimatica",
          type: "PPTX",
          size: "1 MB",
          path: "/documents/Word/Capacitacion_Ofimatica_Word01.pptx",
        },
        {
          name: "Capacitacion 2 - Microsoft Word Basico Intermedio",
          type: "PPTX",
          size: "16.8 MB",
          path: "/documents/Word/Capacitaci%C3%B3n%202%20%E2%80%93%20Microsoft%20Word%20B%C3%A1sico%20Intermedio.pptx",
        },
        {
          name: "Capacitacion 3 - Word",
          type: "PPTX",
          size: "14.5 MB",
          path: "/documents/Word/Capacitacion%203-%20WORD.pptx",
        },
        {
          name: "Taller 01 - Ofimatica Word",
          type: "Word",
          size: "25 KB",
          path: "/documents/Word/Taller01%20-%20Ofimatica%20Word.docx",
        },
        {
          name: "Taller Integrador - Capacitacion 2",
          type: "PDF",
          size: "141 KB",
          path: "/documents/Word/Taller%20Integrador%20-%20Capacitaci%C3%B3n%202.pdf",
        },
        {
          name: "Taller Integrado - Carta Navidena",
          type: "Word",
          size: "28 KB",
          path: "/documents/Word/Taller_Integrado_Carta_Navide%C3%B1a.docx",
        },
      ],
    },
    {
      title: "Uso del Internet",
      description: "Materiales y guias sobre navegacion y herramientas en linea",
      icon: Users,
      color: "text-primary",
      bgColor: "bg-primary/10",
      documents: [
        {
          name: "Capacitacion: Aprendiendo a Navegar",
          type: "PPTX",
          size: "1.8 MB",
          path: "/documents/UsoInternet/Capacitacion_Aprendiendo_Navegar.pptx",
        },
        {
          name: "Practica: Aprendiendo a Navegar",
          type: "Word",
          size: "116 KB",
          path: "/documents/UsoInternet/Pr%C3%A1ctica_Aprendiendo_Navegar.docx",
        },
      ],
    },
  ];
  const featuredKit = {
    name: "Kit de Materiales",
    description: "Incluye material de todos los talleres presentados.",
    type: "PDF",
    size: "492 KB",
    path: "/documents/Kit de Materiales de Taller.pdf",
  };

  return (
    <section id="recursos" className="py-20 gradient-horizon">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Recursos y Documentos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Accede a guias y materiales de Excel, Word y uso de Internet.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-10 animate-fade-in-up">
          <Card className="shadow-deep hover-wave bg-primary/5 border border-primary/30 ring-1 ring-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">{featuredKit.name}</CardTitle>
              <CardDescription className="text-muted-foreground">
                {featuredKit.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3 rounded-lg bg-white/70 px-4 py-3 text-sm text-muted-foreground">
                <FileText className="w-4 h-4" />
                <span>
                  {featuredKit.type} • {featuredKit.size}
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 sm:flex-row">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="border-primary/40 text-primary hover:bg-primary/10"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Previsualizar
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="flex h-[80vh] w-[96vw] max-w-5xl flex-col gap-4 p-4 sm:p-6">
                    <DialogHeader>
                      <DialogTitle>{featuredKit.name}</DialogTitle>
                      <DialogDescription>{featuredKit.description}</DialogDescription>
                    </DialogHeader>
                    <div className="flex-1">
                      <iframe
                        title={`Vista previa: ${featuredKit.name}`}
                        src={featuredKit.path}
                        className="h-full w-full rounded-md border bg-white"
                      />
                    </div>
                    <DialogFooter className="gap-2 sm:gap-3">
                      <Button asChild variant="secondary">
                        <a href={featuredKit.path} target="_blank" rel="noreferrer">
                          Abrir en nueva pestana
                        </a>
                      </Button>
                      <Button
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                        onClick={() => handleDownload(featuredKit.name, featuredKit.path)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Descargar kit
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => handleDownload(featuredKit.name, featuredKit.path)}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Descargar kit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {resourceCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="h-full shadow-wave hover-wave bg-card/80 backdrop-blur-sm flex flex-col">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent
                    className={
                      ["Capacitacion Excel", "Capacitacion Word"].includes(category.title)
                        ? "flex-1 overflow-y-auto max-h-80"
                        : ""
                    }
                  >
                    {category.documents.length > 0 ? (
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
                                <p className="text-xs text-muted-foreground">
                                  {doc.type} • {doc.size}
                                </p>
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
                    ) : (
                      <div className="rounded-lg bg-secondary/10 p-4 text-center text-sm text-muted-foreground">
                        Proximamente.
                      </div>
                    )}
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


