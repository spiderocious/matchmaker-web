import { ReactNode } from "react";

export type LinkButtonVariant = "primary" | "secondary" | "default";

export interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkButtonVariant;
  children: ReactNode;
  disabled?: boolean;
  to?: string;
}
