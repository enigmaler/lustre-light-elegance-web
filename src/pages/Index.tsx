
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
      description: (
        <div className="flex flex-col space-y-2">
          <span>{product.name} has been added to your cart.</span>
          <Link to="/cart" className="text-gold-600 hover:text-gold-700 font-medium">
            Go to Cart →
          </Link>
        </div>
      ),
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
          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 fade-in">
            Jewelry That
            <br />
            <span className="gold-gradient bg-clip-text text-transparent">Speaks Luxury</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 fade-in opacity-90 max-w-2xl mx-auto">
            At Altyn, we craft more than jewelry — we create moments of timeless beauty.
          </p>
          <Link to="/shop">
            <Button size="lg" className="gold-gradient text-white px-10 py-6 text-lg font-semibold fade-in hover-scale shine-effect luxury-shadow">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 velvet-texture">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-charcoal-800 mb-6">
              Best Sellers
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Our most cherished pieces, beloved by customers worldwide for their exceptional beauty and craftsmanship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product) => (
              <Card key={product.id} className="group hover:shadow-2xl transition-all duration-500 border-gold-200/30 luxury-shadow shine-effect">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 velvet-texture">
                    <h3 className="font-playfair text-lg font-semibold mb-2 text-charcoal-800">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-bold text-gold-600 mb-4">
                      ${product.price.toLocaleString()}
                    </p>
                    <div className="space-y-2">
                      <Link to={`/product/${product.id}`}>
                        <Button variant="outline" className="w-full border-gold-600 text-gold-600 hover:bg-gold-50 transition-all duration-300">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 luxury-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-charcoal-800 mb-8">
            About Altyn
          </h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gold-700 leading-relaxed mb-8 font-medium">
              "At Altyn, we craft more than jewelry — we create moments of timeless beauty."
            </p>
            <p className="text-lg text-charcoal-600 leading-relaxed mb-8">
              Founded with a passion for exceptional craftsmanship, Altyn creates jewelry that captures 
              life's most precious moments. Each piece in our collection is meticulously handcrafted using only 
              the finest materials, from ethically sourced diamonds to lustrous pearls and precious metals.
            </p>
            <p className="text-lg text-charcoal-600 leading-relaxed mb-8">
              Our artisans bring decades of experience to every creation, ensuring that each piece not only 
              meets our exacting standards but also tells a unique story of beauty, elegance, and enduring quality.
            </p>
          </div>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="border-gold-600 text-gold-600 hover:bg-gold-50 px-8 py-3">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
