import { ClipboardCheck, Move, Settings } from "lucide-react";

const professions = [
  {
    icon: ClipboardCheck,
    title: "Rewident taboru",
    shortDesc: "Kontrola techniczna wagonów",
    description: "Rewident taboru odpowiada za przeprowadzanie oględzin technicznych wagonów i lokomotyw. Sprawdza stan hamulców, układów biegowych, połączeń międzywagonowych oraz innych kluczowych elementów. Jego praca ma fundamentalne znaczenie dla bezpieczeństwa ruchu kolejowego.",
    responsibilities: [
      "Oględziny techniczne taboru",
      "Kontrola stanu hamulców",
      "Weryfikacja połączeń międzywagonowych",
      "Wykrywanie usterek i nieprawidłowości",
    ],
  },
  {
    icon: Settings,
    title: "Ustawiacz",
    shortDesc: "Formowanie składów kolejowych",
    description: "Ustawiacz zajmuje się formowaniem i rozkładaniem składów pociągów na stacjach rozrządowych i bocznicach. Odpowiada za prawidłowe zestawienie wagonów zgodnie z planem przewozu. To praca wymagająca precyzji i doskonałej znajomości procedur kolejowych.",
    responsibilities: [
      "Formowanie składów pociągów",
      "Rozkładanie składów",
      "Kontrola dokumentacji wagonowej",
      "Współpraca z dyżurnym ruchu",
    ],
  },
  {
    icon: Move,
    title: "Manewrowy",
    shortDesc: "Praca manewrowa na stacjach",
    description: "Manewrowy wykonuje prace związane z przemieszczaniem wagonów na terenie stacji i bocznic. Obsługuje zwrotnice, odpina i przypina wagony, daje sygnały maszyniście. To praca wymagająca sprawności fizycznej, czujności i ścisłego przestrzegania przepisów bezpieczeństwa.",
    responsibilities: [
      "Przemieszczanie wagonów",
      "Obsługa zwrotnic",
      "Sprzęganie i rozprzęganie taboru",
      "Dawanie sygnałów ręcznych",
    ],
  },
];

const Professions = () => {
  return (
    <section id="zawody" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Zawody <span className="text-rail-green">kolejowe</span>
          </h2>
          <p className="section-subtitle">
            Specjalizujemy się w wynajmie pracowników do kluczowych stanowisk w transporcie kolejowym. 
            Poznaj zawody, których przedstawicieli możemy Ci zapewnić.
          </p>
        </div>

        <div className="space-y-8">
          {professions.map((profession, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/3">
                <div className="card-rail text-center lg:text-left">
                  <div className="w-20 h-20 mx-auto lg:mx-0 mb-6 rounded-2xl bg-gradient-to-br from-rail-green to-rail-green/80 flex items-center justify-center shadow-lg">
                    <profession.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-rail-dark mb-2">
                    {profession.title}
                  </h3>
                  <p className="text-rail-yellow font-semibold">
                    {profession.shortDesc}
                  </p>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="bg-muted rounded-xl p-8">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {profession.description}
                  </p>
                  <div>
                    <h4 className="font-bold text-rail-dark mb-4">Główne obowiązki:</h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {profession.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-rail-yellow" />
                          <span className="text-muted-foreground">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center p-8 bg-rail-green/10 rounded-2xl border border-rail-green/20">
          <p className="text-lg text-rail-dark mb-2">
            <strong>Szukasz innych specjalistów?</strong>
          </p>
          <p className="text-muted-foreground">
            Nasza oferta stale się rozwija. Skontaktuj się z nami, a postaramy się spełnić Twoje wymagania kadrowe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Professions;
