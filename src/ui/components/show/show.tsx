import { ShowProps } from "./show.types";

export function Show({
  if: condition,
  children,
  asFragment = true,
  className,
  ...props
}: ShowProps) {
  if (!condition) return null;

  // If asFragment is true or no className/props, render as fragment
  if (asFragment && !className && Object.keys(props).length === 0) {
    return <>{children}</>;
  }

  // Otherwise render as div with attributes
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
