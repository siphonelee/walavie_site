import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  className?: string;
}

export const FeaturesSection = ({ className }: FeaturesSectionProps) => {
  const features: Feature[] = [
    {
      icon: "ri-terminal-box-line",
      title: "Manage Remote Machines",
      description: "Quickly switch between remote servers and clusters with SSH connection manager (with WSL support)."
    },
    {
      icon: "ri-dashboard-3-line",
      title: "Interactive Dashboard",
      description: "Customizable dashboard with drag-and-drop widgets for monitoring and visualization."
    },
    {
      icon: "ri-git-branch-line",
      title: "Work with Remote Files",
      description: "Navigate directories, preview markdown and images, and manage files on remote machines."
    },
    {
      icon: "ri-share-network-line",
      title: "Cross-Platform",
      description: "Available on macOS, Windows, Linux, and as a web application accessible from anywhere."
    },
    {
      icon: "ri-robot-line",
      title: "Reliable storage",
      description: "Solana & Walrus as the backend service to ensure secure, highly available, decentralized data storage."
    },
    {
      icon: "ri-robot-line",
      title: "AI Assistant",
      description: "Built-in AI assistant, with MCP-style file operations supported."
    },
    {
      icon: "ri-robot-line",
      title: "Inline Web Browser",
      description: "Built-in web browser to access Github, StackOverflow, dashboards, and your own apps."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section id="features" className={cn("py-16 md:py-24 relative", className)}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-primary bg-opacity-10 rounded-full px-4 py-1 text-sm font-medium text-primary border border-primary border-opacity-20 mb-4">
            <i className="ri-cpu-line mr-1"></i> Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Terminal and GUI Experience <span className="text-primary">Reimagined</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Advanced tools designed for developers, data scientists, and technical professionals
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-zinc-900 rounded-xl p-6 border border-gray-700 hover:border-primary transition-all duration-300 group hover:shadow-glow"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <i className={`${feature.icon} text-2xl text-primary`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 mb-4">
                {feature.description}
              </p>
              <a href="#" className="inline-flex items-center text-primary hover:text-white font-medium text-sm group-hover:bg-primary px-3 py-1 rounded-md transition-all duration-200">
                Learn more <i className="ri-arrow-right-line ml-1"></i>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
