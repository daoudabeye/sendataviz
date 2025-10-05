import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const GlassmorphismCard = ({ 
  children, 
  className = "", 
  hover = true, 
  gradient = "from-white/70 to-white/50",
  border = "border-white/20",
  backdrop = "backdrop-blur-xl",
  shadow = "shadow-xl"
}) => {
  return (
    <Card 
      className={`
        ${gradient} ${border} ${backdrop} ${shadow}
        ${hover ? 'hover:shadow-2xl hover:-translate-y-2 hover:scale-105' : ''}
        transition-all duration-500 border-0 overflow-hidden relative group
        ${className}
      `}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      
      <div className="relative z-10">
        {children}
      </div>
    </Card>
  );
};

const GlassmorphismCardHeader = ({ children, className = "" }) => (
  <CardHeader className={`relative z-10 ${className}`}>
    {children}
  </CardHeader>
);

const GlassmorphismCardContent = ({ children, className = "" }) => (
  <CardContent className={`relative z-10 ${className}`}>
    {children}
  </CardContent>
);

export { GlassmorphismCard, GlassmorphismCardHeader, GlassmorphismCardContent };