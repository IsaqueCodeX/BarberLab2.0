import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import pomadeImg from '@/assets/product-pomade.jpg';
import beardOilImg from '@/assets/product-beard-oil.jpg';
import shampooImg from '@/assets/product-shampoo.jpg';

const products = [
  {
    id: 1,
    name: 'Pomada Modeladora Premium',
    price: 'R$ 89,90',
    image: pomadeImg,
    description: 'Fixação forte e acabamento brilhante'
  },
  {
    id: 2,
    name: 'Óleo para Barba',
    price: 'R$ 69,90',
    image: beardOilImg,
    description: 'Hidratação profunda e crescimento saudável'
  },
  {
    id: 3,
    name: 'Shampoo Masculino',
    price: 'R$ 49,90',
    image: shampooImg,
    description: 'Limpeza profunda e revitalização'
  }
];

const Shop = () => {
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
            
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
                Loja BarberLab
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Produtos premium para cuidados masculinos selecionados pelos nossos especialistas.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {products.map((product) => (
                  <div key={product.id} className="bg-card rounded-lg border border-border overflow-hidden group hover:shadow-lg transition-shadow">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                        <Button size="sm">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Adicionar
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 bg-card p-8 rounded-lg border border-border text-center">
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Frete Grátis para São Paulo
                </h2>
                <p className="text-muted-foreground mb-6">
                  Em compras acima de R$ 150,00
                </p>
                <Button size="lg">
                  Ver Mais Produtos
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

export default Shop;
