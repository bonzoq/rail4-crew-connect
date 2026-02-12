import { CheckSquare, Settings, Move, Users } from "lucide-react";

const teamMembers = [
  {
    icon: Move,
    title: "Ustawiacz",
    shortDesc: "Koordynacja manewrów",
  },
  {
    icon: CheckSquare,
    title: "Manewrowy",
    shortDesc: "Realizacja operacji",
  },
  {
    icon: Settings,
    title: "Rewident taboru",
    shortDesc: "Nadzór techniczny",
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
        </div>

        {/* Main Service Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-rail-green rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-rail-dark">
                Wynajem pracowników
              </h3>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Zapewniamy profesjonalny outsourcing wykwalifikowanego personelu w obszarze bezpieczeństwa 
              ruchu kolejowego. Nasz zespół tworzą doświadczeni manewrowi, ustawiacze oraz rewidenci taboru, 
              gotowi do wsparcia Państwa operacji zarówno w trybie ad-hoc, jak i w ramach stałych harmonogramów.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Priorytetem jest dla nas precyzyjna realizacja oczekiwań klienta, dlatego elastyczność 
              łączymy z bezkompromisowym podejściem do bezpieczeństwa i jakości świadczonych usług.
            </p>

          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-rail-dark">
            Nasza <span className="text-rail-green">kadra</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <a 
              key={index}
              href="#zawody"
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group text-center"
            >
              <div className="w-16 h-16 bg-rail-yellow rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <member.icon className="w-8 h-8 text-rail-dark" />
              </div>
              <h4 className="text-xl font-bold text-rail-dark mb-2">
                {member.title}
              </h4>
              <p className="text-muted-foreground text-sm">
                {member.shortDesc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
