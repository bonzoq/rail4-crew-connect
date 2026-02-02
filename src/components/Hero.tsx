import { ArrowDown } from "lucide-react";
import logo from "@/assets/rail4-logo.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-full h-1 bg-rail-green" />
        <div className="absolute top-1/3 left-0 w-full h-0.5 bg-rail-yellow" />
        <div className="absolute bottom-1/3 left-0 w-full h-1 bg-rail-green" />
        <div className="absolute bottom-1/4 left-0 w-full h-0.5 bg-rail-yellow" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-10">
            <img src={logo} alt="Rail4 - Wsparcie Transportu Kolejowego" className="h-40 md:h-56 lg:h-64" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-rail-dark mb-6 leading-tight">
            Profesjonalny wynajem
            <span className="block text-rail-green">pracowników kolejowych</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Zapewniamy wykwalifikowany personel kolejowy dla Twojej firmy. 
            Rewident, ustawiacz, manewrowy — kompleksowe wsparcie branży.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#uslugi" className="btn-primary text-lg">
              Poznaj nasze usługi
            </a>
            <a href="#kontakt" className="btn-secondary text-lg">
              Skontaktuj się
            </a>
          </div>
        </div>

        <a 
          href="#o-nas" 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-rail-dark/40 hover:text-rail-green transition-colors animate-bounce"
        >
          <ArrowDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
