import React, { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems: NavItem[] = [
    { label: 'Features', href: '#features' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Terminal Demo', href: '#demo' },
    { label: 'Testimonials', href: '#testimonials' }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };
  
  return (
    <header className={cn("relative z-10", className)}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img 
              src="/assets/walavie_logo.jpg" 
              alt="Walavie Logo" 
              className="h-10 mr-2"
            />
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="hover:text-primary transition-colors duration-200"
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
        </div>
        
        <div>
          <a 
            href="#getstarted" 
            className="hidden md:inline-block bg-primary hover:bg-opacity-90 text-white px-5 py-2 rounded-md font-medium transition-all duration-200 hover:shadow-glow"
            onClick={handleNavClick}
          >
            Get Started
          </a>
          <button 
            className="md:hidden text-lightText" 
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <motion.div 
        className={cn(
          "md:hidden bg-zinc-900 rounded-md mx-4 p-4 absolute w-[calc(100%-2rem)] z-20",
          mobileMenuOpen ? "block" : "hidden"
        )}
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0,
          y: mobileMenuOpen ? 0 : -10
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="hover:text-primary transition-colors duration-200"
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#getstarted" 
            className="bg-primary hover:bg-opacity-90 text-white px-5 py-2 rounded-md font-medium transition-all duration-200 text-center"
            onClick={handleNavClick}
          >
            Get Started
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
