import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Package, TrendingUp, Users, Award } from 'lucide-react';

const Wholesale = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-32 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
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
                Atacado
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Seja nosso parceiro comercial e leve a qualidade BarberLab para seu negócio.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-card rounded-lg border border-border">
                  <Package className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Produtos Premium</h3>
                  <p className="text-muted-foreground">
                    Linha completa de produtos profissionais para barbearias e salões.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-lg border border-border">
                  <TrendingUp className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Preços Competitivos</h3>
                  <p className="text-muted-foreground">
                    Condições especiais para parceiros e descontos progressivos.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-lg border border-border">
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Suporte Dedicado</h3>
                  <p className="text-muted-foreground">
                    Equipe especializada para atender suas necessidades comerciais.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-lg border border-border">
                  <Award className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Qualidade Garantida</h3>
                  <p className="text-muted-foreground">
                    Produtos testados e aprovados por profissionais da área.
                  </p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <h2 className="text-2xl font-heading font-bold mb-6">Como se tornar um parceiro?</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Entre em contato</h3>
                      <p className="text-muted-foreground">
                        Envie um email para atacado@barberlab.com.br
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Análise de cadastro</h3>
                      <p className="text-muted-foreground">
                        Nossa equipe irá analisar sua solicitação em até 48h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Comece a comprar</h3>
                      <p className="text-muted-foreground">
                        Acesso à plataforma de pedidos e catálogo completo
                      </p>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full md:w-auto">
                  Solicitar Parceria
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

export default Wholesale;
