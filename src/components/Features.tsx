import { Clock, MapPin, UtensilsCrossed } from 'lucide-react';

// Tableau des points forts défini directement ici
const features = [
  {
    icon: 'Clock',
    title: 'Service Continu',
    description: 'Ouvert 7 jours sur 7, de 08:00 à Minuit pour vous accueillir à tout moment de la journée.',
  },
  {
    icon: 'MapPin',
    title: 'Cadre d\'Exception',
    description: 'Idéalement situé au Boulevard Sour Jdid à Casablanca dans une atmosphère chic et raffinée.',
  },
  {
    icon: 'UtensilsCrossed',
    title: 'Menu & Pauses Gourmandes',
    description: 'Une sélection savoureuse pour vos petits-déjeuners, déjeuners, dîners et moments de détente.',
  },
];

const iconMap = {
  Clock: Clock,
  MapPin: MapPin,
  UtensilsCrossed: UtensilsCrossed,
} as const;

export default function Features() {
  return (
    <section id="apropos" className="relative py-24 lg:py-32 bg-charcoal-900">
      {/* Section header */}
      <div className="text-center max-w-2xl mx-auto section-padding mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-gold-500">
          Pourquoi nous choisir
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-cream-50">
          Une Expérience d'Exception
        </h2>
        <div className="deco-line mx-auto mt-6" />
      </div>

      {/* Feature cards */}
      <div className="section-padding grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {features.map((feature, idx) => {
          const Icon = iconMap[feature.icon as keyof typeof iconMap];
          return (
            <div
              key={feature.title}
              className="group card-glass p-8 lg:p-10 text-center hover:border-gold-500/30 transition-all duration-500 hover:-translate-y-1.5 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6 group-hover:bg-gold-500/20 group-hover:scale-110 transition-all duration-500">
                {Icon && <Icon className="w-7 h-7 text-gold-500" />}
              </div>
              <h3 className="font-serif text-xl lg:text-2xl font-semibold text-cream-50 mb-3">
                {feature.title}
              </h3>
              <p className="text-cream-100/70 text-sm lg:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}