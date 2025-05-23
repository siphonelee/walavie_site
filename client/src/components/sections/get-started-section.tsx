import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

interface Plan {
  name: string;
  description: string;
  price: string;
  period: string;
  features: Array<{
    included: boolean;
    text: string;
  }>;
  popular?: boolean;
}

interface GetStartedSectionProps {
  className?: string;
}

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type FormValues = z.infer<typeof formSchema>;

export const GetStartedSection = ({ className }: GetStartedSectionProps) => {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  
  const plans: Plan[] = [
    {
      name: "Personal",
      description: "For individual developers",
      price: "$19",
      period: "/month",
      features: [
        { included: true, text: "Terminal & Code Editor" },
        { included: true, text: "Git Integration" },
        { included: true, text: "1 Active Project" },
        { included: true, text: "7-day history" },
        { included: false, text: "AI Assistant" },
        { included: false, text: "Team Collaboration" }
      ]
    },
    {
      name: "Professional",
      description: "For professional developers",
      price: "$49",
      period: "/month",
      popular: true,
      features: [
        { included: true, text: "Terminal & Code Editor" },
        { included: true, text: "Git Integration" },
        { included: true, text: "Unlimited Projects" },
        { included: true, text: "30-day history" },
        { included: true, text: "AI Assistant" },
        { included: false, text: "Team Collaboration" }
      ]
    },
    {
      name: "Team",
      description: "For development teams",
      price: "$99",
      period: "/month",
      features: [
        { included: true, text: "Terminal & Code Editor" },
        { included: true, text: "Git Integration" },
        { included: true, text: "Unlimited Projects" },
        { included: true, text: "Unlimited history" },
        { included: true, text: "AI Assistant" },
        { included: true, text: "Team Collaboration" }
      ]
    }
  ];

  const onSubmit = async (data: FormValues) => {
    try {
      await apiRequest('POST', '/api/newsletter', { email: data.email });
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="getstarted" className={cn("py-16 md:py-24 relative", className)}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-zinc-900 rounded-xl p-8 md:p-12 border border-gray-700 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center bg-primary bg-opacity-10 rounded-full px-4 py-1 text-sm font-medium text-primary border border-primary border-opacity-20 mb-4">
                <i className="ri-rocket-line mr-1"></i> Get Started Today
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Ready to Enhance Your <span className="text-primary">Development Workflow?</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Walavie is open-source and free.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary bg-opacity-10 p-1.5 rounded-lg">
                    <i className="ri-check-line text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Join the community support groups</h4>
                    <p className="text-sm text-gray-400">Discord, Linkedin, X/Twitter, Youtube...</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary bg-opacity-10 p-1.5 rounded-lg">
                    <i className="ri-check-line text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Cross-platform support</h4>
                    <p className="text-sm text-gray-400">Available on macOS, Windows, Linux, and Web</p>
                  </div>
                </div>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <div className="flex">
                            <Input 
                              placeholder="Enter your email" 
                              className="rounded-r-none" 
                              {...field} 
                            />
                            <Button 
                              type="submit" 
                              className="bg-primary hover:bg-primary/90 rounded-l-none"
                            >
                              Get Started
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1607798748738-b15c40d33d57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="AI-powered terminal interface" 
                className="rounded-lg shadow-xl w-full h-auto border border-gray-700"
              />
            </motion.div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default GetStartedSection;
