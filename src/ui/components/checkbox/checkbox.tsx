import { CheckboxProps } from "./checkbox.types";

export function Checkbox({
  label,
  className = "",
  id,
  ...props
}: CheckboxProps) {
  const checkboxId =
    id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  const checkboxClasses =
    "w-4 h-4 rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary/20 focus:ring-offset-0 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";

  return (
    <div className={`flex items-center gap-2 ${className}`.trim()}>
      <input
        type="checkbox"
        id={checkboxId}
        className={checkboxClasses}
        {...props}
      />
      {label && (
        <label
          htmlFor={checkboxId}
          className="text-sm font-medium text-gray-700 cursor-pointer select-none"
        >
          {label}
        </label>
      )}
    </div>
  );
}
