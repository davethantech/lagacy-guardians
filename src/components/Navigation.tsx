import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0A1A2F] border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-[#D4AF37] playfaire_font">
            Legacy Guardians
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/" className="text-white hover:text-[#D4AF37] transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-[#D4AF37] transition-colors">
              About
            </Link>
            <a href="/#solutions" className="text-white hover:text-[#D4AF37] transition-colors">
              Solutions
            </a>
            <a href="/#insights" className="text-white hover:text-[#D4AF37] transition-colors">
              Insights
            </a>
            <a href="/#family-offices" className="text-white hover:text-[#D4AF37] transition-colors">
              Family Offices & NRIs
            </a>
            <a href="/#contact" className="text-white hover:text-[#D4AF37] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
