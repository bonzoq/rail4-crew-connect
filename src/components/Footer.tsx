import logo from "@/assets/rail4-logo.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Rail4" className="h-12 rounded p-1.5" />
            <div className="text-rail-dark text-sm font-bold">
              <p>Wsparcie Transportu Kolejowego</p>
            </div>
          </div>
          
          <nav className="flex items-center gap-6 text-sm">
            <a href="#o-nas" className="text-rail-dark font-bold hover:text-rail-green transition-colors">O nas</a>
            <a href="#uslugi" className="text-rail-dark font-bold hover:text-rail-green transition-colors">Oferta</a>
            <a href="#zawody" className="text-rail-dark font-bold hover:text-rail-green transition-colors">Kadra</a>
            <a href="#kontakt" className="text-rail-dark font-bold hover:text-rail-green transition-colors">Kontakt</a>
          </nav>
          
          <div className="text-rail-dark font-bold text-sm">
            © {new Date().getFullYear()} Rail4. Wszystkie prawa zastrzeżone.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
