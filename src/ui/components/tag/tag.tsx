import { TagProps } from "./tag.types";

export function Tag({
  children,
  variant = "primary",
  size = "medium",
  className = "",
}: TagProps) {
  const baseClasses = "inline-flex items-center rounded-pill font-medium";

  const sizeClasses = {
    small: "px-2 py-0.5 text-xs",
    medium: "px-3 py-1 text-sm",
  };

  const variantClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary text-secondary-text",
    success: "bg-success-light text-success-dark",
    neutral: "bg-gray-100 text-gray-700",
  };

  const combinedClasses =
    `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`.trim();

  return <span className={combinedClasses}>{children}</span>;
}
