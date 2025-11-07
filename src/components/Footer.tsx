import { Instagram, Facebook, Twitter, Youtube, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-gradient mb-4">BarberLab</h3>
            <p className="text-muted-foreground">
              Onde a tradição encontra a inovação no seu estilo.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-bold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#agendamento" className="text-muted-foreground hover:text-primary transition-colors">
                  Agendamento
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="/loja" className="text-muted-foreground hover:text-primary transition-colors">
                  Loja
                </a>
              </li>
              <li>
                <a href="/junte-se" className="text-muted-foreground hover:text-primary transition-colors">
                  Carreiras
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <a href="/nossa-historia" className="text-muted-foreground hover:text-primary transition-colors">
                  Nossa História
                </a>
              </li>
              <li>
                <a href="/ajuda" className="text-muted-foreground hover:text-primary transition-colors">
                  Ajuda
                </a>
              </li>
              <li>
                <a href="/atacado" className="text-muted-foreground hover:text-primary transition-colors">
                  Atacado
                </a>
              </li>
              <li>
                <a href="/aprendizagem" className="text-muted-foreground hover:text-primary transition-colors">
                  Central de Aprendizagem
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 BarberLab. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Termos
              </a>
            </div>
          </div>

          {/* Developer */}
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-muted-foreground text-sm">
              Desenvolvido por <span className="font-semibold text-foreground">Isaque Santos</span>
            </p>
            <p className="text-muted-foreground text-xs">Desenvolvedor Full-Stack</p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/isaque-santos-720b8b15a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/IsaqueCodeX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
