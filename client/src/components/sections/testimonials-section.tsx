import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import GridLines from '@/components/ui/grid-lines';

interface Testimonial {
  text: string;
  author: string;
  role: string;
  initials: string;
  rating: number;
}

interface TestimonialsSectionProps {
  className?: string;
}

export const TestimonialsSection = ({ className }: TestimonialsSectionProps) => {
  const testimonials: Testimonial[] = [
    {
      text: "Walavie has completely transformed my development workflow. The terminal and GUI integration is seamless, and the AI-powered suggestions have increased my productivity by at least 30%.",
      author: "Alex Chen",
      role: "Senior Developer, TechCorp",
      initials: "AC",
      rating: 5
    },
    {
      text: "As a data scientist, I need both terminal access and visualization tools. Walavie provides the perfect balance with a clean interface that doesn't get in my way.",
      author: "Mira Patel",
      role: "Data Scientist, Analytics Co",
      initials: "MP",
      rating: 5
    },
    {
      text: "The code editor and terminal integration is brilliant. Being able to switch contexts without switching tools has saved me countless hours of work.",
      author: "James Wilson",
      role: "DevOps Engineer, CloudStack",
      initials: "JW",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className={cn("py-16 md:py-24 relative bg-gradient-to-b from-zinc-950 to-black", className)}>
      <GridLines opacity={0.3} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-primary bg-opacity-10 rounded-full px-4 py-1 text-sm font-medium text-primary border border-primary border-opacity-20 mb-4">
            <i className="ri-double-quotes-l mr-1"></i> Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="text-primary">Tech Professionals</span> Worldwide
          </h2>
          <p className="text-gray-300 text-lg">
            See how developers, data scientists, and tech teams are enhancing their workflow with Walavie
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-zinc-950 rounded-xl p-6 border border-gray-700 hover:border-primary transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-1 text-yellow-500 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill"></i>
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <i key={i + testimonial.rating} className="ri-star-line"></i>
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary bg-opacity-20 flex items-center justify-center mr-3">
                  <span className="font-bold text-primary">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Logos Section */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400 mb-6">TRUSTED BY LEADING COMPANIES</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <i className="ri-google-fill text-4xl"></i>
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <i className="ri-microsoft-fill text-4xl"></i>
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <i className="ri-amazon-fill text-4xl"></i>
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <i className="ri-github-fill text-4xl"></i>
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <i className="ri-spotify-fill text-4xl"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
