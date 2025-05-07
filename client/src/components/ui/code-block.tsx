import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
  showLineNumbers?: boolean;
}

export const CodeBlock = ({
  code,
  language = 'javascript',
  filename,
  className,
  showLineNumbers = false
}: CodeBlockProps) => {
  // Basic syntax highlighting
  const highlightedCode = code
    .replace(/(\/\/.*)/g, '<span class="syntax-comment">$1</span>')
    .replace(/(".*?")/g, '<span class="syntax-string">$1</span>')
    .replace(/('.*?')/g, '<span class="syntax-string">$1</span>')
    .replace(/\b(const|let|var|import|export|from|async|await|if|else|for|while|function|return|new|try|catch|class)\b/g, '<span class="syntax-keyword">$1</span>')
    .replace(/\b(\w+)\(/g, '<span class="syntax-function">$1</span>(');

  return (
    <div className={cn("code-block bg-zinc-950 rounded-lg p-5 border border-gray-700", className)}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        {filename && <div className="text-xs text-gray-500">{filename}</div>}
      </div>
      
      <motion.pre 
        className="code-content text-sm overflow-x-auto text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </div>
  );
};

export default CodeBlock;
