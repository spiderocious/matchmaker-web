import { ReactNode } from "react";

export type TextSize =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";
export type TextWeight = "normal" | "medium" | "semibold" | "bold";
export type TextAlign = "left" | "center" | "right";
export type TextAs =
  | "p"
  | "span"
  | "div"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  size?: TextSize;
  weight?: TextWeight;
  align?: TextAlign;
  as?: TextAs;
  children: ReactNode;
}
