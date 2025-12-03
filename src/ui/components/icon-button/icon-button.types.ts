import { ReactNode } from "react";

export type IconButtonVariant = "primary" | "secondary" | "ghost";
export type IconButtonSize = "small" | "medium" | "large";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  icon: ReactNode;
}
