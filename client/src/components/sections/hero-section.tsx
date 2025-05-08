import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import GridLines from '@/components/ui/grid-lines';

interface HeroSectionProps {
  className?: string;
}

export const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <section className={cn("relative py-16 md:py-24 overflow-hidden", className)}>
      <GridLines opacity={0.2} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center bg-primary bg-opacity-10 rounded-full px-4 py-1 text-sm font-medium text-primary border border-primary border-opacity-20">
              <span className="animate-pulse bg-primary w-2 h-2 rounded-full mr-2"></span>
              Next-Gen Terminal Experience
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-secondary font-mono">/&gt;</span> Modern interface with 
              <span className="text-primary"> terminal and graphical</span> capabilities
            </h1>
            
            <p className="text-lg text-gray-300 max-w-lg">
              Walavie provides powerful terminal and GUI tools for developers, data scientists, and tech professionals in a single, unified platform.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#getstarted" className="bg-primary hover:bg-opacity-90 text-white px-6 py-3 rounded-md font-medium transition-all duration-200 hover:shadow-glow text-center">
                Get Started <i className="ri-arrow-right-line ml-1"></i>
              </a>
              <a href="#demo" className="border border-primary border-opacity-40 hover:bg-primary hover:bg-opacity-10 text-lightText px-6 py-3 rounded-md font-medium transition-all duration-200 text-center">
                <i className="ri-terminal-line mr-1"></i> Try Live Demo
              </a>
            </div>
            
            <div className="pt-6">
              <p className="text-sm text-gray-400 mb-2">Compatible with your favorite tools:</p>
              <div className="flex space-x-6">
                <i className="ri-terminal-box-line text-2xl text-gray-400 hover:text-primary transition-colors duration-200"></i>
                <i className="ri-code-box-line text-2xl text-gray-400 hover:text-primary transition-colors duration-200"></i>
                <i className="ri-github-fill text-2xl text-gray-400 hover:text-primary transition-colors duration-200"></i>
                <i className="ri-database-2-line text-2xl text-gray-400 hover:text-primary transition-colors duration-200"></i>
                <i className="ri-cloud-line text-2xl text-gray-400 hover:text-primary transition-colors duration-200"></i>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-lg shadow-xl border border-gray-700 overflow-hidden animate-float">
              <img 
                src="/assets/walavie-screenshot.png" 
                alt="Futuristic terminal interface" 
                className="w-full h-auto opacity-50"
              />
            </div>
            <motion.div 
              className="absolute -bottom-4 -right-4 bg-zinc-900 p-4 rounded-lg border border-gray-700 shadow-lg max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-start space-x-3">
                <div className="bg-secondary rounded-full p-1.5">
                  <i className="ri-terminal-line text-black"></i>
                </div>
                <div>
                  <h3 className="font-medium text-sm">One-stop Smart Terminal</h3>
                  <p className="text-xs text-gray-400">Stop context switching by bringing context into your terminal</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
