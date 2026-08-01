import { galleryImages } from '@/data/restaurantData';

export default function Gallery() {
  return (
    <section id="galerie" className="relative py-24 lg:py-32 bg-beige-50">
      {/* Section header */}
      <div className="text-center max-w-2xl mx-auto section-padding mb-16">
        <span className="text-xs font-bold tracking-widest uppercase text-olive-700">
          Galerie
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-beige-950">
          L'Atmosphère Le Gatsby
        </h2>
        <div className="w-16 h-0.5 bg-olive-600 mx-auto mt-6" />
        <p className="mt-6 text-beige-800 text-base lg:text-lg font-normal">
          Plongez dans l'ambiance feutrée et raffinée de notre établissement.
        </p>
      </div>

      {/* Gallery Layout */}
      <div className="section-padding max-w-6xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl border border-beige-300/80 bg-white shadow-sm hover:shadow-md transition-all duration-500"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-olive-950/85 via-olive-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className="h-px w-6 bg-olive-300" />
                  <p className="text-sm font-semibold text-beige-50">{img.alt}</p>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-olive-400/0 group-hover:border-olive-300/80 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
