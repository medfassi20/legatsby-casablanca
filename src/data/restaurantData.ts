export const restaurantInfo = {
  name: 'Le Gatsby',
  tagline: 'L\'Elégance et la Gourmandise au Cœur de Casablanca',
  address: 'Angle boulevard Sidi Mohamed Ben Abdellah et, Bd Sour Jdid, Casablanca 20020, Maroc',
  addressShort: 'Bd Sour Jdid, Casablanca 20020, Maroc',
  phone: '+212 7 00 11 01 10',
  phoneDisplay: '+212 7 00 11 01 10',
  hours: 'Ouvert 7j/7 : 08:00 – 00:00',
  hoursShort: '08:00 – 00:00',
  instagram: 'https://www.instagram.com/legatsbycasa/',
  mapsUrl: 'https://www.google.com/maps/place/Le+Gatsby/@33.6075822,-7.6298412,17z/data=!3m1!4b1!4m6!3m5!1s0xda7d329c2db4511:0x6ab1882aa194a034!8m2!3d33.6075822!4d-7.6298412!16s%2Fg%2F11fhr0x1vj?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D',
  mapsEmbed:
    'https://www.google.com/maps?q=Le+Gatsby&output=embed',
  copyright: `© ${new Date().getFullYear()} Le Gatsby. Tous droits réservés.`,
};

export const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À Propos', href: '#apropos' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Localisation', href: '#localisation' }
];

// Hero image — replace with your own photo at /images/hero-gatsby.jpg
// Photo Hero
export const heroImage = '/images/gallery.png';

export const galleryImages = [
  {
    src: '/images/gallery.png',
    alt: 'Ambiance feutrée et décoration Art Déco de la grande salle du restaurant Le Gatsby Casablanca',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: '/images/gallery-1.png',
    alt: 'Espace terrasse vitrée baignée de lumière naturelle du Café Restaurant Le Gatsby à Casablanca',
    span: '',
  },
  {
    src: '/images/gallery-2.png',
    alt: 'Étage lounge avec fauteuils confortables et décoration raffinée au Gatsby Casablanca Bd Sour Jdid',
    span: '',
  },
  {
    src: '/images/gallery-3.png',
    alt: 'Espace comptoir et tables élégantes au cadre tropical chic chez Le Gatsby Casablanca',
    span: '',
  },
  {
    src: '/images/gallery-4.png',
    alt: 'Tables dressées pour le déjeuner et dîner dans la salle principale du restaurant Le Gatsby',
    span: '',
  },
  {
    src: '/images/gallery-5.png',
    alt: 'Enseigne lumineuse dorée Le Gatsby entourée de feuillage tropical sur mur chic',
    span: 'lg:col-span-2',
  },
];
