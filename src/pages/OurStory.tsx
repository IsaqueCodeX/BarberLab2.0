import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import teamImage from '@/assets/team-atmosphere.jpg';

const OurStory = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={teamImage}
              alt="Equipe BarberLab"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/90" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
            
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
                Nossa História
              </h1>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-4">Uma Década de Excelência</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Fundada há mais de 10 anos, a BarberLab nasceu de uma paixão genuína pela arte da barbearia 
                  clássica e o desejo de criar um espaço onde homens modernos pudessem cuidar de sua aparência 
                  com o mais alto padrão de qualidade e profissionalismo.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold mb-4">Tradição e Inovação</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Combinamos técnicas tradicionais de barbeiros mestres com as últimas tendências e tecnologias 
                  do mercado. Cada corte, cada barba modelada, cada serviço é executado com precisão e cuidado, 
                  respeitando a individualidade de cada cliente.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nossa equipe é formada por profissionais altamente qualificados, apaixonados pelo que fazem 
                  e em constante atualização para oferecer sempre o melhor.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold mb-4">Mais Que um Corte</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Na BarberLab, acreditamos que cuidar da aparência vai além do visual. É sobre autoestima, 
                  confiança e bem-estar. Por isso, criamos um ambiente acolhedor e masculino, onde nossos 
                  clientes podem relaxar, conversar e sair renovados.
                </p>
              </div>

              <div className="pt-8">
                <h2 className="text-3xl font-heading font-bold mb-6">Nossos Valores</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 bg-background rounded-lg border border-border">
                    <h3 className="text-xl font-bold mb-2">Excelência</h3>
                    <p className="text-muted-foreground">
                      Comprometimento com a qualidade em cada detalhe
                    </p>
                  </div>
                  <div className="p-6 bg-background rounded-lg border border-border">
                    <h3 className="text-xl font-bold mb-2">Respeito</h3>
                    <p className="text-muted-foreground">
                      Valorização da individualidade de cada cliente
                    </p>
                  </div>
                  <div className="p-6 bg-background rounded-lg border border-border">
                    <h3 className="text-xl font-bold mb-2">Inovação</h3>
                    <p className="text-muted-foreground">
                      Sempre atentos às últimas tendências
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-8">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                  onClick={() => navigate('/#agendamento')}
                >
                  Agende Seu Horário
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurStory;
