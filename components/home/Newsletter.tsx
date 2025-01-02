'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { subscribeToNewsletter } from '@/lib/newsletter';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await subscribeToNewsletter(email);
      toast({
        title: "Success!",
        description: "You've been successfully subscribed to our newsletter.",
        className: "bg-[#000000] text-white"

      });
      setEmail('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        className: "bg-[#000000] text-white",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="text-muted-foreground mb-8">
          Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" disabled={loading} className='bg-black text-white'>
            {loading ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;