import { Mail, MapPin, Phone, User, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
      name: "Dr. María Salinas",
      role: "Coordinadora General del Proyecto",
      email: "m.salinas@proyecto.ec",
      specialization: "Desarrollo Sostenible Marino-Costero"
    },
    {
      name: "Ing. Carlos Mendoza",
      role: "Especialista en Transformación Digital",
      email: "c.mendoza@proyecto.ec",
      specialization: "Tecnologías de la Información"
    },
    {
      name: "Biol. Ana Rodríguez",
      role: "Especialista en Conservación Marina",
      email: "a.rodriguez@proyecto.ec",
      specialization: "Biodiversidad y Ecosistemas Costeros"
    }
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="animate-fade-in-up">
            <Card className="shadow-wave bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Información de Contacto</CardTitle>
                <CardDescription>
                  Comunícate con nosotros para más información sobre el proyecto
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

            {/* Equipo responsable */}
            <Card className="mt-8 shadow-wave bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Equipo Responsable</CardTitle>
                <CardDescription>
                  Profesionales comprometidos con el desarrollo de Manglaralto
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
                      <p className="text-sm text-primary font-medium">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.specialization}</p>
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-sm text-secondary-vibrant hover:underline"
                      >
                        {member.email}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Formulario de contacto */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="shadow-wave bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Envíanos un Mensaje</CardTitle>
                <CardDescription>
                  ¿Tienes preguntas o sugerencias? Nos encantaría escucharte
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nombre">Nombre</Label>
                    <Input 
                      id="nombre" 
                      placeholder="Tu nombre completo"
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <Label htmlFor="organizacion">Organización</Label>
                    <Input 
                      id="organizacion" 
                      placeholder="Tu organización (opcional)"
                      className="bg-background/50"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="tu@email.com"
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <Label htmlFor="asunto">Asunto</Label>
                  <Input 
                    id="asunto" 
                    placeholder="Tema de tu consulta"
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <Label htmlFor="mensaje">Mensaje</Label>
                  <Textarea 
                    id="mensaje"
                    placeholder="Escribe tu mensaje aquí..."
                    rows={5}
                    className="bg-background/50"
                  />
                </div>
                
                <Button className="w-full gradient-ocean text-white shadow-wave hover-wave">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensaje
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  Te responderemos en un plazo máximo de 48 horas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;