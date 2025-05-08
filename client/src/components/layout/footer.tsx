import React from 'react';
import { Link } from 'wouter';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn("bg-black py-12 border-t border-gray-800", className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/assets/walavie_logo.jpg" 
                alt="Walavie Logo" 
                className="h-8 mr-2"
              />
            </div>
            <p className="text-gray-400 mb-4">
              The next-generation platform with powerful terminal and graphical capabilities for developers and tech professionals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <i className="ri-github-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <i className="ri-discord-fill text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lightText mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-primary transition-colors duration-200">Features</a></li>
              <li><a href="#integrations" className="text-gray-400 hover:text-primary transition-colors duration-200">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">Changelog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lightText mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">Terminal Commands</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lightText mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Walavie. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors duration-200">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
