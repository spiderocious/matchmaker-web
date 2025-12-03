import { ReactNode } from "react";

export type DeviceType = "desktop" | "tablet" | "mobile";

export interface HiddenProps {
  on: DeviceType | DeviceType[];
  children: ReactNode;
}
