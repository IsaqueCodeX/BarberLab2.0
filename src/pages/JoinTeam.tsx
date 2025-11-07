import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Scissors, Users, TrendingUp, Heart } from 'lucide-react';
import { toast } from 'sonner';

const JoinTeam = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    
    // WhatsApp message
    const message = `Olá! Meu nome é ${name} e gostaria de fazer parte da equipe BarberLab.`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    toast.success('Redirecionando para o WhatsApp...');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-card">
          <div className="container mx-auto px-4 relative z-10">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
            
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
                Faça Parte da Equipe
              </h1>
              <p className="text-xl text-muted-foreground">
                Junte-se a nós e faça parte de uma equipe apaixonada pela arte da barbearia
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-heading font-bold text-center mb-12">
                Por Que Trabalhar Conosco?
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <Card>
                  <CardHeader>
                    <Scissors className="h-12 w-12 mb-4 text-primary" />
                    <CardTitle>Ambiente Profissional</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Equipamentos de primeira linha e ambiente moderno para você trabalhar
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Users className="h-12 w-12 mb-4 text-primary" />
                    <CardTitle>Equipe Unida</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Trabalhe com profissionais experientes e apaixonados
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <TrendingUp className="h-12 w-12 mb-4 text-primary" />
                    <CardTitle>Crescimento</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Oportunidades de desenvolvimento e capacitação constante
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Heart className="h-12 w-12 mb-4 text-primary" />
                    <CardTitle>Benefícios</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Comissões competitivas e benefícios para nossa equipe
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              {/* Application Form */}
              <div className="max-w-2xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Candidate-se Agora</CardTitle>
                    <CardDescription>
                      Preencha o formulário abaixo e entraremos em contato via WhatsApp
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Seu nome"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">WhatsApp *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(11) 99999-9999"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="experience">Experiência na área</Label>
                        <Textarea
                          id="experience"
                          name="experience"
                          placeholder="Conte-nos sobre sua experiência como barbeiro..."
                          rows={4}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="motivation">Por que quer trabalhar conosco?</Label>
                        <Textarea
                          id="motivation"
                          name="motivation"
                          placeholder="O que te motiva a fazer parte da equipe BarberLab?"
                          rows={4}
                        />
                      </div>

                      <Button 
                        type="submit"
                        size="lg" 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                      >
                        Enviar Candidatura via WhatsApp
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JoinTeam;
