import { Shield, Users, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Bezpieczeństwo",
    description: "Wszyscy pracownicy posiadają wymagane uprawnienia i certyfikaty",
  },
  {
    icon: Users,
    title: "Doświadczenie",
    description: "Wykwalifikowany personel z wieloletnim stażem w branży",
  },
  {
    icon: Clock,
    title: "Elastyczność",
    description: "Szybkie reagowanie na potrzeby kadrowe Twojej firmy",
  },
  {
    icon: Award,
    title: "Profesjonalizm",
    description: "Najwyższe standardy obsługi i jakości usług",
  },
];

const About = () => {
  return (
    <section id="o-nas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            O firmie <span className="text-rail-green">Rail4</span>
          </h2>
          <p className="section-subtitle">
            Jesteśmy specjalistami w zakresie wynajmu wykwalifikowanego personelu kolejowego. 
            Wspieramy przedsiębiorstwa transportowe w realizacji ich celów operacyjnych.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-rail-dark">
              Twój partner w branży kolejowej
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-rail-green">Rail4</strong> to firma specjalizująca się w kompleksowym 
              wsparciu transportu kolejowego poprzez wynajem wykwalifikowanych pracowników. 
              Rozumiemy specyfikę branży i wiemy, jak ważna jest niezawodność oraz profesjonalizm.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Naszym celem jest zapewnienie firmom transportowym elastycznego dostępu do 
              sprawdzonego personelu kolejowego, który spełnia wszystkie wymagania prawne 
              i branżowe. Działamy szybko i skutecznie, dostosowując się do potrzeb naszych klientów.
            </p>
            <div className="flex items-center gap-2 text-rail-green font-semibold">
              <div className="w-12 h-1 bg-rail-yellow rounded" />
              <span>Wsparcie transportu kolejowego</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="card-rail text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-rail-green/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-rail-green" />
                </div>
                <h4 className="font-bold text-rail-dark mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
