import React from 'react';
import { cn } from '@/lib/utils';

interface GridLinesProps {
  className?: string;
  opacity?: number;
}

export const GridLines = ({ 
  className, 
  opacity = 0.2 
}: GridLinesProps) => {
  return (
    <div 
      className={cn(
        "grid-lines absolute inset-0 -z-10", 
        className
      )} 
      style={{ opacity }}
      aria-hidden="true"
    />
  );
};

export default GridLines;
