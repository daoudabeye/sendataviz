import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className = "", ...props },
  ref
) {
  const base = "block w-full rounded-md border px-3 py-2 text-sm outline-none transition-colors";
  return <input ref={ref} className={[base, className].join(" ")} {...props} />;
});

export default Input;
