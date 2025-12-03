import { Route } from "@shared/types";
import { lazy } from "react";

const demoScreen = lazy(() =>
  import("./screen/demo-screen").then((mod) => {
    return { default: mod.DemoScreen };
  }),
);

export const demoRoutes: Route[] = [
  {
    name: "demo",
    path: "/demo",
    component: demoScreen,
  },
];
