
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getProductById } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Minus, Plus } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : null;
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center luxury-gradient">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-charcoal-800">Product not found</h1>
          <Link to="/shop">
            <Button className="gold-gradient text-white">Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
      variant: selectedVariant || undefined
    });
    
    toast({
      title: "Added to Cart",
      description: (
        <div className="flex flex-col space-y-2">
          <span>{quantity} {product.name} has been added to your cart.</span>
          <Link to="/cart" className="text-gold-600 hover:text-gold-700 font-medium">
            Go to Cart →
          </Link>
        </div>
      ),
    });
  };

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 luxury-gradient">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link to="/shop" className="inline-flex items-center text-gold-600 hover:text-gold-700 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-white luxury-shadow shine-effect">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover hover-scale cursor-zoom-in"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                      selectedImage === index ? 'border-gold-500 luxury-shadow' : 'border-gold-200 hover:border-gold-400'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-8 velvet-texture p-8 rounded-lg luxury-shadow">
            <div>
              {product.isBestSeller && (
                <Badge className="mb-4 gold-gradient text-white">
                  Best Seller
                </Badge>
              )}
              <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-charcoal-800 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-charcoal-500 capitalize mb-6">
                {product.category}
              </p>
              <p className="text-4xl font-bold text-gold-600">
                ${product.price.toLocaleString()}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-charcoal-800">Description</h3>
              <p className="text-charcoal-600 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-charcoal-800">Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-charcoal-600">
                    <span className="w-2 h-2 bg-gold-500 rounded-full mr-4"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-4 text-charcoal-800">Size</h3>
                <Select value={selectedVariant} onValueChange={setSelectedVariant}>
                  <SelectTrigger className="w-full border-gold-300 focus:border-gold-500">
                    <SelectValue placeholder="Select a size" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.variants.map((variant) => (
                      <SelectItem key={variant} value={variant}>
                        {variant}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Quantity Selector */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-charcoal-800">Quantity</h3>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="border-gold-300 hover:bg-gold-50"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="text-xl font-semibold w-12 text-center text-charcoal-800">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(1)}
                  className="border-gold-300 hover:bg-gold-50"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              size="lg"
              className="w-full gold-gradient text-white text-xl py-6 luxury-shadow hover:shadow-2xl transition-all duration-300"
              disabled={product.variants && product.variants.length > 0 && !selectedVariant}
            >
              Add to Cart - ${(product.price * quantity).toLocaleString()}
            </Button>

            {product.variants && product.variants.length > 0 && !selectedVariant && (
              <p className="text-sm text-red-600 text-center">
                Please select a size before adding to cart
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
