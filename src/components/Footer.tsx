import logo from "@/assets/rail4-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-rail-dark border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Rail4" className="h-10 bg-white rounded p-1" />
            <span className="text-gray-400">
              Wsparcie Transportu Kolejowego
            </span>
          </div>
          
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Rail4. Wszystkie prawa zastrzeżone.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
