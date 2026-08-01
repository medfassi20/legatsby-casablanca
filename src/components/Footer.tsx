import { Instagram, Phone, MapPin } from 'lucide-react';
import { restaurantInfo, navLinks } from '../data/restaurantData';

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Filtrer les liens pour retirer le lien vers le Menu s'il est encore présent dans navLinks
  const filteredNavLinks = navLinks.filter(
    (link) => link.href !== '#menu' && link.href !== '/menu'
  );

  return (
    <footer className="relative bg-charcoal-950 border-t border-gold-500/10 pt-16 pb-8">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold gold-gradient-text mb-4">
              Le Gatsby
            </h3>
            <p className="text-cream-100/60 text-sm leading-relaxed max-w-xs">
              Une expérience culinaire unique dans un cadre d'exception au cœur de Casablanca.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={restaurantInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cream-100/70 hover:text-gold-500 hover:border-gold-500/40 hover:-translate-y-0.5 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream-50 mb-5">
              Liens Rapides
            </h4>
            <ul className="space-y-3">
              {filteredNavLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm text-cream-100/60 hover:text-gold-500 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream-50 mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-cream-100/60 leading-relaxed">
                  {restaurantInfo.addressShort}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${restaurantInfo.phone?.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-sm text-cream-100/60 hover:text-gold-500 transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                  {restaurantInfo.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream-50 mb-5">
              Horaires
            </h4>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-3">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-green-300 font-medium">Ouvert maintenant</span>
            </div>
            <p className="text-sm text-cream-100/60 leading-relaxed">
              Tous les jours
              <br />
              {restaurantInfo.hoursShort}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-100/40 text-center sm:text-left">
            {restaurantInfo.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}