import { ReactNode } from "react";

export type TagVariant = "primary" | "secondary" | "success" | "neutral";
export type TagSize = "small" | "medium";

export interface TagProps {
  children: ReactNode;
  variant?: TagVariant;
  size?: TagSize;
  className?: string;
}
