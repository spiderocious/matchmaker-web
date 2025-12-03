import { ReactNode } from "react";

export interface LoadableProps {
  loading: boolean;
  loadingComponent?: ReactNode;
  error?: string | null;
  retryFn?: () => void;
  width?: number;
  height?: number;
  background?: string;
  retryLabel?: string;
  children: ReactNode;
}
