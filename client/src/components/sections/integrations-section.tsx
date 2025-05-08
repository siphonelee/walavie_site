import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import GridLines from '@/components/ui/grid-lines';
import CodeBlock from '@/components/ui/code-block';

interface Integration {
  icon: string;
  name: string;
}

interface IntegrationsSectionProps {
  className?: string;
}

export const IntegrationsSection = ({ className }: IntegrationsSectionProps) => {
  const integrations: Integration[] = [
    { icon: "ri-github-fill", name: "GitHub" },
    { icon: "ri-gitlab-fill", name: "GitLab" },
    { icon: "ri-terminal-box-line", name: "Bash/ZSH" },
    { icon: "ri-file-code-line", name: "VS Code" },
    { icon: "ri-python-line", name: "Python" },
    { icon: "ri-reactjs-line", name: "React" },
    { icon: "ri-database-2-line", name: "SQL" },
    { icon: "ri-router-line", name: "AWS" }
  ];

  const integrationCode = `// Initialize Walavie connection
const walavie = await Walavie.connect({
  apiKey: config.apiKey,
  integrations: {
    github: {
      token: process.env.GITHUB_TOKEN,
      repositories: ['user/repo1', 'user/repo2']
    },
    terminal: {
      theme: 'monokai',
      font: 'JetBrains Mono',
      enableAI: true
    },
    editor: {
      defaultLanguage: 'javascript',
      autosave: true,
      formatOnSave: true
    }
  }
});

// Set up event listeners
walavie.on('git.push', handleGitPush);
walavie.on('file.changed', syncChanges);
  
// Connect editor instances
const editor = walavie.createEditor('#editor-container');
const terminal = walavie.createTerminal('#terminal-container');`;

  return (
    <section id="integrations" className={cn("py-16 md:py-24 relative bg-black bg-opacity-70", className)}>
      <GridLines opacity={0.3} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-primary bg-opacity-10 rounded-full px-4 py-1 text-sm font-medium text-primary border border-primary border-opacity-20 mb-4">
            <i className="ri-plug-line mr-1"></i> Seamless Integrations
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Connect with Your <span className="text-primary">Favorite Tools</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Walavie integrates with leading development tools and platforms to provide a unified experience
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {integrations.map((integration, index) => (
            <motion.div 
              key={index}
              className="bg-zinc-900 rounded-xl p-5 border border-gray-700 hover:border-primary transition-all duration-300 group flex flex-col items-center justify-center text-center"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <i className={`${integration.icon} text-5xl text-gray-400 group-hover:text-primary transition-colors duration-200 mb-3`}></i>
              <h3 className="font-medium">{integration.name}</h3>
            </motion.div>
          ))}
        </motion.div>
        

      </div>
    </section>
  );
};

export default IntegrationsSection;
