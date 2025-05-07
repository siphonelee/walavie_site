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
                Sign up now for a 14-day free trial and experience the power of Walavie. No credit card required.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary bg-opacity-10 p-1.5 rounded-lg">
                    <i className="ri-check-line text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Full-featured 14-day trial</h4>
                    <p className="text-sm text-gray-400">Access all premium features for two weeks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary bg-opacity-10 p-1.5 rounded-lg">
                    <i className="ri-check-line text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">No credit card required</h4>
                    <p className="text-sm text-gray-400">Free to try with no commitment</p>
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
              <div className="absolute -bottom-5 -left-5 bg-zinc-950 p-4 rounded-lg border border-gray-700 shadow-lg text-center">
                <div className="font-mono text-secondary font-bold">14 DAYS</div>
                <div className="text-xs text-gray-400">Free Trial</div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Pricing Comparison */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-center mb-10">Select the <span className="text-primary">Perfect Plan</span> for Your Needs</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={cn(
                  "bg-zinc-900 rounded-xl border overflow-hidden",
                  plan.popular ? "border-primary shadow-glow" : "border-gray-700"
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 left-0 bg-primary text-white text-xs font-bold py-1 text-center">
                    MOST POPULAR
                  </div>
                )}
                <div className={cn("p-6", plan.popular && "pt-8")}>
                  <h4 className="text-xl font-bold mb-1">{plan.name}</h4>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline mb-6">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center">
                        {feature.included ? (
                          <i className="ri-check-line text-secondary mr-2"></i>
                        ) : (
                          <i className="ri-close-line text-gray-500 mr-2"></i>
                        )}
                        <span className={feature.included ? "" : "text-gray-500"}>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  <a 
                    href="#" 
                    className={cn(
                      "block text-center px-6 py-2 rounded-md font-medium transition-all duration-200",
                      plan.popular
                        ? "bg-primary hover:bg-opacity-90 text-white"
                        : "bg-zinc-950 hover:bg-gray-800 text-white"
                    )}
                  >
                    Choose {plan.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
