import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="kontakt" className="py-20 bg-rail-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div>
            <p className="text-rail-yellow font-semibold tracking-wider mb-3 uppercase text-sm">
              Kontakt
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Skontaktuj się <span className="text-rail-yellow">z nami</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              Masz pytania dotyczące naszych usług? Potrzebujesz wsparcia kadrowego? 
              Napisz do nas — odpowiemy jak najszybciej.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-rail-green flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Email</h3>
                  <a 
                    href="mailto:biuro@rail4.pl" 
                    className="text-rail-yellow hover:underline text-lg"
                  >
                    biuro@rail4.pl
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-rail-yellow flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-rail-dark" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Telefon</h3>
                  <p className="text-white/70 text-lg">Wkrótce</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Lokalizacja</h3>
                  <p className="text-white/70">Działamy na terenie całej Polski</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - CTA */}
          <div className="bg-white rounded-2xl p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-rail-dark mb-4">
              Potrzebujesz pracowników?
            </h3>
            <p className="text-muted-foreground mb-8">
              Napisz do nas i przedstaw swoje potrzeby kadrowe. Przygotujemy dla Ciebie 
              indywidualną ofertę współpracy.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                <div className="w-3 h-3 rounded-full bg-rail-green" />
                <span className="text-rail-dark">Szybka odpowiedź w 24h</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                <div className="w-3 h-3 rounded-full bg-rail-green" />
                <span className="text-rail-dark">Wykwalifikowany personel</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                <div className="w-3 h-3 rounded-full bg-rail-green" />
                <span className="text-rail-dark">Elastyczne warunki współpracy</span>
              </div>
            </div>
            
            <a 
              href="mailto:biuro@rail4.pl" 
              className="btn-secondary w-full justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Wyślij zapytanie
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
