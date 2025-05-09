import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ParticleBackground from '@/components/ui/particle-background';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import FeaturesSection from '@/components/sections/features-section';
import IntegrationsSection from '@/components/sections/integrations-section';
import TerminalDemoSection from '@/components/sections/terminal-demo-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import GetStartedSection from '@/components/sections/get-started-section';

const Home = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <>
      <Helmet>
        <title>Walavie - Terminal & Graphical Interface Platform</title>
        <meta name="description" content="A next-generation platform with powerful terminal, graphical and AI capabilities for developers, data scientists, and tech professionals." />
      </Helmet>
      
      <ParticleBackground particleCount={50} />
      
      <Header />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <IntegrationsSection />
        {/* 
        // calvin
        <TerminalDemoSection />
        */}
        <TestimonialsSection />
        <GetStartedSection />
      </main>
      
      <Footer />
    </>
  );
};

export default Home;
