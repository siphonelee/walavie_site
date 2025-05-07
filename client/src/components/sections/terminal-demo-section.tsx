import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Terminal from '@/components/ui/terminal';

interface Command {
  id: string;
  text: string;
  response: React.ReactNode;
}

interface TerminalDemoSectionProps {
  className?: string;
}

export const TerminalDemoSection = ({ className }: TerminalDemoSectionProps) => {
  const commandSuggestions = [
    "help --commands",
    "analyze --file main.py --performance",
    "connect --repo github.com/user/project"
  ];

  // Initial terminal commands and responses
  const initialCommands: Command[] = [
    {
      id: "init-1",
      text: "connect --auth token:********",
      response: <div className="text-green-400 mb-4">Connected to Walavie. All systems operational.</div>
    },
    {
      id: "init-2",
      text: "status --services",
      response: (
        <div className="text-gray-300 mb-4">
          <div>Checking service status...</div>
          <div className="mt-2 grid grid-cols-2 gap-3">
            <div className="bg-zinc-900 rounded p-2 border border-gray-700">
              <div className="text-xs text-gray-500">Terminal Service</div>
              <div className="text-lg font-bold text-lightText">Online <span className="text-secondary text-sm">✓</span></div>
            </div>
            <div className="bg-zinc-900 rounded p-2 border border-gray-700">
              <div className="text-xs text-gray-500">Code Editor</div>
              <div className="text-lg font-bold text-lightText">Online <span className="text-secondary text-sm">✓</span></div>
            </div>
            <div className="bg-zinc-900 rounded p-2 border border-gray-700">
              <div className="text-xs text-gray-500">Git Integration</div>
              <div className="text-lg font-bold text-lightText">Online <span className="text-secondary text-sm">✓</span></div>
            </div>
            <div className="bg-zinc-900 rounded p-2 border border-gray-700">
              <div className="text-xs text-gray-500">AI Assistant</div>
              <div className="text-lg font-bold text-lightText">Online <span className="text-secondary text-sm">✓</span></div>
            </div>
          </div>
        </div>
      )
    }
  ];

  // Create command responses based on user inputs
  const getCommandResponse = (command: string): React.ReactNode => {
    if (command.includes('help')) {
      return (
        <div className="text-gray-300">
          <div className="text-primary font-bold mb-2">Available Commands:</div>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex">
              <span className="text-secondary font-mono mr-2 min-w-20">connect</span>
              <span>Connect to repositories, services, or APIs</span>
            </div>
            <div className="flex">
              <span className="text-secondary font-mono mr-2 min-w-20">analyze</span>
              <span>Analyze code, performance, or dependencies</span>
            </div>
            <div className="flex">
              <span className="text-secondary font-mono mr-2 min-w-20">status</span>
              <span>Check status of services and connections</span>
            </div>
            <div className="flex">
              <span className="text-secondary font-mono mr-2 min-w-20">run</span>
              <span>Execute scripts or commands</span>
            </div>
            <div className="flex">
              <span className="text-secondary font-mono mr-2 min-w-20">help</span>
              <span>Show available commands and usage</span>
            </div>
          </div>
        </div>
      );
    } else if (command.includes('analyze')) {
      return (
        <div className="text-gray-300">
          <div>Analyzing main.py for performance issues...</div>
          <div className="mt-2 p-3 bg-zinc-900 rounded border border-gray-700">
            <div className="text-lg font-bold text-primary mb-1">Performance Analysis</div>
            <div className="space-y-2 mt-2">
              <div className="flex justify-between items-center">
                <span>CPU Usage:</span>
                <span className="text-secondary font-bold">Optimized</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Memory Allocation:</span>
                <span className="text-yellow-500 font-bold">Warning</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Runtime Complexity:</span>
                <span className="text-secondary font-bold">O(n log n)</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Algorithmic Efficiency:</span>
                <span className="text-secondary font-bold">92%</span>
              </div>
            </div>
            <div className="mt-3 p-2 bg-black rounded border border-yellow-500/30 text-yellow-500 text-sm">
              <i className="ri-alert-line mr-1"></i> Potential memory leak detected in function process_data() on line 127
            </div>
          </div>
        </div>
      );
    } else if (command.includes('connect')) {
      return (
        <div className="text-gray-300">
          <div>Connecting to GitHub repository...</div>
          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-secondary mr-2"></div>
              <span>Authenticating with GitHub</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-secondary mr-2"></div>
              <span>Cloning repository</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-secondary mr-2"></div>
              <span>Setting up Git hooks</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-secondary mr-2"></div>
              <span>Synchronizing local workspace</span>
            </div>
          </div>
          <div className="mt-3 text-green-400">
            <i className="ri-check-double-line mr-1"></i> Successfully connected to repository github.com/user/project
          </div>
        </div>
      );
    } else {
      return (
        <div className="text-gray-400">
          Command not recognized. Type <span className="text-secondary font-mono">help --commands</span> to see available commands.
        </div>
      );
    }
  };

  return (
    <section id="demo" className={cn("py-16 md:py-24 relative", className)}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-primary bg-opacity-10 rounded-full px-4 py-1 text-sm font-medium text-primary border border-primary border-opacity-20 mb-4">
            <i className="ri-terminal-line mr-1"></i> Interactive Demo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the <span className="text-primary">Terminal Interface</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Try our powerful command-line interface with intelligent suggestions and formatting
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Terminal 
              initialCommands={initialCommands}
              title="walavie ~ terminal-demo"
            />
          </motion.div>
          
          <div className="mt-8 max-w-xl mx-auto">
            <p className="text-sm text-gray-400 mb-4">Try these commands:</p>
            <div className="flex flex-wrap gap-3">
              {commandSuggestions.map((command, index) => (
                <button 
                  key={index}
                  className="bg-zinc-900 hover:bg-primary hover:text-white px-3 py-1.5 rounded border border-gray-700 text-sm transition-colors duration-200"
                  onClick={() => {
                    // In a real implementation, this would add the command to the terminal
                    console.log(`Command clicked: ${command}`);
                  }}
                >
                  {command}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalDemoSection;
