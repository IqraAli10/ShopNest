'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/hooks/use-cart';

const CheckoutPage = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { items, total, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Order Placed Successfully!",
        description: "Thank you for your purchase.",
        className: "bg-[#000000] text-white"

      });
      
      clearCart();
      router.push('/');
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
        className: "bg-[#000000] text-white"

      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid gap-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" required />
              </div>

              <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" required />
                </div>
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input id="state" required />
                </div>
                <div>
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input id="zip" required />
                </div>
              </div>

              <div>
                <Label htmlFor="card">Card Number</Label>
                <Input id="card" placeholder="4242 4242 4242 4242" required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" required />
                </div>
                <div>
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" required />
                </div>
              </div>

              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <Button type="submit" className="w-full bg-black text-white" disabled={loading}>
                {loading ? 'Processing...' : 'Place Order'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;