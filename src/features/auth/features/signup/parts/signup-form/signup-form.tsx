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

export function SignupForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [termsError, setTermsError] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setFullNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setTermsError("");

    // Validation
    let hasError = false;

    if (!fullName.trim()) {
      setFullNameError("Full name is required");
      hasError = true;
    }

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
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      hasError = true;
    }

    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm your password");
      hasError = true;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      hasError = true;
    }

    if (!agreeToTerms) {
      setTermsError("You must agree to the terms and conditions");
      hasError = true;
    }

    if (hasError) return;

    // Simulate signup
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log("Signup:", { fullName, email, password, agreeToTerms });
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
          Create your Account
        </Text>
        <Text size="base" className="text-gray-600 hidden lg:block" as="p">
          Join Matchmaker Pro and start connecting hearts.
        </Text>
      </div>

      {/* Signup Form */}
      <form onSubmit={handleSignup} className="space-y-5">
        <Input
          label="Full Name"
          type="text"
          placeholder="John Doe"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          error={fullNameError}
        />

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
            placeholder="At least 8 characters"
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

        <div className="relative">
          <Input
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={confirmPasswordError}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-[42px] text-gray-500 hover:text-gray-700"
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div>
          <div className="flex items-start gap-2">
            <Checkbox
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
            />
            <Text size="sm" className="text-gray-700 -mt-1" as="span">
              I agree to the{" "}
              <LinkButton variant="primary" href="#" className="text-sm">
                Terms of Service
              </LinkButton>{" "}
              and{" "}
              <LinkButton variant="primary" href="#" className="text-sm">
                Privacy Policy
              </LinkButton>
            </Text>
          </div>
          {termsError && (
            <Text size="sm" className="text-error mt-1" as="p">
              {termsError}
            </Text>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          loading={isLoading}
          className="w-full"
        >
          Create Account
        </Button>

        <Text size="sm" className="text-center text-gray-600" as="p">
          Already have an account?{" "}
          <LinkButton
            variant="primary"
            to={authRouteNames.login}
            className="text-sm"
          >
            Log in
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
