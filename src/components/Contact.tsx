import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="kontakt" className="py-20 bg-rail-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Skontaktuj się <span className="text-rail-yellow">z nami</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Masz pytania dotyczące naszych usług? Potrzebujesz wsparcia kadrowego? 
            Skontaktuj się z nami — odpowiemy jak najszybciej.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-rail-green flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Email</h3>
                  <a 
                    href="mailto:biuro@rail4.pl" 
                    className="text-rail-yellow hover:text-rail-yellow/80 transition-colors text-lg"
                  >
                    biuro@rail4.pl
                  </a>
                  <p className="text-gray-400 text-sm mt-1">
                    Odpowiadamy w ciągu 24h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-rail-yellow flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-rail-dark" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Telefon</h3>
                  <p className="text-gray-300 text-lg">
                    Wkrótce
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Numer kontaktowy pojawi się niebawem
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Lokalizacja</h3>
                  <p className="text-gray-300">
                    Polska
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Działamy na terenie całego kraju
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-rail-green to-rail-green/80 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Potrzebujesz pracowników?
              </h3>
              <p className="text-white/80 mb-6">
                Napisz do nas i przedstaw swoje potrzeby kadrowe. Przygotujemy dla Ciebie 
                indywidualną ofertę współpracy.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-rail-yellow" />
                  <span>Szybka odpowiedź</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-rail-yellow" />
                  <span>Wykwalifikowany personel</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-rail-yellow" />
                  <span>Elastyczne warunki</span>
                </li>
              </ul>
              <a 
                href="mailto:biuro@rail4.pl" 
                className="inline-block w-full text-center bg-rail-yellow text-rail-dark font-bold py-4 px-6 rounded-xl hover:brightness-110 transition-all"
              >
                Wyślij zapytanie
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
