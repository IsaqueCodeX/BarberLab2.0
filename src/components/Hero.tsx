import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-barber.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Interior moderno da BarberLab"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-logo font-black mb-6 animate-fade-in">
          <span className="text-gradient">BarberLab</span>
          <br />
          <span className="text-foreground text-4xl md:text-5xl font-display italic mt-2 block">
            Onde a Tradição Encontra a Inovação
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          Transforme seu estilo com nossos especialistas. Do clássico ao contemporâneo.
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-lg px-8 py-6 animate-scale-in"
          onClick={() => document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Agende seu Horário
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
