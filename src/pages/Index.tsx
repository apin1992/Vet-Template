import { Phone, MapPin, Clock, Stethoscope, Syringe, Scissors, HeartPulse, PawPrint, MessageCircle, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-vet.jpg";
import petsGroup from "@/assets/pets-group.jpg";

const WHATSAPP_NUMBER = "526371234567";
const PHONE_NUMBER = "6371234567";

const services = [
  { icon: Stethoscope, title: "Consulta General", desc: "Revisión completa de la salud de tu mascota con diagnóstico profesional." },
  { icon: Syringe, title: "Vacunación", desc: "Esquemas de vacunación para perros, gatos y otras mascotas." },
  { icon: Scissors, title: "Cirugía", desc: "Procedimientos quirúrgicos con equipo moderno y atención especializada." },
  { icon: HeartPulse, title: "Urgencias", desc: "Atención de emergencia para cuando tu mascota más lo necesita." },
  { icon: PawPrint, title: "Estética Canina", desc: "Baño, corte y cuidado profesional para tu mascota." },
  { icon: Clock, title: "Desparasitación", desc: "Protege a tu mascota contra parásitos internos y externos." },
];

const Index = () => {
  const scrollToServices = () => {
    document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PawPrint className="h-7 w-7 text-primary" />
            <span className="font-heading font-extrabold text-lg text-foreground">Clínica Veterinaria Caborca</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
            <a href="#nosotros" className="hover:text-primary transition-colors">Nosotros</a>
            <a href="#ubicacion" className="hover:text-primary transition-colors">Ubicación</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20quisiera%20agendar%20una%20cita`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-16">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Veterinaria atendiendo mascota" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <PawPrint className="h-4 w-4" />
              Caborca, Sonora
            </div>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-4">
              El mejor cuidado para tu mascota
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 font-body leading-relaxed">
              Atención veterinaria profesional con amor y dedicación. Tu mascota merece lo mejor.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20quisiera%20agendar%20una%20cita`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold text-base hover:opacity-90 transition-opacity flex items-center gap-2 shadow-elevated"
              >
                <MessageCircle className="h-5 w-5" />
                Agendar Cita
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="bg-card/20 backdrop-blur-sm text-primary-foreground border border-primary-foreground/30 px-6 py-3 rounded-xl font-bold text-base hover:bg-card/30 transition-colors flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
        <button
          onClick={scrollToServices}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-bounce"
          aria-label="Scroll hacia servicios"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </section>

      {/* Services */}
      <section id="servicios" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Nuestros Servicios</span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mt-2">
              Cuidamos a tu mascota como familia
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <s.icon className="h-6 w-6 text-secondary-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="nosotros" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm tracking-wider uppercase">Sobre Nosotros</span>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mt-2 mb-6">
                Pasión por el bienestar animal
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                En Clínica Veterinaria Caborca nos dedicamos a brindar la mejor atención médica para tus mascotas.
                Contamos con profesionales capacitados y equipo moderno para ofrecer diagnósticos precisos y tratamientos efectivos.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sabemos que tus mascotas son parte de tu familia, y por eso las tratamos con el mismo cariño y profesionalismo
                que merecen.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { num: "10+", label: "Años de experiencia" },
                  { num: "5,000+", label: "Mascotas atendidas" },
                  { num: "100%", label: "Compromiso" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-heading font-extrabold text-2xl text-primary">{stat.num}</div>
                    <div className="text-muted-foreground text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={petsGroup}
                alt="Grupo de mascotas felices"
                className="rounded-2xl shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="ubicacion" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Encuéntranos</span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mt-2">
              Nuestra Ubicación
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-card rounded-2xl shadow-card p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground">Dirección</h3>
                  <p className="text-muted-foreground text-sm mt-1">Calle Ejemplo #123, Col. Centro, Caborca, Sonora, México</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground">Teléfono</h3>
                  <a href={`tel:${PHONE_NUMBER}`} className="text-primary text-sm mt-1 hover:underline block">
                    (637) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground">Horario</h3>
                  <p className="text-muted-foreground text-sm mt-1">Lunes a Viernes: 9:00 AM - 7:00 PM</p>
                  <p className="text-muted-foreground text-sm">Sábado: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card h-80">
              <iframe
                title="Ubicación Clínica Veterinaria Caborca"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54389.41!2d-112.16!3d30.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86cf5f5d5e5e5e5d%3A0x5e5e5e5e5e5e5e5e!2sCaborca%2C%20Sonora!5e0!3m2!1ses!2smx!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-primary-foreground mb-4">
            ¿Tu mascota necesita atención?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg mx-auto">
            Agenda tu cita hoy mismo por WhatsApp o llámanos. ¡Estamos para ayudarte!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20quisiera%20agendar%20una%20cita`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card text-foreground px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity flex items-center gap-2 shadow-elevated"
            >
              <MessageCircle className="h-5 w-5 text-primary" />
              Escribir por WhatsApp
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-xl font-bold text-base hover:bg-primary-foreground/20 transition-colors flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              (637) 123-4567
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <PawPrint className="h-6 w-6 text-primary" />
              <span className="font-heading font-bold text-primary-foreground text-sm">Clínica Veterinaria Caborca</span>
            </div>
            <p className="text-primary-foreground/50 text-xs">
              © {new Date().getFullYear()} Clínica Veterinaria Caborca. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
