import { Link } from "react-router-dom";
import { LinkButtonProps } from "./link-button.types";

export function LinkButton({
  variant = "default",
  children,
  disabled = false,
  className = "",
  to,
  ...props
}: LinkButtonProps) {
  const baseClasses =
    "inline-block font-medium transition-colors duration-200 relative group cursor-pointer";

  const variantClasses = {
    primary: "text-primary hover:text-primary-hover",
    secondary: "text-secondary-text hover:text-secondary-text",
    default: "text-[#4d669a] hover:text-[#3a4f73]",
  };

  const disabledClasses = "opacity-50 cursor-not-allowed pointer-events-none";

  const selectedVariant = disabled ? "text-gray-400" : variantClasses[variant];

  const combinedClasses =
    `${baseClasses} ${selectedVariant} ${disabled ? disabledClasses : ""} ${className}`.trim();

  const Tag = to ? Link : "a";

  return (
    <Tag className={combinedClasses} {...props} to={to ?? ""}>
      {/* Text content */}
      <span className="relative inline-block pb-1">
        {children}
        {/* Animated underline */}
        {!disabled && (
          <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-current transition-all duration-300 ease-out group-hover:w-full" />
        )}
      </span>
    </Tag>
  );
}
