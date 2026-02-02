import logo from "@/assets/rail4-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-rail-dark border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Rail4" className="h-12 bg-white rounded p-1.5" />
            <div className="text-white/60 text-sm">
              <p>Wsparcie Transportu Kolejowego</p>
            </div>
          </div>
          
          <nav className="flex items-center gap-6 text-sm">
            <a href="#o-nas" className="text-white/60 hover:text-rail-yellow transition-colors">O nas</a>
            <a href="#uslugi" className="text-white/60 hover:text-rail-yellow transition-colors">Oferta</a>
            <a href="#zawody" className="text-white/60 hover:text-rail-yellow transition-colors">Kadra</a>
            <a href="#kontakt" className="text-white/60 hover:text-rail-yellow transition-colors">Kontakt</a>
          </nav>
          
          <div className="text-white/40 text-sm">
            © {new Date().getFullYear()} Rail4. Wszystkie prawa zastrzeżone.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
