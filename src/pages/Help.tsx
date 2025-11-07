import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Help = () => {
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
                Ajuda
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Estamos aqui para ajudar você. Entre em contato conosco.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-card rounded-lg border border-border">
                  <Mail className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-muted-foreground">contato@barberlab.com.br</p>
                </div>

                <div className="p-6 bg-card rounded-lg border border-border">
                  <Phone className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Telefone</h3>
                  <p className="text-muted-foreground">(11) 9999-9999</p>
                </div>

                <div className="p-6 bg-card rounded-lg border border-border">
                  <MapPin className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Endereço</h3>
                  <p className="text-muted-foreground">Av. Paulista, 1000 - São Paulo, SP</p>
                </div>

                <div className="p-6 bg-card rounded-lg border border-border">
                  <Clock className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Horário</h3>
                  <p className="text-muted-foreground">Seg-Sex: 9h-20h | Sáb: 9h-18h</p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <h2 className="text-2xl font-heading font-bold mb-6">Perguntas Frequentes</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-2">Como faço para agendar?</h3>
                    <p className="text-muted-foreground">
                      Você pode agendar através do nosso site na seção de agendamento ou pelo WhatsApp.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold mb-2">Posso cancelar meu agendamento?</h3>
                    <p className="text-muted-foreground">
                      Sim, você pode cancelar com até 3 horas de antecedência sem custos.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold mb-2">Vocês aceitam cartão?</h3>
                    <p className="text-muted-foreground">
                      Sim, aceitamos todas as formas de pagamento: dinheiro, débito, crédito e PIX.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Help;
