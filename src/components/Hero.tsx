import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-[center_top_30%] bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-rail-dark/90 via-rail-dark/70 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <p className="text-rail-yellow font-semibold tracking-wider mb-4 uppercase text-sm">
            Pracuj z najlepszymi – kolej to my!
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Profesjonalni{" "}
            <span className="text-rail-yellow">Pracownicy</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
            Posiadający kwalifikacje, wiedzę i doświadczenie w sektorze kolejowym. 
            Gotowi do nowych wyzwań i kompleksowej obsługi Twoich operacji.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#uslugi" className="btn-primary">
              Dowiedz się więcej
            </a>
            <a href="#kontakt" className="btn-outline">
              Skontaktuj się
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
