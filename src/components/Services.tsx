import { Users, Train, GraduationCap, Wrench } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Wynajem pracowników",
    description: "Udostępniamy wykwalifikowany personel kolejowy na potrzeby Twojej firmy. Elastyczne warunki współpracy dostosowane do Twoich potrzeb.",
    color: "bg-rail-green",
  },
  {
    icon: Train,
    title: "Obsługa bocznic",
    description: "Oferujemy obsługę bocznic kolejowych w zakresie czynności techniczno-ruchowych. Pozwala to na obniżenie kosztów funkcjonowania bocznicy.",
    color: "bg-rail-yellow",
  },
  {
    icon: GraduationCap,
    title: "Szkolenia kolejowe",
    description: "Prowadzimy szkolenia dla osób chcących związać swoją przyszłość z koleją. Oferujemy również pouczenia okresowe dla pracowników.",
    color: "bg-rail-green",
  },
  {
    icon: Wrench,
    title: "Wsparcie techniczne",
    description: "Zapewniamy kompleksowe wsparcie techniczne dla firm kolejowych. Pomagamy w rozwiązywaniu bieżących wyzwań operacyjnych.",
    color: "bg-rail-yellow",
  },
];

const Services = () => {
  return (
    <section id="uslugi" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-rail-green font-semibold tracking-wider mb-3 uppercase text-sm">
            Nasza oferta
          </p>
          <h2 className="section-title mx-auto">
            Co możemy dla Ciebie <span className="text-rail-green">zrobić</span>?
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Oferujemy kompleksowe wsparcie kadrowe dla firm z branży kolejowej. 
            Skup się na swoim biznesie — my zajmiemy się personelem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-rail-dark mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
