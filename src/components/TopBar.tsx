import { Mail, MapPin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="top-bar hidden md:block">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="mailto:biuro@rail4.pl" className="flex items-center gap-2 hover:text-rail-yellow transition-colors">
            <Mail className="w-4 h-4" />
            <span>biuro@rail4.pl</span>
          </a>
          <div className="flex items-center gap-2 text-white/70">
            <MapPin className="w-4 h-4" />
            <span>Polska</span>
          </div>
        </div>
        <div className="text-white/70 text-xs">
          WSPARCIE TRANSPORTU KOLEJOWEGO
        </div>
      </div>
    </div>
  );
};

export default TopBar;
