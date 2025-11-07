import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pricingTiers = [
  {
    name: 'Básico',
    price: 'R$ 45',
    description: 'Perfeito para um visual rápido e profissional',
    features: [
      'Corte de cabelo clássico',
      'Acabamento com navalha',
      'Finalização com produtos premium',
      'Lavagem incluída'
    ]
  },
  {
    name: 'Premium',
    price: 'R$ 85',
    description: 'A experiência completa para o homem moderno',
    features: [
      'Corte de cabelo personalizado',
      'Tratamento de barba completo',
      'Massagem relaxante no couro cabeludo',
      'Produtos premium incluídos',
      'Bebida de cortesia',
      'Toalha quente e aromaterapia'
    ],
    highlighted: true
  },
  {
    name: 'Royal',
    price: 'R$ 150',
    description: 'O máximo em sofisticação e cuidado pessoal',
    features: [
      'Tudo do plano Premium',
      'Tratamento capilar profundo',
      'Design de sobrancelhas',
      'Massagem facial relaxante',
      'Produtos exclusivos para levar',
      'Agendamento prioritário',
      'Ambiente VIP reservado'
    ]
  }
];

const Pricing = () => {
  return (
    <section id="precos" className="relative w-full min-h-screen bg-background flex flex-col items-center justify-center py-20 px-4 md:px-8">
      <div className="relative z-10 flex flex-col items-center text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Nossos Preços
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Escolha o plano ideal para você e experimente o melhor em cuidado masculino
        </p>
      </div>

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {pricingTiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl p-8 ${
              tier.highlighted
                ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary'
                : 'bg-card border border-border'
            } transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
          >
            {tier.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                Mais Popular
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="text-2xl font-heading font-bold mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-4xl font-bold text-gradient">{tier.price}</span>
                <span className="text-muted-foreground">/serviço</span>
              </div>
              <p className="text-muted-foreground text-sm">{tier.description}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
              onClick={() => document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Agendar Agora
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
