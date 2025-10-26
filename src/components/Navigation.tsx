import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    // If we're not on the homepage, navigate to homepage with hash
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      // If we're on homepage, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false); // Close mobile menu
  };

  const handleHomeClick = () => {
    if (window.location.pathname !== '/') {
      window.location.href = '/';
    } else {
      // Scroll to top if already on homepage
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0A1A2F] border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Always goes to homepage */}
          <button 
            onClick={handleHomeClick}
            className="text-2xl font-bold text-[#D4AF37] playfaire_font hover:opacity-80 transition-opacity"
          >
            Legacy Guardians
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <button 
              onClick={handleHomeClick}
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('solutions')}
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              Solutions
            </button>
            <button 
              onClick={() => handleNavClick('how-we-work')}
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              How We Work
            </button>
            <button 
              onClick={() => handleNavClick('insights')}
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              Insights
            </button>
            <button 
              onClick={() => handleNavClick('family-offices')}
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              Family Offices & NRIs
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-[#0A1A2F] border-t border-[#D4AF37]/20 py-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={handleHomeClick}
                className="text-white hover:text-[#D4AF37] font-medium py-2 text-left transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('solutions')}
                className="text-white hover:text-[#D4AF37] font-medium py-2 text-left transition-colors"
              >
                Solutions
              </button>
              <button 
                onClick={() => handleNavClick('how-we-work')}
                className="text-white hover:text-[#D4AF37] font-medium py-2 text-left transition-colors"
              >
                How We Work
              </button>
              <button 
                onClick={() => handleNavClick('insights')}
                className="text-white hover:text-[#D4AF37] font-medium py-2 text-left transition-colors"
              >
                Insights
              </button>
              <button 
                onClick={() => handleNavClick('family-offices')}
                className="text-white hover:text-[#D4AF37] font-medium py-2 text-left transition-colors"
              >
                Family Offices & NRIs
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="text-white hover:text-[#D4AF37] font-medium py-2 text-left transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
