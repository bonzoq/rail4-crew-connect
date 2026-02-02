import { Train, UserCheck, Briefcase, Handshake } from "lucide-react";

const services = [
  {
    icon: UserCheck,
    title: "Wynajem pracowników",
    description: "Udostępniamy wykwalifikowany personel kolejowy na potrzeby Twojej firmy. Elastyczne warunki współpracy dostosowane do Twoich potrzeb.",
  },
  {
    icon: Train,
    title: "Obsługa kolejowa",
    description: "Zapewniamy kompleksową obsługę procesów kolejowych - od rewizji przez manewry po ustawianie składów.",
  },
  {
    icon: Briefcase,
    title: "Wsparcie operacyjne",
    description: "Pomagamy w rozwiązywaniu bieżących wyzwań kadrowych, reagując szybko na Twoje potrzeby.",
  },
  {
    icon: Handshake,
    title: "Współpraca długoterminowa",
    description: "Budujemy trwałe relacje z naszymi klientami, oferując stabilne i przewidywalne warunki współpracy.",
  },
];

const Services = () => {
  return (
    <section id="uslugi" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Nasze <span className="text-rail-yellow">usługi</span>
          </h2>
          <p className="section-subtitle">
            Oferujemy kompleksowe wsparcie kadrowe dla firm z branży kolejowej. 
            Skup się na swoim biznesie — my zajmiemy się personelem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card-rail group hover:bg-rail-green hover:border-rail-green"
            >
              <div className="w-16 h-16 mb-6 rounded-2xl bg-rail-yellow/20 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                <service.icon className="w-8 h-8 text-rail-green group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-rail-dark group-hover:text-white mb-3 transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-white/80 transition-colors">
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
