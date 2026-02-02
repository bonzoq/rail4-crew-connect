import { CheckCircle, Users, Shield, Clock } from "lucide-react";

const benefits = [
  "Szybko i skutecznie uzupełnisz braki kadrowe",
  "Zyskasz wykwalifikowaną kadrę kolejową",
  "Ograniczysz koszty zatrudnienia",
  "Zapomnisz o ustawowych obowiązkach pracodawcy",
];

const stats = [
  { icon: Users, value: "50+", label: "Pracowników" },
  { icon: Shield, value: "100%", label: "Uprawnienia" },
  { icon: Clock, value: "24/7", label: "Dostępność" },
];

const About = () => {
  return (
    <section id="o-nas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <p className="text-rail-green font-semibold tracking-wider mb-3 uppercase text-sm">
              Rail4 Sp. z o.o.
            </p>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-rail-dark mb-6 leading-tight">
              Rozwiązujemy{" "}
              <span className="text-rail-green">problemy kadrowe</span>{" "}
              w sektorze kolejowym
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Specjalizujemy się w leasingu pracowników kolejowych. Zapewniamy kompleksową 
              obsługę kadrową, dzięki której możesz skupić się na swojej podstawowej działalności.
            </p>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-rail-green flex-shrink-0 mt-0.5" />
                  <span className="text-rail-dark">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <a href="#kontakt" className="btn-secondary">
              Skontaktuj się z nami
            </a>
          </div>
          
          {/* Right Column - Stats */}
          <div className="relative">
            <div className="bg-muted rounded-2xl p-8 lg:p-12">
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-rail-yellow rounded-full" />
              
              <h3 className="text-2xl font-bold text-rail-dark mb-8 pl-6">
                Dlaczego warto wybrać <span className="text-rail-green">Rail4</span>?
              </h3>
              
              <div className="grid gap-6 pl-6">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-rail-green/10 flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-rail-green" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-rail-dark">{stat.value}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-border pl-6">
                <p className="text-muted-foreground italic">
                  "Naszym celem jest zapewnienie firmom transportowym elastycznego 
                  dostępu do sprawdzonego personelu kolejowego."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
