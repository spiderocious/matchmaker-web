import { Hidden } from "@ui/components";
import { LoginDetails } from "../shared/login-details/login-details";
import { SignupForm } from "./parts/signup-form/signup-form";

export function SignupScreen() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Details (Desktop Only) */}
      <Hidden on={["mobile", "tablet"]} className="w-1/2">
        <div className="w-full min-h-screen h-full">
          <LoginDetails />
        </div>
      </Hidden>

      {/* Right Side - Signup Form (All Devices) */}
      <div className="flex-1 flex items-center justify-center bg-gray-50 w-1/2">
        <SignupForm />
      </div>
    </div>
  );
}
