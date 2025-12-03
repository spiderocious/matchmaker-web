import { ReactNode } from "react";

export interface ShowProps extends React.HTMLAttributes<HTMLDivElement> {
  if: boolean;
  children: ReactNode;
  asFragment?: boolean;
}
