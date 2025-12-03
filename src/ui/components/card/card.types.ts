import { ReactNode } from "react";

export interface UserCardProps {
  avatar?: string;
  name: string;
  age?: number;
  location?: string;
  isOnline?: boolean;
  tags?: string[];
  onMessage?: () => void;
  onViewProfile?: () => void;
  className?: string;
}

export interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}
