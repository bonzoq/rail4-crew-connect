import logo from "@/assets/rail4-logo.jpg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <img src={logo} alt="Rail4 Logo" className="h-12 md:h-14" />
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#o-nas" className="text-rail-dark font-medium hover:text-rail-green transition-colors">
            O nas
          </a>
          <a href="#uslugi" className="text-rail-dark font-medium hover:text-rail-green transition-colors">
            Usługi
          </a>
          <a href="#zawody" className="text-rail-dark font-medium hover:text-rail-green transition-colors">
            Zawody
          </a>
          <a href="#kontakt" className="btn-secondary text-sm">
            Kontakt
          </a>
        </nav>

        <a href="#kontakt" className="md:hidden btn-secondary text-sm py-2 px-4">
          Kontakt
        </a>
      </div>
    </header>
  );
};

export default Header;
