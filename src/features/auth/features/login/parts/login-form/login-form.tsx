import { useState } from "react";
import {
  Button,
  Input,
  Checkbox,
  Show,
  Hidden,
  LinkButton,
  Text,
} from "@ui/components";
import { FaEye, FaEyeSlash, FaHeart } from "@ui/icons";
import { authRouteNames } from "@features/auth/auth.routes";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setEmailError("");
    setPasswordError("");

    // Validation
    let hasError = false;

    if (!email) {
      setEmailError("Email is required");
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email");
      hasError = true;
    }

    if (!password) {
      setPasswordError("Password is required");
      hasError = true;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      hasError = true;
    }

    if (hasError) return;

    // Simulate login
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log("Login:", { email, password, rememberMe });
    }, 2000);
  };

  return (
    <div className="w-full max-w-md mx-auto px-6 py-12 lg:px-0 lg:max-w-lg">
      {/* Mobile Logo */}
      <Show if={true}>
        <div className="flex items-center gap-2 mb-8 lg:hidden">
          <FaHeart className="w-6 h-6 text-primary" />
          <Text size="xl" weight="bold" className="text-gray-900" as="span">
            Matchmaker Pro
          </Text>
        </div>
      </Show>

      {/* Form Header */}
      <div className="mb-8 text-center lg:text-left">
        <Text
          size="4xl"
          weight="semibold"
          className="text-gray-900 mb-2"
          as="h1"
        >
          Log in to your Account
        </Text>
        <Text size="base" className="text-gray-600 hidden lg:block" as="p">
          Connecting Hearts with Expertise.
        </Text>
      </div>

      {/* Login Form */}
      <form onSubmit={handleLogin} className="space-y-5">
        <Input
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
        />

        <div className="relative">
          <Input
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-[42px] text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div className="flex items-center justify-between">
          <Checkbox
            label="Remember me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <LinkButton
            variant="primary"
            to="/forgot-password"
            className="text-sm"
          >
            Forgot Password?
          </LinkButton>
        </div>

        <Button
          type="submit"
          variant="primary"
          loading={isLoading}
          className="w-full"
        >
          Login
        </Button>

        <Text size="sm" className="text-center text-gray-600" as="p">
          Don&apos;t have an account?{" "}
          <LinkButton
            variant="primary"
            to={authRouteNames.signup}
            className="text-sm"
          >
            Sign up
          </LinkButton>
        </Text>
      </form>

      {/* Mobile Footer */}
      <Hidden on={["desktop", "tablet"]}>
        <div className="mt-12 text-center lg:hidden">
          <Text size="sm" className="text-gray-600" as="p">
            © 2024 Matchmaker Pro, Inc.
          </Text>
        </div>
      </Hidden>
    </div>
  );
}
