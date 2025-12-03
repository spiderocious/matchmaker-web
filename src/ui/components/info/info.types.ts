import { ReactNode } from "react";

export type InfoVariant = "info" | "success" | "warning" | "error";

export interface InfoProps {
  variant?: InfoVariant;
  title?: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}
