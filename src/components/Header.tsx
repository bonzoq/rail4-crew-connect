import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/rail4-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <img src={logo} alt="Rail4 Logo" className="h-14 md:h-16" />
        </a>
        
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#hero" className="text-rail-dark font-medium hover:text-rail-green transition-colors">
            Start
          </a>
          <a href="#o-nas" className="text-rail-dark font-medium hover:text-rail-green transition-colors">
            O nas
          </a>
          <a href="#uslugi" className="text-rail-dark font-medium hover:text-rail-green transition-colors">
            Oferta
          </a>
          <a href="#zawody" className="text-rail-dark font-medium hover:text-rail-green transition-colors">
            Kadra
          </a>
          <a href="#kontakt" className="btn-secondary text-sm py-3 px-6">
            Kontakt
          </a>
        </nav>

        <button 
          className="lg:hidden p-2 text-rail-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#hero" className="text-rail-dark font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Start
            </a>
            <a href="#o-nas" className="text-rail-dark font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              O nas
            </a>
            <a href="#uslugi" className="text-rail-dark font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Oferta
            </a>
            <a href="#zawody" className="text-rail-dark font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Kadra
            </a>
            <a href="#kontakt" className="btn-secondary text-center" onClick={() => setIsMenuOpen(false)}>
              Kontakt
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
