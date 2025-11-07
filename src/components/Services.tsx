import { Button } from '@/components/ui/button';
import { GalleryCard } from '@/components/ui/gallery-card';
import fadeImage from '@/assets/service-fade.jpg';
import beardStylingImage from '@/assets/service-beard-styling.jpg';
import treatmentImage from '@/assets/service-treatment-men.jpg';
import classicCutImage from '@/assets/service-classic-cut.jpg';
import colorImage from '@/assets/service-color.jpg';
import completeImage from '@/assets/service-complete.jpg';

const services = [
  {
    title: 'Corte Fade',
    category: 'O clássico moderno',
    image: fadeImage,
  },
  {
    title: 'Barba Estilizada',
    category: 'Modelagem completa',
    image: beardStylingImage,
  },
  {
    title: 'Tratamento Capilar',
    category: 'Cuidado premium',
    image: treatmentImage,
  },
  {
    title: 'Corte Social',
    category: 'Elegância profissional',
    image: classicCutImage,
  },
  {
    title: 'Coloração',
    category: 'Estilo ousado',
    image: colorImage,
  },
  {
    title: 'Pacote Completo',
    category: 'Experiência total',
    image: completeImage,
  },
];

const Services = () => {
  return (
    <section id="servicos" className="relative w-full min-h-screen bg-background flex flex-col items-center justify-center py-20 px-4 md:px-8">
      <div className="relative z-10 flex flex-col items-center text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Nossos Serviços
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Serviços exclusivos para o homem moderno que valoriza estilo e qualidade
        </p>
      </div>

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => (
          <GalleryCard
            key={service.title}
            title={service.title}
            category={service.category}
            image={service.image}
            index={index}
          />
        ))}
      </div>

      <div className="text-center">
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
          onClick={() => document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Agendar Agora
        </Button>
      </div>
    </section>
  );
};

export default Services;
