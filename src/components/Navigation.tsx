import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsOpen(false);
  };

  const handleHomeClick = () => {
    if (window.location.pathname !== '/') {
      window.location.href = '/';
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'home', handler: handleHomeClick },
    { label: 'Solutions', id: 'solutions' },
    { label: 'How We Work', id: 'how-we-work' },
    { label: 'Insights', id: 'insights' },
    { label: 'Family Offices & NRIs', id: 'family-offices' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0A1A2F] border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={handleHomeClick}
            className="text-2xl font-bold text-[#D4AF37] playfaire_font hover:opacity-80 transition-opacity focus:outline-none"
            aria-label="Go to homepage"
          >
            Legacy Governor
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 text-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={item.handler ? item.handler : () => handleNavClick(item.id)}
                className="text-white hover:text-[#D4AF37] transition-colors whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-[#0A1A2F] border-t border-[#D4AF37]/20">
            <div className="px-4 py-5 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={item.handler ? item.handler : () => handleNavClick(item.id)}
                  className="block w-full text-left text-white hover:text-[#D4AF37] font-medium py-3 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
