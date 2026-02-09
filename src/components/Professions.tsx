import { Settings, Move, ClipboardCheck, ArrowRight } from "lucide-react";

const professions = [
  {
    icon: Settings,
    title: "Ustawiacz",
    shortDesc: "Kluczowe ogniwo logistyki kolejowej",
    description: `W dobie dynamicznego rozwoju transportu szynowego, zawód ustawiacza taboru staje się filarem sprawnej obsługi procesów logistycznych. To stanowisko łączące w sobie specjalistyczną wiedzę techniczną z wysoką odpowiedzialnością i umiejętnością błyskawicznego podejmowania decyzji.`,
    tasks: [
      { title: "Koordynacja manewrów", desc: "Efektywne planowanie pracy lokomotyw i wagonów, zapewniające płynność ruchu i maksymalne wykorzystanie infrastruktury." },
      { title: "Nadzór techniczny", desc: "Monitorowanie stanu taboru, zgłaszanie usterek oraz współpraca z serwisem technicznym." },
      { title: "Gwarancja bezpieczeństwa", desc: "Restrykcyjne przestrzeganie norm bezpieczeństwa, w tym kontrola prawidłowego sprzęgania jednostek i zabezpieczanie składów." },
      { title: "Ewidencja operacyjna", desc: "Prowadzenie dokumentacji ruchowej, która pozwala na sprawny monitoring floty i szybką reakcję w sytuacjach awaryjnych." },
    ],
  },
  {
    icon: Move,
    title: "Manewrowy",
    shortDesc: "Fundament operacji stacyjnych",
    description: `W złożonym organizmie transportu kolejowego manewrowy taboru pełni rolę wykonawczą o kluczowym znaczeniu dla płynności ruchu. Jest to zawód dedykowany osobom, które potrafią łączyć sprawność fizyczną z precyzją, doskonałą komunikacją oraz umiejętnością błyskawicznej reakcji na zmieniające się warunki pracy.`,
    tasks: [
      { title: "Realizacja operacji manewrowych", desc: "Bezpośrednie przeprowadzanie prac związanych z zestawianiem, rozdzielaniem i przestawianiem wagonów zgodnie z harmonogramem." },
      { title: "Aktywny nadzór nad bezpieczeństwem", desc: "Stałe monitorowanie stanu urządzeń sprzęgających i hamulcowych oraz restrykcyjne przestrzeganie procedur BHP w obrębie torowiska." },
      { title: "Komunikacja operacyjna", desc: "Ścisła współpraca z maszynistą i ustawiaczem (często za pomocą radiotelefonu lub sygnałów ręcznych), gwarantująca precyzyjne przemieszczanie składów." },
      { title: "Ewidencja działań", desc: "Skrupulatne odnotowywanie wykonanych czynności i stanu taboru w dokumentacji operacyjnej." },
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Rewident taboru",
    shortDesc: "Gwarant bezpieczeństwa i sprawności technicznej",
    description: `Rewident taboru kolejowego to kluczowy ekspert, od którego decyzji zależy dopuszczenie składu do ruchu. Jego praca stanowi fundament bezpieczeństwa systemowego na kolei, wymagając nie tylko rozległej wiedzy z zakresu budowy pojazdów, ale także bezkompromisowej rzetelności w ocenie stanu technicznego lokomotyw i wagonów.`,
    tasks: [
      { title: "Specjalistyczna diagnostyka techniczna", desc: "Przeprowadzanie szczegółowych oględzin podwozia, zestawów kołowych oraz kluczowych układów bezpieczeństwa. Priorytetem jest weryfikacja sprawności systemów hamulcowych (próba hamulca)." },
      { title: "Certyfikacja i dokumentacja techniczna", desc: "Wystawianie oficjalnych dokumentów uprawniających pociąg do drogi oraz sporządzanie raportów z wykrytych usterek, stanowiących podstawę do wyłączenia pojazdu z eksploatacji." },
      { title: "Nadzór nad normami bezpieczeństwa", desc: "Ścisłe egzekwowanie krajowych i międzynarodowych przepisów technicznych (m.in. przepisów Urzędu Transportu Kolejowego)." },
      { title: "Interdyscyplinarna współpraca", desc: "Aktywna wymiana informacji z drużynami trakcyjnymi oraz warsztatami naprawczymi w celu optymalizacji procesu utrzymania taboru." },
    ],
  },
];

const Professions = () => {
  return (
    <section id="zawody" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-rail-green font-semibold tracking-wider mb-3 uppercase text-sm">
            Nasza kadra
          </p>
          <h2 className="section-title mx-auto">
            Zawody <span className="text-rail-green">kolejowe</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Specjalizujemy się w wynajmie pracowników do kluczowych stanowisk w transporcie kolejowym.
          </p>
        </div>

        <div className="space-y-12">
          {professions.map((profession, index) => (
            <div 
              key={index} 
              className="bg-muted rounded-2xl p-8 lg:p-10"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Header */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-rail-yellow rounded-2xl flex items-center justify-center">
                      <profession.icon className="w-8 h-8 text-rail-dark" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-rail-green">
                        {profession.shortDesc}
                      </span>
                      <h3 className="text-2xl font-bold text-rail-dark">
                        {profession.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {profession.description}
                  </p>
                  
                  <a 
                    href="#kontakt" 
                    className="inline-flex items-center gap-2 text-rail-green font-semibold hover:text-rail-dark transition-colors"
                  >
                    Zapytaj o dostępność
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                
                {/* Tasks */}
                <div className="lg:w-2/3">
                  <h4 className="font-bold text-rail-dark mb-4">
                    {profession.title === "Ustawiacz" ? "Na czym polega praca ustawiacza?" : 
                     profession.title === "Manewrowy" ? "Kluczowe zadania manewrowego:" : 
                     "Kluczowe obszary odpowiedzialności:"}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {profession.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="bg-white rounded-xl p-5">
                        <h5 className="font-semibold text-rail-dark mb-2">
                          {task.title}
                        </h5>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {task.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center p-8 bg-rail-dark rounded-2xl">
          <p className="text-white text-lg mb-2">
            <strong className="text-rail-yellow">Szukasz innych specjalistów?</strong>
          </p>
          <p className="text-white/70 mb-6">
            Nasza oferta stale się rozwija. W przyszłości planujemy rozszerzyć naszą kadrę o maszynistów, 
            prowadzących pojazdy kolejowe w obrębie bocznicy kolejowej, dyżurnych ruchu, odprawiaczy i techników. 
            Skontaktuj się z nami, a postaramy się spełnić Twoje wymagania kadrowe.
          </p>
          <a href="#kontakt" className="btn-primary">
            Skontaktuj się
          </a>
        </div>
      </div>
    </section>
  );
};

export default Professions;
