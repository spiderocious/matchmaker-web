import { ReactNode } from "react";

export type RowGap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;
export type RowAlign = "start" | "center" | "end" | "stretch" | "baseline";
export type RowJustify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly";
export type RowWrap = "wrap" | "nowrap" | "wrap-reverse";

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: RowGap;
  align?: RowAlign;
  justify?: RowJustify;
  wrap?: RowWrap;
  children: ReactNode;
}
