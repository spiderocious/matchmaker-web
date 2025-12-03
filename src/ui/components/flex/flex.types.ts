import { ReactNode } from "react";

export type FlexDirection = "row" | "column";
export type FlexGap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;
export type FlexAlign = "start" | "center" | "end" | "stretch" | "baseline";
export type FlexJustify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly";
export type FlexWrap = "wrap" | "nowrap" | "wrap-reverse";

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: FlexDirection;
  gap?: FlexGap;
  align?: FlexAlign;
  justify?: FlexJustify;
  wrap?: FlexWrap;
  children: ReactNode;
}
