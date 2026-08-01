import { BookOpen, MapPin, Star } from 'lucide-react';
import { heroImage, restaurantInfo } from '@/data/restaurantData';

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Le Gatsby restaurant ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/70 via-charcoal-900/60 to-charcoal-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/80 via-transparent to-charcoal-900/40" />
      </div>

      {/* Decorative Art Déco frame */}
      <div className="absolute inset-4 sm:inset-6 lg:inset-10 border border-gold-500/20 pointer-events-none" />
      <div className="absolute inset-5 sm:inset-7 lg:inset-11 border border-gold-500/10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 section-padding text-center pt-24 pb-16 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-gold-500/30 mb-8 animate-fade-in-down">
          <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
          <span className="text-xs font-medium tracking-widest uppercase text-gold-500">
            Casablanca · Art Déco & Gastronomie
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] text-cream-50 text-shadow-lg animate-fade-in-up">
          L'Elégance et la Gourmandise
          <br />
          <span className="gold-gradient-text">au Cœur de Casablanca</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg sm:text-xl text-cream-100/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:200ms] opacity-0">
          {restaurantInfo.tagline}
        </p>

        {/* Dual buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:400ms] opacity-0">
          <a href="#localisation" className="btn-gold w-full sm:w-auto">
            <MapPin className="w-5 h-5" />
            Nous Trouver
          </a>
        </div>

        {/* Hours pill */}
        <div className="mt-12 inline-flex items-center gap-2 text-sm text-cream-100/60 animate-fade-in [animation-delay:600ms] opacity-0">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          {restaurantInfo.hours}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in [animation-delay:800ms] opacity-0">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase text-cream-100/40">Découvrir</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold-500/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
