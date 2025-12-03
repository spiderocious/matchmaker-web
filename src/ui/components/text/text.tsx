import { TextProps } from "./text.types";

export function Text({
  size = "base",
  weight = "normal",
  align = "left",
  as: Component = "p",
  className = "",
  children,
  ...props
}: TextProps) {
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
  };

  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const combinedClasses =
    `${sizeClasses[size]} ${weightClasses[weight]} ${alignClasses[align]} ${className}`.trim();

  return (
    <Component className={combinedClasses} {...props}>
      {children}
    </Component>
  );
}
