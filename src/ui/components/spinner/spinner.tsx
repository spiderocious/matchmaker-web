import { SpinnerProps } from "./spinner.types";

export function Spinner({
  size = "medium",
  color = "text-primary",
  className = "",
}: SpinnerProps) {
  const sizeClasses = {
    small: "w-4 h-4 border-2",
    medium: "w-8 h-8 border-2",
    large: "w-12 h-12 border-4",
  };

  return (
    <div
      className={`${sizeClasses[size]} ${color} border-current border-t-transparent rounded-full animate-spin ${className}`.trim()}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
