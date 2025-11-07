import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, GraduationCap, BookOpen, Video, Award } from 'lucide-react';

const Learning = () => {
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
                Central de Aprendizagem
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Aprenda as melhores técnicas de barbearia com nossos profissionais experientes.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-card rounded-lg border border-border">
                  <GraduationCap className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Cursos Profissionais</h3>
                  <p className="text-muted-foreground">
                    Cursos completos de barbearia, do básico ao avançado.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-lg border border-border">
                  <Video className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Vídeo-Aulas</h3>
                  <p className="text-muted-foreground">
                    Aprenda com tutoriais em vídeo disponíveis 24/7.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-lg border border-border">
                  <BookOpen className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Material Didático</h3>
                  <p className="text-muted-foreground">
                    Apostilas e materiais de apoio para download.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-lg border border-border">
                  <Award className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Certificação</h3>
                  <p className="text-muted-foreground">
                    Receba certificado reconhecido ao concluir os cursos.
                  </p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <h2 className="text-2xl font-heading font-bold mb-6">Cursos Disponíveis</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <h3 className="font-bold mb-2">Barbearia Básica</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Fundamentos da barbearia clássica e moderna.
                    </p>
                    <p className="text-primary font-bold">40 horas | R$ 890</p>
                  </div>

                  <div className="p-4 bg-background rounded-lg border border-border">
                    <h3 className="font-bold mb-2">Técnicas de Fade</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Domine todos os tipos de degradê e fade.
                    </p>
                    <p className="text-primary font-bold">20 horas | R$ 490</p>
                  </div>

                  <div className="p-4 bg-background rounded-lg border border-border">
                    <h3 className="font-bold mb-2">Barba Profissional</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Modelagem, design e cuidados com barba.
                    </p>
                    <p className="text-primary font-bold">15 horas | R$ 390</p>
                  </div>

                  <div className="p-4 bg-background rounded-lg border border-border">
                    <h3 className="font-bold mb-2">Gestão de Barbearia</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Aprenda a gerenciar e expandir seu negócio.
                    </p>
                    <p className="text-primary font-bold">25 horas | R$ 690</p>
                  </div>
                </div>

                <Button size="lg" className="w-full md:w-auto">
                  Ver Todos os Cursos
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

export default Learning;
