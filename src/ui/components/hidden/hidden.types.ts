import { ReactNode } from "react";

export type DeviceType = "desktop" | "tablet" | "mobile";

export interface HiddenProps extends React.HTMLAttributes<HTMLDivElement> {
  on: DeviceType | DeviceType[];
  children: ReactNode;
}
