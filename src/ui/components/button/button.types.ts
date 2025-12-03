import { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: ReactNode;
  loading?: boolean;
  children: ReactNode;
}
