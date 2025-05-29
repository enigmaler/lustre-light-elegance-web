
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products, getProductsByCategory } from '@/data/products';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(products);

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

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 luxury-gradient">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl font-bold text-charcoal-800 mb-6">
            Our Collection
          </h1>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
            Discover our complete range of handcrafted luxury jewelry, each piece designed to celebrate life's special moments.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-8 py-3 transition-all duration-300 ${
                selectedCategory === category.id 
                  ? 'gold-gradient text-white luxury-shadow' 
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
            <Card key={product.id} className="group hover:shadow-2xl transition-all duration-500 border-gold-200/30 luxury-shadow shine-effect">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {product.isBestSeller && (
                    <Badge className="absolute top-3 left-3 gold-gradient text-white">
                      Best Seller
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 velvet-texture">
                  <h3 className="font-playfair text-lg font-semibold mb-2 text-charcoal-800">
                    {product.name}
                  </h3>
                  <p className="text-sm text-charcoal-500 mb-3 capitalize">
                    {product.category}
                  </p>
                  <p className="text-2xl font-bold text-gold-600 mb-4">
                    ${product.price.toLocaleString()}
                  </p>
                  <div className="space-y-2">
                    <Link to={`/product/${product.id}`}>
                      <Button className="w-full gold-gradient text-white hover:shadow-lg transition-all duration-300">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-charcoal-500">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
