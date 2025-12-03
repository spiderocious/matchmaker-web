import { Text, LinkButton } from "@ui/components";
import { FaHeart } from "@ui/icons";

export function LoginDetails() {
  return (
    <div className="flex flex-col justify-between h-full p-12 bg-[#5c7c5d]">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <FaHeart className="w-6 h-6 text-primary" />
        <Text size="xl" weight="bold" className="text-gray-900" as="span">
          Matchmaker Pro
        </Text>
      </div>

      {/* Center Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        {/* Heart Image */}
        <div className="w-full max-w-lg mb-12">
          <img
            src="https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&h=800&fit=crop"
            alt="Heart decoration"
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Headline */}
        <Text size="4xl" weight="bold" className="text-gray-900 mb-4" as="h1">
          Connecting Hearts with Expertise.
        </Text>

        {/* Subtitle */}
        <Text size="lg" className="text-gray-700 text-center" as="p">
          Log in to your Matchmaker Pro account to manage your clients and
          create lasting connections.
        </Text>
      </div>

      {/* Footer */}
      <div className="flex gap-6 items-center">
        <Text size="sm" className="text-gray-700">
          © 2024 Matchmaker Pro, Inc.
        </Text>
        <LinkButton variant="default" href="#" className="text-sm">
          Terms of Service
        </LinkButton>
        <LinkButton variant="default" href="#" className="text-sm">
          Privacy Policy
        </LinkButton>
      </div>
    </div>
  );
}
