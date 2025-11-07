import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, MapPin, Search, Phone } from 'lucide-react';
import { useState } from 'react';

const Appointment = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');

  const handleWhatsAppClick = () => {
    const whatsappNumber = '5511999999999'; // Substitua pelo número real da barbearia
    const message = encodeURIComponent(
      `Olá! Gostaria de agendar um horário na BarberLab.\n\nNome: ${name}\nTelefone: ${phone}\nServiço: ${service || 'A definir'}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="agendamento" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Agende seu Horário
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Reserve seu momento de transformação. Fácil, rápido e conveniente.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-lg border border-border">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione a unidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sp-centro">São Paulo - Centro</SelectItem>
                  <SelectItem value="sp-oeste">São Paulo - Zona Oeste</SelectItem>
                  <SelectItem value="sp-sul">São Paulo - Zona Sul</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-3">
              <Search className="w-5 h-5 text-primary" />
              <Input
                placeholder="Seu nome completo"
                className="w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <Input
                placeholder="Seu telefone/WhatsApp"
                className="w-full"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-primary" />
              <Select value={service} onValueChange={setService}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fade">Corte Fade</SelectItem>
                  <SelectItem value="beard">Barba Estilizada</SelectItem>
                  <SelectItem value="treatment">Tratamento Capilar</SelectItem>
                  <SelectItem value="classic">Corte Social</SelectItem>
                  <SelectItem value="color">Coloração</SelectItem>
                  <SelectItem value="complete">Pacote Completo</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold" 
              size="lg"
              onClick={handleWhatsAppClick}
              disabled={!name || !phone}
            >
              <Phone className="mr-2 h-5 w-5" />
              Agendar via WhatsApp
            </Button>
          </div>

          <p className="text-sm text-muted-foreground text-center mt-6">
            Atendemos apenas homens. Preferimos agendamento, mas também recebemos clientes sem hora marcada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
