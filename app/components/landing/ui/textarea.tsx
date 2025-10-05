import React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className = "", ...props },
  ref
) {
  const base = "block w-full rounded-md border px-3 py-2 text-sm outline-none transition-colors resize-y";
  return <textarea ref={ref} className={[base, className].join(" ")} {...props} />;
});

export default Textarea;
