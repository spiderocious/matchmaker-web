import {
  FlexProps,
  FlexDirection,
  FlexGap,
  FlexAlign,
  FlexJustify,
  FlexWrap,
} from "./flex.types";

export function Flex({
  direction = "row",
  gap = 0,
  align = "start",
  justify = "start",
  wrap = "nowrap",
  className = "",
  children,
  ...props
}: FlexProps) {
  const directionClasses: Record<FlexDirection, string> = {
    row: "flex-row",
    column: "flex-col",
  };

  const gapClasses: Record<FlexGap, string> = {
    0: "gap-0",
    1: "gap-1",
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
    5: "gap-5",
    6: "gap-6",
    8: "gap-8",
    10: "gap-10",
    12: "gap-12",
    16: "gap-16",
    20: "gap-20",
    24: "gap-24",
  };

  const alignClasses: Record<FlexAlign, string> = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  };

  const justifyClasses: Record<FlexJustify, string> = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  };

  const wrapClasses: Record<FlexWrap, string> = {
    wrap: "flex-wrap",
    nowrap: "flex-nowrap",
    "wrap-reverse": "flex-wrap-reverse",
  };

  const combinedClasses =
    `flex ${directionClasses[direction]} ${gapClasses[gap]} ${alignClasses[align]} ${justifyClasses[justify]} ${wrapClasses[wrap]} ${className}`.trim();

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
}
