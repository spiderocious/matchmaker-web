import { ToggleProps } from "./toggle.types";

export function Toggle({
  label,
  className = "",
  id,
  checked,
  ...props
}: ToggleProps) {
  const toggleId = id || `toggle-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      <label
        htmlFor={toggleId}
        className="relative inline-block cursor-pointer"
      >
        <input
          type="checkbox"
          id={toggleId}
          className="sr-only peer"
          checked={checked}
          {...props}
        />
        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary peer-disabled:opacity-50 peer-disabled:cursor-not-allowed"></div>
      </label>
      {label && (
        <label
          htmlFor={toggleId}
          className="text-sm font-medium text-gray-700 cursor-pointer select-none"
        >
          {label}
        </label>
      )}
    </div>
  );
}
