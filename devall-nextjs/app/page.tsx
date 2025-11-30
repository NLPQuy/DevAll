import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import MapleLeaves from '@/components/MapleLeaves';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      {/* Falling Maple Leaves Animation */}
      <MapleLeaves />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Sections */}
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
