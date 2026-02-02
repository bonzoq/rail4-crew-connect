import { ClipboardCheck, Move, Settings, ArrowRight } from "lucide-react";

const professions = [
  {
    icon: ClipboardCheck,
    title: "Rewident taboru",
    shortDesc: "Kontrola techniczna",
    description: "Odpowiada za przeprowadzanie oględzin technicznych wagonów i lokomotyw. Sprawdza stan hamulców, układów biegowych oraz innych kluczowych elementów bezpieczeństwa.",
  },
  {
    icon: Settings,
    title: "Ustawiacz",
    shortDesc: "Formowanie składów",
    description: "Zajmuje się formowaniem i rozkładaniem składów pociągów na stacjach rozrządowych i bocznicach. Odpowiada za prawidłowe zestawienie wagonów zgodnie z planem.",
  },
  {
    icon: Move,
    title: "Manewrowy",
    shortDesc: "Prace manewrowe",
    description: "Wykonuje prace związane z przemieszczaniem wagonów na terenie stacji i bocznic. Obsługuje zwrotnice, odpina i przypina wagony, daje sygnały maszyniście.",
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

        <div className="grid md:grid-cols-3 gap-8">
          {professions.map((profession, index) => (
            <div 
              key={index} 
              className="group relative bg-muted rounded-2xl p-8 hover:bg-rail-green transition-all duration-300"
            >
              <div className="w-16 h-16 bg-rail-yellow rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                <profession.icon className="w-8 h-8 text-rail-dark" />
              </div>
              
              <span className="text-sm font-medium text-rail-green group-hover:text-rail-yellow transition-colors">
                {profession.shortDesc}
              </span>
              
              <h3 className="text-2xl font-bold text-rail-dark group-hover:text-white mt-2 mb-4 transition-colors">
                {profession.title}
              </h3>
              
              <p className="text-muted-foreground group-hover:text-white/80 leading-relaxed mb-6 transition-colors">
                {profession.description}
              </p>
              
              <a 
                href="#kontakt" 
                className="inline-flex items-center gap-2 text-rail-green font-semibold group-hover:text-rail-yellow transition-colors"
              >
                Zapytaj o dostępność
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center p-8 bg-rail-dark rounded-2xl">
          <p className="text-white text-lg mb-2">
            <strong className="text-rail-yellow">Szukasz innych specjalistów?</strong>
          </p>
          <p className="text-white/70 mb-6">
            Nasza oferta stale się rozwija. Skontaktuj się z nami, a postaramy się spełnić Twoje wymagania kadrowe.
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
