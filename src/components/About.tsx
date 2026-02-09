import { CheckCircle, Users, Clock } from "lucide-react";

const benefits = [
  "Pełna zgodność prawna – przejmujemy obowiązki związane z monitorowaniem ważności uprawnień",
  "Elastyczność operacyjna – dostosowujemy liczbę personelu do aktualnego natężenia ruchu",
  "Redukcja ryzyka – gwarantujemy obsadę stanowisk przez osoby o wysokiej odporności na stres",
  "Optymalizacja kosztów pracy – płacisz za realnie wykonaną pracę",
];

const stats = [
  { icon: Users, value: "50+", label: "Pracowników" },
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
              Kim jesteśmy
            </p>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-rail-dark mb-6 leading-tight">
              Kompleksowe wsparcie{" "}
              <span className="text-rail-green">kadrowe</span>{" "}
              w sektorze kolejowym
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Rail4 oferuje kompleksowe wsparcie w obszarze personelu bezpośrednio odpowiedzialnego 
              za bezpieczeństwo i prowadzenie ruchu kolejowego. Zapewniamy wykwalifikowane kadry, 
              które posiadają wszelkie niezbędne uprawnienia, aktualne badania lekarskie oraz 
              cykliczne szkolenia wymagane przez Urząd Transportu Kolejowego (UTK).
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
                <h4 className="text-lg font-bold text-rail-dark mb-4">
                  Stabilność operacyjna i eliminacja deficytu kadr
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-rail-green font-bold">•</span>
                    <span>Ciągłość ruchu bez przestojów – eliminujemy ryzyko wstrzymania operacji</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rail-green font-bold">•</span>
                    <span>Zarządzanie czasem pracy zgodnie z ustawą o transporcie kolejowym</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rail-green font-bold">•</span>
                    <span>Gotowość operacyjna 24/7</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center p-8 bg-rail-dark rounded-2xl">
          <p className="text-white text-lg mb-2">
            <strong className="text-rail-yellow">Rail4</strong>
          </p>
          <p className="text-white/70 mb-0">
            Zapewniamy kompleksową obsługę kadrową, pozwalając naszym Partnerom na pełną koncentrację 
            na terminowej realizacji procesów przewozowych.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
