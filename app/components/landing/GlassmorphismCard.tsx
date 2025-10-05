import React from "react";

export function GlassmorphismCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={[
      "relative rounded-3xl border backdrop-blur-md shadow-xl",
      // default subtle glass look; caller often overrides bg/border
      "bg-white/60 border-white/30",
      className,
    ].join(" ")}>
      {children}
    </div>
  );
}

export function GlassmorphismCardHeader({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={["p-8", className].join(" ")}>{children}</div>;
}

export function GlassmorphismCardContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={["p-8 pt-0", className].join(" ")}>{children}</div>;
}

export default GlassmorphismCard;
