import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-charcoal-900 text-cream-100 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;
