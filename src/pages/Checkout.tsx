
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.08;
  const shipping = 25; // Fixed shipping cost
  const total = subtotal + tax + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase. You'll receive a confirmation email shortly.",
      });
      
      clearCart();
      navigate('/');
    }, 2000);
    
    toast({
      title: "Processing payment...",
      description: "Please wait while we process your order.",
    });
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 luxury-gradient">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-playfair text-4xl font-bold text-charcoal-800 mb-8">
          Checkout
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Checkout Form */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="border-gold-200/30 luxury-shadow">
                <CardHeader className="velvet-texture">
                  <CardTitle className="font-playfair text-charcoal-800">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 velvet-texture">
                  <div>
                    <Label htmlFor="email" className="text-charcoal-700 font-medium">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 border-gold-300 focus:border-gold-500 bg-white text-charcoal-800"
                      placeholder="your@email.com"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card className="border-gold-200/30 luxury-shadow">
                <CardHeader className="velvet-texture">
                  <CardTitle className="font-playfair text-charcoal-800">Shipping Address</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 velvet-texture">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-charcoal-700 font-medium">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="mt-1 border-gold-300 focus:border-gold-500 bg-white text-charcoal-800"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-charcoal-700 font-medium">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="mt-1 border-gold-300 focus:border-gold-500 bg-white text-charcoal-800"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address" className="text-charcoal-700 font-medium">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="mt-1 border-gold-300 focus:border-gold-500 bg-white text-charcoal-800"
                      placeholder="123 Main Street"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city" className="text-charcoal-700 font-medium">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="mt-1 border-gold-300 focus:border-gold-500 bg-white text-charcoal-800"
                        placeholder="New York"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode" className="text-charcoal-700 font-medium">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        className="mt-1 border-gold-300 focus:border-gold-500 bg-white text-charcoal-800"
                        placeholder="10001"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="state" className="text-charcoal-700 font-medium">State</Label>
                    <Input
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="mt-1 border-gold-300 focus:border-gold-500 bg-white text-charcoal-800"
                      placeholder="NY"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Information */}
              <Card className="border-gold-200/30 luxury-shadow">
                <CardHeader className="velvet-texture">
                  <CardTitle className="font-playfair text-charcoal-800">Payment Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 velvet-texture">
                  <div>
                    <Label htmlFor="nameOnCard" className="text-charcoal-700 font-medium">Name on Card</Label>
                    <Input
                      id="nameOnCard"
                      name="nameOnCard"
                      value={formData.nameOnCard}
                      onChange={handleInputChange}
                      required
                      className="mt-1 border-gold-300 focus:border-gold-500 bg-white text-charcoal-800"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cardNumber" className="text-charcoal-700 font-medium">Card Number</Label>
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                      className="mt-1 border-gold-300 focus:border-gold-500 bg-white text-charcoal-800"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiryDate" className="text-charcoal-700 font-medium">Expiry Date</Label>
                      <Input
                        id="expiryDate"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        required
                        className="mt-1 border-gold-300 focus:border-gold-500 bg-white text-charcoal-800"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv" className="text-charcoal-700 font-medium">CVV</Label>
                      <Input
                        id="cvv"
                        name="cvv"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                        className="mt-1 border-gold-300 focus:border-gold-500 bg-white text-charcoal-800"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="border-gold-200/30 luxury-shadow sticky top-24">
                <CardHeader className="velvet-texture">
                  <CardTitle className="font-playfair text-charcoal-800">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 velvet-texture">
                  {/* Order Items */}
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={`${item.id}-${item.variant || 'default'}`} className="flex justify-between">
                        <div>
                          <p className="font-medium text-charcoal-800">{item.name}</p>
                          {item.variant && (
                            <p className="text-sm text-charcoal-500">Size: {item.variant}</p>
                          )}
                          <p className="text-sm text-charcoal-500">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-medium text-charcoal-800">
                          ${(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>

                  <hr className="border-gold-200" />

                  {/* Totals */}
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-charcoal-600">Subtotal</span>
                      <span className="text-charcoal-800 font-semibold">${subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-600">Shipping</span>
                      <span className="text-charcoal-800 font-semibold">${shipping}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-600">Tax</span>
                      <span className="text-charcoal-800 font-semibold">${tax.toFixed(2)}</span>
                    </div>
                    <hr className="border-gold-200" />
                    <div className="flex justify-between font-bold text-xl">
                      <span className="text-charcoal-800">Total</span>
                      <span className="text-gold-600">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full gold-gradient text-white py-4 text-lg luxury-shadow mt-8"
                  >
                    Place Order
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
