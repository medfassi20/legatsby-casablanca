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
    <section id="apropos" className="relative py-24 lg:py-32 bg-beige-100">
      {/* Section header */}
      <div className="text-center max-w-2xl mx-auto section-padding mb-16">
        <span className="text-xs font-bold tracking-widest uppercase text-olive-700">
          Pourquoi nous choisir
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-beige-950">
          Une Expérience d'Exception
        </h2>
        <div className="w-16 h-0.5 bg-olive-600 mx-auto mt-6" />
      </div>

      {/* Feature cards */}
      <div className="section-padding grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {features.map((feature, idx) => {
          const Icon = iconMap[feature.icon as keyof typeof iconMap];
          return (
            <div
              key={feature.title}
              className="group bg-white/90 backdrop-blur-md border border-beige-300/80 rounded-2xl p-8 lg:p-10 text-center shadow-sm hover:shadow-md hover:border-olive-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-olive-900/10 border border-olive-700/20 mb-6 group-hover:bg-olive-900 transition-all duration-300">
                {Icon && <Icon className="w-7 h-7 text-olive-800 group-hover:text-beige-100 transition-colors" />}
              </div>

              {/* Titre ultra-lisible */}
              <h3 className="font-serif text-xl lg:text-2xl font-bold text-beige-950 mb-3">
                {feature.title}
              </h3>

              {/* Texte de description bien contrasté */}
              <p className="text-beige-800 text-sm lg:text-base leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
