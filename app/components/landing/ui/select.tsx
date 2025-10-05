import React, { createContext, useContext, useMemo, useState } from "react";

// Minimal Select API compatible with the draft usage
// Select (controlled by parent via onValueChange), SelectTrigger, SelectValue, SelectContent, SelectItem

type SelectContextType = {
  value?: string;
  setValue: (v: string) => void;
  open: boolean;
  setOpen: (o: boolean) => void;
};

const SelectContext = createContext<SelectContextType | null>(null);

export function Select({ value, onValueChange, children }: { value?: string; onValueChange?: (v: string) => void; children: React.ReactNode }) {
  const [internal, setInternal] = useState<string | undefined>(value);
  const [open, setOpen] = useState(false);

  const setValue = (v: string) => {
    setInternal(v);
    onValueChange?.(v);
  };

  const ctx = useMemo(
    () => ({ value: value ?? internal, setValue, open, setOpen }),
    [value, internal, open]
  );

  // Close on escape or outside click
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-ui-select-root="true"]')) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
    };
  }, [open]);

  return (
    <SelectContext.Provider value={ctx}>
      <div data-ui-select-root="true" className="relative">
        {children}
      </div>
    </SelectContext.Provider>
  );
}

export function SelectTrigger({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ctx = useContext(SelectContext);
  if (!ctx) throw new Error("SelectTrigger must be used within Select");
  return (
    <button
      type="button"
      role="combobox"
      aria-expanded={ctx.open}
      aria-haspopup="listbox"
      className={["flex w-full items-center justify-between rounded-md border px-3 py-2 text-sm bg-white", className].join(" ")}
      onClick={(e) => {
        e.stopPropagation();
        ctx.setOpen(!ctx.open);
      }}
    >
      {children}
    </button>
  );
}

export function SelectValue({ placeholder }: { placeholder?: string }) {
  const ctx = useContext(SelectContext);
  if (!ctx) throw new Error("SelectValue must be used within Select");
  const label = ctx.value ?? placeholder ?? "";
  return <span className="text-left text-gray-700 truncate">{label}</span>;
}

// Simple popover-less content; items will still be clickable and set value.
export function SelectContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ctx = useContext(SelectContext);
  if (!ctx) throw new Error("SelectContent must be used within Select");
  if (!ctx.open) return null;
  return (
    <div
      role="listbox"
      className={["absolute z-50 mt-2 w-full rounded-md border bg-white shadow focus:outline-none", className].join(" ")}
      tabIndex={-1}
    >
      {children}
    </div>
  );
}

export function SelectItem({ value, children }: { value: string; children: React.ReactNode }) {
  const ctx = useContext(SelectContext);
  if (!ctx) throw new Error("SelectItem must be used within Select");
  const active = ctx.value === value;
  return (
    <button
      type="button"
      className={[
        "block w-full text-left px-3 py-2 text-sm",
        active ? "bg-indigo-50 text-indigo-700" : "hover:bg-gray-50",
      ].join(" ")}
      onClick={(e) => {
        e.stopPropagation();
        ctx.setValue(value);
        ctx.setOpen(false);
      }}
    >
      {children}
    </button>
  );
}

// Re-export default aliases for draft-compatible imports
// Named exports provided above are sufficient for usage:
// Select, SelectTrigger, SelectValue, SelectContent, SelectItem
