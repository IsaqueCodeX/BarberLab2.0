import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import teamImage from '@/assets/team-atmosphere.jpg';

const About = () => {
  const navigate = useNavigate();

  return (
    <section id="sobre" className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={teamImage}
          alt="Equipe BarberLab"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-display italic text-foreground mb-6">
            BarberLab: Mais que um Corte, uma Experiência
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Há mais de uma década, combinamos técnicas tradicionais com as últimas tendências 
            para oferecer não apenas um serviço, mas uma transformação completa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => navigate('/nossa-historia')}
            >
              Nossa História
            </Button>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
              onClick={() => navigate('/junte-se')}
            >
              Faça Parte da Equipe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
