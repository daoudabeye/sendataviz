import React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement> & { className?: string };

export function Card({ children, className = "", ...rest }: DivProps) {
  return (
    <div
      className={["rounded-2xl border bg-white text-gray-900", className].join(" ")}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "", ...rest }: DivProps) {
  return (
    <div className={["p-6", className].join(" ")} {...rest}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = "", ...rest }: DivProps) {
  return (
    <h3 className={["text-xl font-bold", className].join(" ")} {...rest}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className = "", ...rest }: DivProps) {
  return (
    <p className={["text-sm text-gray-600", className].join(" ")} {...rest}>
      {children}
    </p>
  );
}

export function CardContent({ children, className = "", ...rest }: DivProps) {
  return (
    <div className={["p-6 pt-0", className].join(" ")} {...rest}>
      {children}
    </div>
  );
}
