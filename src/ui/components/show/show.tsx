import { ShowProps } from "./show.types";

export function Show({ if: condition, children }: ShowProps) {
  return condition ? <>{children}</> : null;
}
