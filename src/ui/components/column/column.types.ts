import { ReactNode } from "react";

export type ColumnGap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;
export type ColumnAlign = "start" | "center" | "end" | "stretch" | "baseline";
export type ColumnJustify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly";
export type ColumnWrap = "wrap" | "nowrap" | "wrap-reverse";

export interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: ColumnGap;
  align?: ColumnAlign;
  justify?: ColumnJustify;
  wrap?: ColumnWrap;
  children: ReactNode;
}
