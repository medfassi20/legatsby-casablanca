import { Clock, MapPin, UtensilsCrossed } from 'lucide-react';

const features = [
  {
    icon: 'Clock',
    title: 'Service Continu',
    description: 'Ouvert 7 jours sur 7, de 08:00 à Minuit pour vous accueillir à tout moment de la journée.',
  },
  {
    icon: 'MapPin',
    title: "Cadre d'Exception",
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
    <section id="apropos" className="relative py-24 lg:py-32 bg-olive-900 text-beige-100">
      {/* Section header */}
      <div className="text-center max-w-2xl mx-auto section-padding mb-16">
        <span className="text-xs font-bold tracking-widest uppercase text-amber-300">
          Pourquoi nous choisir
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-beige-50">
          Une Expérience d'Exception
        </h2>
        <div className="w-16 h-0.5 bg-amber-400 mx-auto mt-6" />
      </div>

      {/* Feature cards avec fond vert olive chic et texte beige */}
      <div className="section-padding grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {features.map((feature, idx) => {
          const Icon = iconMap[feature.icon as keyof typeof iconMap];
          return (
            <div
              key={feature.title}
              className="group bg-olive-950/60 backdrop-blur-md border border-olive-700/50 rounded-2xl p-8 lg:p-10 text-center shadow-lg hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-olive-800/80 border border-amber-400/30 mb-6 group-hover:bg-amber-400 transition-all duration-300">
                {Icon && <Icon className="w-7 h-7 text-amber-300 group-hover:text-olive-950 transition-colors" />}
              </div>

              {/* Titre */}
              <h3 className="font-serif text-xl lg:text-2xl font-bold text-beige-50 mb-3">
                {feature.title}
              </h3>

              {/* Texte */}
              <p className="text-beige-200/80 text-sm lg:text-base leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
