import { ButtonProps } from "./button.types";
import { Spinner } from "../spinner/spinner";

export function Button({
  variant = "primary",
  icon,
  loading = false,
  children,
  disabled = false,
  className = "",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-button font-medium text-base transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

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
  };

  const selectedVariant = variantClasses[variant];
  const stateClasses = isDisabled
    ? selectedVariant.disabled
    : selectedVariant.default;

  const combinedClasses = `${baseClasses} ${stateClasses} ${className}`.trim();

  return (
    <button className={combinedClasses} disabled={isDisabled} {...props}>
      {loading ? (
        <Spinner
          size="small"
          color={variant === "primary" ? "text-white" : "text-secondary-text"}
        />
      ) : (
        icon && <span className="flex items-center">{icon}</span>
      )}
      {children}
    </button>
  );
}
