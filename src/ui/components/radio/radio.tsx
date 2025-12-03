import { RadioProps } from "./radio.types";

export function Radio({ label, className = "", id, ...props }: RadioProps) {
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

  const radioClasses =
    "w-4 h-4 border-gray-300 text-primary focus:ring-2 focus:ring-primary/20 focus:ring-offset-0 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";

  return (
    <div className={`flex items-center gap-2 ${className}`.trim()}>
      <input type="radio" id={radioId} className={radioClasses} {...props} />
      {label && (
        <label
          htmlFor={radioId}
          className="text-sm font-medium text-gray-700 cursor-pointer select-none"
        >
          {label}
        </label>
      )}
    </div>
  );
}
