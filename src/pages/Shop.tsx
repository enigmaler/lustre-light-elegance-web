
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products, getProductsByCategory } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'rings', name: 'Rings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'bracelets', name: 'Bracelets' }
  ];

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setFilteredProducts(getProductsByCategory(categoryId));
  };

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
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl font-bold text-foreground mb-4">
            Our Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our complete range of handcrafted luxury jewelry, each piece designed to celebrate life's special moments.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-2 ${
                selectedCategory === category.id 
                  ? 'bg-gold-600 hover:bg-gold-700 text-white' 
                  : 'border-gold-600 text-gold-600 hover:bg-gold-50'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-gold-200/30">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.isBestSeller && (
                    <Badge className="absolute top-3 left-3 bg-gold-600 hover:bg-gold-700">
                      Best Seller
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-lg font-semibold mb-2 text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 capitalize">
                    {product.category}
                  </p>
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

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
