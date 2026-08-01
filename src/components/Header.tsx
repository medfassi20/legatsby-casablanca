import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { navLinks, restaurantInfo } from '@/data/restaurantData';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-beige-50/95 backdrop-blur-md border-b border-olive-900/10 py-3 shadow-md'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <nav className="section-padding max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#accueil"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#accueil');
          }}
          className="group flex items-center gap-2"
        >
          <span
            className={`font-serif text-2xl sm:text-3xl font-bold tracking-wide transition-colors duration-300 ${
              scrolled ? 'text-olive-950' : 'text-white drop-shadow'
            }`}
          >
            Le Gatsby
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative text-base font-semibold tracking-wide transition-colors duration-300 group ${
                  scrolled
                    ? 'text-olive-900 hover:text-amber-700'
                    : 'text-beige-50 hover:text-amber-300 drop-shadow-sm'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${
                    scrolled ? 'bg-amber-700' : 'bg-amber-300'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Bouton Réserver une table - Correction Lisibilité */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${restaurantInfo.phone.replace(/\s/g, '')}`}
            className="hidden sm:flex items-center gap-2.5 bg-olive-950 hover:bg-black text-beige-50 font-bold text-sm py-2.5 px-6 rounded-full border border-amber-400/40 shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Phone className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-beige-50 whitespace-nowrap">Réserver une table</span>
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-colors ${
              scrolled ? 'text-olive-950 hover:text-amber-700' : 'text-white hover:text-amber-300'
            }`}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="section-padding pt-4 pb-6 bg-beige-50/98 backdrop-blur-xl border-t border-olive-900/10 shadow-lg">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block py-3 px-4 rounded-lg text-olive-950 font-semibold hover:bg-olive-900/10 transition-all duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${restaurantInfo.phone.replace(/\s/g, '')}`}
            className="flex items-center justify-center gap-2 w-full mt-4 bg-olive-950 text-beige-50 font-bold py-3 px-5 rounded-full shadow-md"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span className="text-beige-50">Réserver une table</span>
          </a>
        </div>
      </div>
    </header>
  );
}
