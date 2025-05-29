
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center py-16 px-4">
        <div className="text-center max-w-md mx-auto">
          <ShoppingBag className="w-16 h-16 text-gold-600 mx-auto mb-6" />
          <h1 className="font-playfair text-3xl font-bold text-foreground mb-4">
            Your cart is empty
          </h1>
          <p className="text-muted-foreground mb-8">
            Discover our beautiful collection of handcrafted jewelry and find the perfect piece for you.
          </p>
          <Link to="/shop">
            <Button className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-3">
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
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-playfair text-3xl font-bold text-foreground mb-8">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={`${item.id}-${item.variant || 'default'}`} className="border-gold-200/30">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-playfair text-lg font-semibold text-foreground">
                        {item.name}
                      </h3>
                      {item.variant && (
                        <p className="text-sm text-muted-foreground">
                          Size: {item.variant}
                        </p>
                      )}
                      <p className="text-lg font-bold text-gold-600 mt-2">
                        ${item.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end space-y-3">
                      <div className="flex items-center space-x-3">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(`${item.id}-${item.variant || 'default'}`, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="text-sm font-semibold w-8 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(`${item.id}-${item.variant || 'default'}`, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(`${item.id}-${item.variant || 'default'}`)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
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
            <Card className="border-gold-200/30 sticky top-24">
              <CardContent className="p-6">
                <h2 className="font-playfair text-xl font-bold text-foreground mb-4">
                  Order Summary
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-gold-600">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <Link to="/checkout" className="block mt-6">
                  <Button className="w-full bg-gold-600 hover:bg-gold-700 text-white py-3">
                    Proceed to Checkout
                  </Button>
                </Link>
                <Link to="/shop" className="block mt-3">
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
