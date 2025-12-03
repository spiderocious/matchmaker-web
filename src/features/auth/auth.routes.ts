import { Route } from "@shared/types";
import { lazy } from "react";

const LoginScreen = lazy(() =>
  import("./features/login/login-screen").then((mod) => {
    return { default: mod.LoginScreen };
  }),
);

const SignupScreen = lazy(() =>
  import("./features/signup/signup-screen").then((mod) => {
    return { default: mod.SignupScreen };
  }),
);

function authRoute(path: string): string {
  return `/auth${path}`;
}

export const authRouteNames = {
  login: authRoute("/login"),
  signup: authRoute("/signup"),
};

export const authRoutes: Route[] = [
  {
    name: "login",
    path: authRouteNames.login,
    component: LoginScreen,
  },
  {
    name: "signup",
    path: authRouteNames.signup,
    component: SignupScreen,
  },
];
