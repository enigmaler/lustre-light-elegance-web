
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getBestSellers } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const bestSellers = getBestSellers();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=800&fit=crop")'
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 fade-in">
            Timeless Elegance.
            <br />
            <span className="text-gold-300">Handcrafted for You.</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 fade-in opacity-90 max-w-2xl mx-auto">
            Discover our exquisite collection of luxury jewelry, where each piece tells a story of craftsmanship and beauty.
          </p>
          <Link to="/shop">
            <Button size="lg" className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 text-lg font-semibold fade-in hover-scale">
              Explore Collection
            </Button>
          </Link>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Best Sellers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our most cherished pieces, loved by customers worldwide for their exceptional beauty and craftsmanship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-gold-200/30">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-lg font-semibold mb-2 text-foreground">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-bold text-gold-600 mb-4">
                      ${product.price.toLocaleString()}
                    </p>
                    <div className="space-y-2">
                      <Link to={`/product/${product.id}`}>
                        <Button variant="outline" className="w-full border-gold-600 text-gold-600 hover:bg-gold-50">
                          View Details
                        </Button>
                      </Link>
                      <Button 
                        onClick={() => handleAddToCart(product)}
                        className="w-full bg-gold-600 hover:bg-gold-700 text-white"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-beige-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-6">
            About Lustre & Light
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Founded with a passion for exceptional craftsmanship, Lustre & Light creates jewelry that captures 
            life's most precious moments. Each piece in our collection is meticulously handcrafted using only 
            the finest materials, from ethically sourced diamonds to lustrous pearls and precious metals.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Our artisans bring decades of experience to every creation, ensuring that each piece not only 
            meets our exacting standards but also tells a unique story of beauty, elegance, and enduring quality.
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="border-gold-600 text-gold-600 hover:bg-gold-50">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
