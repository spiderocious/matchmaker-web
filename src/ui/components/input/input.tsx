import { InputProps } from "./input.types";

export function Input({
  label,
  error,
  helperText,
  className = "",
  id,
  ...props
}: InputProps) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = Boolean(error);

  const baseClasses =
    "w-full px-4 py-2.5 rounded-input border text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 text-[#4d669a]";

  const stateClasses = hasError
    ? "border-border-error focus:border-border-error focus:ring-error/20"
    : "border-[#cfd7e7] focus:border-border-focus focus:ring-primary/20";

  const disabledClasses = props.disabled
    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
    : "bg-white text-gray-900";

  const combinedClasses =
    `${baseClasses} ${stateClasses} ${disabledClasses} ${className}`.trim();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          {label}
        </label>
      )}
      <input id={inputId} className={combinedClasses} {...props} />
      {error && (
        <p className="mt-1.5 text-sm text-error flex items-center gap-1">
          {error}
        </p>
      )}
      {!error && helperText && (
        <p className="mt-1.5 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
}
