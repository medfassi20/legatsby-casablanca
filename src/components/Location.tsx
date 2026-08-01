import { Phone, MapPin, Clock, Navigation, Mail } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurantData';

export default function Location() {
  return (
    <section id="localisation" className="relative py-24 lg:py-32 bg-charcoal-950">
      {/* Section header */}
      <div className="text-center max-w-2xl mx-auto section-padding mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-gold-500">
          Localisation
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-cream-50">
          Nous Trouver
        </h2>
        <div className="deco-line mx-auto mt-6" />
      </div>

      <div className="section-padding max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Practical details */}
          <div className="flex flex-col gap-6">
            {/* Address card */}
            <div className="card-glass p-7 lg:p-8 hover:border-gold-500/20 transition-all duration-400">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-cream-50 mb-1">
                    Adresse
                  </h3>
                  <p className="text-cream-100/70 text-sm leading-relaxed">
                    {restaurantInfo.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone card */}
            <div className="card-glass p-7 lg:p-8 hover:border-gold-500/20 transition-all duration-400">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-cream-50 mb-1">
                    Téléphone
                  </h3>
                  <a
                    href={`tel:${restaurantInfo.phone.replace(/\s/g, '')}`}
                    className="text-cream-100/70 text-sm hover:text-gold-500 transition-colors"
                  >
                    {restaurantInfo.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Hours badge */}
            <div className="card-glass p-7 lg:p-8 hover:border-gold-500/20 transition-all duration-400">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-cream-50 mb-1">
                    Horaires
                  </h3>
                  <div className="inline-flex items-center gap-2 mt-1 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                    <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm text-green-300 font-medium">
                      {restaurantInfo.hours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href={`tel:${restaurantInfo.phone.replace(/\s/g, '')}`}
                className="btn-gold flex-1"
              >
                <Phone className="w-5 h-5" />
                Appeler
              </a>
              <a
                href={restaurantInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex-1"
              >
                <Navigation className="w-5 h-5" />
                Google Maps
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div className="relative min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden border border-white/10 group">
            <div className="absolute inset-0">
              <iframe
                title="Le Gatsby Casablanca — Carte"
                src={restaurantInfo.mapsEmbed}
                className="w-full h-full"
                style={{ border: 0, minHeight: '400px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            {/* Art Déco corner accents */}
            <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-gold-500/40 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-gold-500/40 pointer-events-none" />
          </div>
        </div>

        {/* Contact strip */}
      </div>
    </section>
  );
}
