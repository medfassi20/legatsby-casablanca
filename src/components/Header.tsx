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
          ? 'bg-charcoal-900/80 backdrop-blur-xl border-b border-gold-500/10 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
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
            <span className="gold-gradient-text">Le Gatsby</span>
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
                className="relative text-sm font-medium text-cream-100/80 hover:text-gold-500 transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
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
            className="lg:hidden p-2 text-gold-500 hover:text-gold-400 transition-colors"
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
        <div className="section-padding pt-4 pb-6 bg-charcoal-900/95 backdrop-blur-xl border-t border-gold-500/10">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block py-3 px-4 rounded-lg text-cream-100/90 hover:text-gold-500 hover:bg-white/5 transition-all duration-300"
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
