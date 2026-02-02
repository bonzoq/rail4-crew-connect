import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/rail4-logo.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-rail-dark/90 via-rail-dark/70 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <div className="mb-6">
            <img src={logo} alt="Rail4" className="h-20 md:h-28 bg-white rounded-lg p-3 shadow-lg" />
          </div>
          
          <p className="text-rail-yellow font-semibold tracking-wider mb-4 uppercase text-sm">
            Pracuj z najlepszymi – kolej to my!
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Wykwalifikowana{" "}
            <span className="text-rail-yellow">Kadra Kolejowa</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
            Rail4 oferuje kompleksowe usługi kadrowe w sektorze kolejowym. 
            Zatrudniamy wysoko wykwalifikowanych pracowników gotowych do nowych wyzwań.
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
