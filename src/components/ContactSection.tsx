import { Mail, MapPin, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Correo Electrónico",
      details: "manglaralto2025@proyecto.ec",
      action: "mailto:manglaralto2025@proyecto.ec"
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: "+593 4 278-1234",
      action: "tel:+59342781234"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      details: "Parroquia Manglaralto, Santa Elena, Ecuador",
      action: "https://maps.google.com/?q=Manglaralto,Ecuador"
    }
  ];

  const teamMembers = [
    {
      name: "Ing. Milena Riquero",
      role: "Coordinadora General del Proyecto",
    },
    {
      name: "Ing. Sandra Coello",
      role: "Coordinadora General del Proyecto",
      //email: "c.mendoza@proyecto.ec",
      //specialization: "Microsoft Excel y Análisis de Datos"
    },
    
  ];

  return (
    <section id="contacto" className="py-20 gradient-horizon">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Contacto y Equipo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conecta con nuestro equipo de trabajo y únete a la transformación 
            sostenible de Manglaralto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Información de contacto */}
          <div className="animate-fade-in-up">
            <Card className="shadow-wave bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Información de Contacto</CardTitle>
                <CardDescription>
                  Comunícate con nosotros para más información sobre las capacitaciones de Excel
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.action}
                      target={info.action.startsWith('http') ? '_blank' : undefined}
                      rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-smooth hover-coastal group"
                    >
                      <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-smooth">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                        <p className="text-muted-foreground">{info.details}</p>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Equipo responsable */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <Card className="shadow-wave bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Equipo Responsable</CardTitle>
                <CardDescription>
                  {/*Instructores especializados en Excel para la comunidad pesquera*/}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-accent/10 hover:bg-accent/20 transition-smooth">
                    <div className="flex-shrink-0 p-2 bg-accent/20 rounded-full">
                      <User className="w-4 h-4 text-accent-dark" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{member.name}</h4>
                      {/*}
                      <p className="text-sm text-primary font-medium">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.specialization}</p>
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-sm text-secondary-vibrant hover:underline"
                      >
                        {member.email}
                      </a>
                      */}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;