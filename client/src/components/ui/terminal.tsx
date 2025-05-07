import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn, generateId } from '@/lib/utils';

interface Command {
  id: string;
  text: string;
  response: React.ReactNode;
}

interface TerminalProps {
  className?: string;
  initialCommands?: Command[];
  prompt?: string;
  title?: string;
}

export const Terminal = ({
  className,
  initialCommands = [],
  prompt = ">",
  title = "terminal ~ walavie"
}: TerminalProps) => {
  const [commands, setCommands] = useState<Command[]>(initialCommands);
  const [inputValue, setInputValue] = useState("");
  const [cursorBlink, setCursorBlink] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const executeCommand = (commandText: string) => {
    if (!commandText.trim()) return;
    
    // Add new command to history
    const newCommand: Command = {
      id: generateId(),
      text: commandText,
      response: <div className="text-gray-400">Command not recognized: {commandText}</div>
    };
    
    setCommands(prev => [...prev, newCommand]);
    setInputValue("");
    
    // Scroll to bottom after command execution
    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, 10);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(inputValue);
    }
  };

  // Auto-focus the input field when clicked anywhere in the terminal
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Blink cursor animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorBlink(prev => !prev);
    }, 500);
    
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div 
      className={cn(
        "bg-black rounded-xl border border-gray-700 shadow-xl overflow-hidden",
        className
      )}
      onClick={focusInput}
    >
      {/* Terminal header */}
      <div className="bg-zinc-900 py-2 px-4 flex items-center justify-between border-b border-gray-700">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-gray-400">{title}</div>
        <div className="text-xs text-gray-500">v2.1.4</div>
      </div>
      
      {/* Terminal content */}
      <div 
        ref={terminalRef}
        className="p-5 font-mono text-sm overflow-y-auto max-h-[60vh]"
      >
        {commands.map((command) => (
          <div key={command.id}>
            <div className="flex mb-2">
              <span className="text-secondary mr-2">{prompt}</span>
              <span className="text-white">{command.text}</span>
            </div>
            <div className="mb-4 pl-6">
              {command.response}
            </div>
          </div>
        ))}
        
        <div className="flex items-center">
          <span className="text-secondary mr-2">{prompt}</span>
          <span className="text-white">{inputValue}</span>
          <motion.span 
            animate={{ opacity: cursorBlink ? 1 : 0 }}
            transition={{ duration: 0.1 }}
            className="w-2 h-5 bg-secondary inline-block ml-0.5"
          ></motion.span>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="absolute opacity-0 w-0 h-0"
            aria-label="Terminal input"
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
