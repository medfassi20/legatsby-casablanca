import { MapPin, Star } from 'lucide-react';
import { heroImage, restaurantInfo } from '@/data/restaurantData';

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image avec calque Vert Olive feutré (ombrage ciblé au centre) */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Le Gatsby restaurant ambiance"
          className="w-full h-full object-cover"
        />
        {/* Calque de contraste Vert Olive très sombre au centre pour détacher le texte */}
        <div className="absolute inset-0 bg-gradient-to-b from-olive-950/90 via-olive-950/75 to-beige-100" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Frame décorative Art Déco */}
      <div className="absolute inset-4 sm:inset-6 lg:inset-10 border border-amber-400/20 pointer-events-none" />
      <div className="absolute inset-5 sm:inset-7 lg:inset-11 border border-amber-400/10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 section-padding text-center pt-24 pb-16 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-olive-950/80 backdrop-blur-md border border-amber-400/30 mb-8 animate-fade-in-down">
          <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
          <span className="text-xs font-semibold tracking-widest uppercase text-beige-100">
            Casablanca · Art Déco & Gastronomie
          </span>
        </div>

        {/* Headline avec contraste optimal */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.15] text-white drop-shadow-md animate-fade-in-up">
          L'Élégance et la Gourmandise
          <br />
          {/* Dégradé doré éclatant avec ombre portante spécifique pour detacher le texte */}
          <span className="inline-block mt-2 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-100 bg-clip-text text-transparent filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            au Cœur de Casablanca
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg sm:text-xl text-beige-100/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:200ms] opacity-0 drop-shadow">
          {restaurantInfo.tagline}
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:400ms] opacity-0">
          <a href="#localisation" className="btn-gold w-full sm:w-auto">
            <MapPin className="w-5 h-5" />
            Découvrir le Lieu
          </a>
        </div>

        {/* Hours pill */}
        <div className="mt-12 inline-flex items-center gap-2 text-sm text-beige-200 animate-fade-in [animation-delay:600ms] opacity-0">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          {restaurantInfo.hours}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in [animation-delay:800ms] opacity-0">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase text-beige-300 font-semibold">Découvrir</span>
          <div className="w-px h-12 bg-gradient-to-b from-amber-400/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
