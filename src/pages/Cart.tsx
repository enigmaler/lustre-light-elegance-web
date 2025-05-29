
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center py-16 px-4 luxury-gradient">
        <div className="text-center max-w-md mx-auto">
          <ShoppingBag className="w-20 h-20 text-gold-500 mx-auto mb-8" />
          <h1 className="font-playfair text-4xl font-bold text-charcoal-800 mb-6">
            Your cart is empty
          </h1>
          <p className="text-charcoal-600 mb-8 text-lg">
            Discover our beautiful collection of handcrafted jewelry and find the perfect piece for you.
          </p>
          <Link to="/shop">
            <Button className="gold-gradient text-white px-10 py-4 text-lg luxury-shadow">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 luxury-gradient">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-playfair text-4xl font-bold text-charcoal-800 mb-8">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <Card key={`${item.id}-${item.variant || 'default'}`} className="border-gold-200/30 luxury-shadow">
                <CardContent className="p-6 velvet-texture">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-32 h-32 object-cover rounded-lg luxury-shadow"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-playfair text-xl font-semibold text-charcoal-800 mb-2">
                        {item.name}
                      </h3>
                      {item.variant && (
                        <p className="text-sm text-charcoal-500 mb-2">
                          Size: {item.variant}
                        </p>
                      )}
                      <p className="text-2xl font-bold text-gold-600 mb-4">
                        ${item.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end space-y-4">
                      <div className="flex items-center space-x-3">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-10 w-10 border-gold-300 hover:bg-gold-50"
                          onClick={() => updateQuantity(`${item.id}-${item.variant || 'default'}`, item.quantity - 1)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="text-lg font-semibold w-12 text-center text-charcoal-800">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-10 w-10 border-gold-300 hover:bg-gold-50"
                          onClick={() => updateQuantity(`${item.id}-${item.variant || 'default'}`, item.quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(`${item.id}-${item.variant || 'default'}`)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="border-gold-200/30 luxury-shadow sticky top-24">
              <CardContent className="p-6 velvet-texture">
                <h2 className="font-playfair text-2xl font-bold text-charcoal-800 mb-6">
                  Order Summary
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-lg">
                    <span className="text-charcoal-600">Subtotal</span>
                    <span className="text-charcoal-800 font-semibold">${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-charcoal-600">Tax</span>
                    <span className="text-charcoal-800 font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gold-200 pt-4">
                    <div className="flex justify-between font-bold text-xl">
                      <span className="text-charcoal-800">Total</span>
                      <span className="text-gold-600">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <Link to="/checkout" className="block mt-8">
                  <Button className="w-full gold-gradient text-white py-4 text-lg luxury-shadow">
                    Proceed to Checkout
                  </Button>
                </Link>
                <Link to="/shop" className="block mt-4">
                  <Button variant="outline" className="w-full border-gold-600 text-gold-600 hover:bg-gold-50">
                    Continue Shopping
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
