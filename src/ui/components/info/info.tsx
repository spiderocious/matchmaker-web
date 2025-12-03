import { InfoProps } from "./info.types";
import {
  FaInfoCircle,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
} from "react-icons/fa";

export function Info({
  variant = "info",
  title,
  children,
  icon,
  className = "",
}: InfoProps) {
  const defaultIcons = {
    info: <FaInfoCircle className="w-5 h-5" />,
    success: <FaCheckCircle className="w-5 h-5" />,
    warning: <FaExclamationTriangle className="w-5 h-5" />,
    error: <FaTimesCircle className="w-5 h-5" />,
  };

  const variantClasses = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    success: "bg-success-light border-success text-success-dark",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    error: "bg-error-light border-error text-error-dark",
  };

  const iconColorClasses = {
    info: "text-blue-500",
    success: "text-success",
    warning: "text-yellow-500",
    error: "text-error",
  };

  const displayIcon = icon || defaultIcons[variant];

  return (
    <div
      className={`flex gap-3 p-4 rounded-lg border ${variantClasses[variant]} ${className}`.trim()}
      role="alert"
    >
      <div className={`flex-shrink-0 ${iconColorClasses[variant]}`}>
        {displayIcon}
      </div>
      <div className="flex-1">
        {title && <h4 className="font-semibold mb-1">{title}</h4>}
        <div className="text-sm">{children}</div>
      </div>
    </div>
  );
}
