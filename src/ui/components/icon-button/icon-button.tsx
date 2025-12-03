import { IconButtonProps } from "./icon-button.types";

export function IconButton({
  variant = "ghost",
  size = "medium",
  icon,
  disabled = false,
  className = "",
  ...props
}: IconButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const sizeClasses = {
    small: "w-8 h-8 text-sm",
    medium: "w-10 h-10 text-base",
    large: "w-12 h-12 text-lg",
  };

  const variantClasses = {
    primary: {
      default:
        "bg-primary text-white hover:bg-primary-hover active:bg-primary-active focus-visible:outline-primary-active",
      disabled: "bg-primary-disabled text-white cursor-not-allowed",
    },
    secondary: {
      default:
        "bg-secondary text-secondary-text hover:bg-secondary-hover active:bg-secondary-active focus-visible:outline-secondary-text",
      disabled:
        "bg-secondary-disabled text-secondary-text opacity-40 cursor-not-allowed",
    },
    ghost: {
      default:
        "bg-transparent text-gray-600 hover:bg-gray-100 active:bg-gray-200 focus-visible:outline-gray-400",
      disabled: "bg-transparent text-gray-300 cursor-not-allowed",
    },
  };

  const selectedVariant = variantClasses[variant];
  const stateClasses = disabled
    ? selectedVariant.disabled
    : selectedVariant.default;

  const combinedClasses =
    `${baseClasses} ${sizeClasses[size]} ${stateClasses} ${className}`.trim();

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {icon}
    </button>
  );
}
