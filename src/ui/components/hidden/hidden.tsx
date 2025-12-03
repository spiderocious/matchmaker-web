import { HiddenProps, DeviceType } from "./hidden.types";

export function Hidden({ on, children }: HiddenProps) {
  const devices = Array.isArray(on) ? on : [on];

  const getHiddenClasses = (deviceList: DeviceType[]): string => {
    const classes: string[] = [];

    deviceList.forEach((device) => {
      switch (device) {
        case "mobile":
          // Hide on mobile (< 768px)
          classes.push("max-md:hidden");
          break;
        case "tablet":
          // Hide on tablet (768px - 1024px)
          classes.push("md:hidden lg:block");
          break;
        case "desktop":
          // Hide on desktop (>= 1024px)
          classes.push("lg:hidden");
          break;
      }
    });

    return classes.join(" ");
  };

  return <div className={getHiddenClasses(devices)}>{children}</div>;
}
