import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Appointment from '@/components/Appointment';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Appointment />
        <Services />
        <Pricing />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
