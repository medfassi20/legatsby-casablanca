import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { navLinks, restaurantInfo } from '@/data/restaurantData';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-beige-50/90 backdrop-blur-xl border-b border-beige-200 py-3 shadow-sm text-beige-900'
          : 'bg-transparent py-5 text-white'
      }`}
    >
      <nav className="section-padding flex items-center justify-between">
        {/* Logo */}
        <a
          href="#accueil"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#accueil');
          }}
          className="group flex items-center gap-2"
        >
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wide">
            <span className={scrolled ? 'text-olive-500' : 'text-white'}>Le Gatsby</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative text-sm font-medium transition-colors duration-300 group ${
                  scrolled ? 'text-beige-900/80 hover:text-olive-500' : 'text-beige-100 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-olive-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${restaurantInfo.phone.replace(/\s/g, '')}`}
            className="hidden sm:flex btn-gold text-sm py-2.5 px-5"
          >
            <Phone className="w-4 h-4" />
            Réserver une table
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-olive-500' : 'text-white'}`}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="section-padding pt-4 pb-6 bg-beige-50/95 backdrop-blur-xl border-t border-beige-200">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block py-3 px-4 rounded-lg text-beige-900 hover:text-olive-500 hover:bg-beige-100 transition-all duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${restaurantInfo.phone.replace(/\s/g, '')}`}
            className="btn-gold w-full mt-4"
          >
            <Phone className="w-4 h-4" />
            Réserver une table
          </a>
        </div>
      </div>
    </header>
  );
}
