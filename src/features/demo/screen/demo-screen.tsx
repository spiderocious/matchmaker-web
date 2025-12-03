import { useState } from "react";
import {
  Button,
  IconButton,
  Input,
  Checkbox,
  Radio,
  Toggle,
  Avatar,
  Tag,
  UserCard,
  MessageBubble,
  MessageInput,
  Info,
  Hidden,
  Show,
  Spinner,
  Loadable,
} from "@ui/components";
import { FaHeart, FaPlus, FaEllipsisH, FaTimes } from "react-icons/fa";

export function DemoScreen() {
  const [messageText, setMessageText] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("option1");
  const [showConditional, setShowConditional] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSendMessage = () => {
    console.log("Sending message:", messageText);
    setMessageText("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.length > 0 && value.length < 3) {
      setInputError("This field is required");
    } else {
      setInputError("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          MatchMaker Design System
        </h1>
        <p className="text-gray-600 mb-12">
          Component library showcase and testing ground
        </p>

        {/* Buttons Section */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Buttons</h2>

          {/* Primary Action Buttons */}
          <div className="mb-12">
            <h3 className="text-xl font-medium text-gray-800 mb-6">
              Primary Action
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary">Default</Button>
              <Button variant="primary" className="ring-2 ring-primary-active">
                Active
              </Button>
              <Button variant="primary" disabled>
                Disabled
              </Button>
              <Button variant="primary" icon={<FaHeart />}>
                With Icon
              </Button>
            </div>
          </div>

          {/* Secondary Action Buttons */}
          <div className="mb-12">
            <h3 className="text-xl font-medium text-gray-800 mb-6">
              Secondary Action
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="secondary">Default</Button>
              <Button
                variant="secondary"
                className="ring-2 ring-secondary-text"
              >
                Active
              </Button>
              <Button variant="secondary" disabled>
                Disabled
              </Button>
              <Button variant="secondary" icon={<FaPlus />}>
                With Icon
              </Button>
            </div>
          </div>

          {/* Icon Buttons */}
          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-6">
              Icon Button
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <IconButton icon={<FaEllipsisH />} variant="ghost" />
              <IconButton icon={<FaHeart />} variant="primary" />
              <IconButton icon={<FaTimes />} variant="ghost" />
            </div>
          </div>
        </section>

        {/* Inputs Section */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Inputs</h2>

          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-6">
              Text Input
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              <Input label="Name" placeholder="Enter your name" />
              <Input
                label="Active"
                placeholder="John Doe"
                value="John Doe"
                onChange={() => {}}
              />
              <Input
                label="Error State"
                placeholder="Invalid input"
                value={inputValue}
                onChange={handleInputChange}
                error={inputError}
              />
              <Input label="Disabled" placeholder="Disabled input" disabled />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-6">
              Selection Controls
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-3">
                  Checkbox
                </p>
                <div className="space-y-3">
                  <Checkbox label="Checkbox" />
                  <Checkbox label="Checked" defaultChecked />
                  <Checkbox label="Disabled" disabled />
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-3">
                  Radio Button
                </p>
                <div className="space-y-3">
                  <Radio
                    label="Option 1"
                    name="radio-group"
                    value="option1"
                    checked={selectedRadio === "option1"}
                    onChange={(e) => setSelectedRadio(e.target.value)}
                  />
                  <Radio
                    label="Option 2"
                    name="radio-group"
                    value="option2"
                    checked={selectedRadio === "option2"}
                    onChange={(e) => setSelectedRadio(e.target.value)}
                  />
                  <Radio label="Disabled" name="radio-disabled" disabled />
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-3">
                  Toggle Switch
                </p>
                <div className="space-y-3">
                  <Toggle
                    label="Toggle Switch"
                    checked={isToggled}
                    onChange={(e) => setIsToggled(e.target.checked)}
                  />
                  <Toggle label="Checked" defaultChecked />
                  <Toggle label="Disabled" disabled />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Cards</h2>

          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-6">
              User Profile Card
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <UserCard
                name="Jane Doe"
                age={29}
                location="San Francisco, CA"
                isOnline={true}
                tags={["Art", "Travel", "Hiking"]}
                onMessage={() => alert("Message clicked!")}
                onViewProfile={() => alert("View profile clicked!")}
              />
              <UserCard
                name="John Smith"
                age={32}
                location="New York, NY"
                isOnline={false}
                tags={["Music", "Cooking"]}
                onMessage={() => alert("Message clicked!")}
                onViewProfile={() => alert("View profile clicked!")}
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-6">
              Avatar & Tags
            </h3>
            <div className="flex flex-wrap gap-6 items-center mb-6">
              <Avatar size="small" fallback="S" />
              <Avatar size="medium" fallback="M" showOnlineStatus isOnline />
              <Avatar size="large" fallback="L" showOnlineStatus />
            </div>
            <div className="flex flex-wrap gap-2">
              <Tag variant="primary">Primary</Tag>
              <Tag variant="secondary">Secondary</Tag>
              <Tag variant="success">Success</Tag>
              <Tag variant="neutral">Neutral</Tag>
              <Tag size="small">Small Tag</Tag>
            </div>
          </div>
        </section>

        {/* Messaging Section */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Messaging
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-6">
              Chat Interface
            </h3>
            <div className="max-w-2xl bg-gray-50 rounded-lg p-6 space-y-4">
              <MessageBubble
                message="Hey! How was your weekend? Did you get a chance to go on that hike?"
                variant="received"
                senderName="Jane"
                timestamp="10:30 AM"
              />
              <MessageBubble
                message="It was amazing! The weather was perfect. We should do it together next time."
                variant="sent"
                timestamp="10:32 AM"
              />
              <MessageBubble
                message="That sounds great! I would love to join you next time."
                variant="received"
                senderName="Jane"
                timestamp="10:33 AM"
              />

              <div className="pt-4">
                <MessageInput
                  value={messageText}
                  onChange={setMessageText}
                  onSend={handleSendMessage}
                  placeholder="Type a message..."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Utility Components Section */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Utility Components
          </h2>

          {/* Info Component */}
          <div className="mb-12">
            <h3 className="text-xl font-medium text-gray-800 mb-6">
              Info / Alert Messages
            </h3>
            <div className="space-y-4 max-w-4xl">
              <Info variant="info" title="Information">
                This is an informational message to provide context to users.
              </Info>
              <Info variant="success" title="Success!">
                Your profile has been updated successfully.
              </Info>
              <Info variant="warning" title="Warning">
                Your session will expire in 5 minutes. Please save your work.
              </Info>
              <Info variant="error" title="Error">
                Failed to load user data. Please check your connection and try
                again.
              </Info>
              <Info variant="info">Info message without a title</Info>
            </div>
          </div>

          {/* Spinner Component */}
          <div className="mb-12">
            <h3 className="text-xl font-medium text-gray-800 mb-6">
              Loading Spinner
            </h3>
            <div className="flex flex-wrap gap-8 items-center">
              <div className="flex flex-col items-center gap-2">
                <Spinner size="small" />
                <span className="text-xs text-gray-600">Small</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Spinner size="medium" />
                <span className="text-xs text-gray-600">Medium</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Spinner size="large" />
                <span className="text-xs text-gray-600">Large</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Spinner size="medium" color="text-success" />
                <span className="text-xs text-gray-600">Custom Color</span>
              </div>
            </div>
          </div>

          {/* Show Component */}
          <div className="mb-12">
            <h3 className="text-xl font-medium text-gray-800 mb-6">
              Conditional Rendering (Show)
            </h3>
            <div className="space-y-4 max-w-4xl">
              <div className="flex items-center gap-4">
                <Toggle
                  label="Toggle visibility"
                  checked={showConditional}
                  onChange={(e) => setShowConditional(e.target.checked)}
                />
              </div>
              <Show if={showConditional}>
                <Info variant="success">
                  This content is visible because the toggle is ON!
                </Info>
              </Show>
              <Show if={!showConditional}>
                <Info variant="info">
                  This content is visible because the toggle is OFF!
                </Info>
              </Show>
            </div>
          </div>

          {/* Hidden Component */}
          <div className="mb-12">
            <h3 className="text-xl font-medium text-gray-800 mb-6">
              Responsive Visibility (Hidden)
            </h3>
            <div className="space-y-4 max-w-4xl">
              <Hidden on="mobile">
                <Info variant="info">
                  Hidden on mobile devices (you can see this on tablet/desktop)
                </Info>
              </Hidden>
              <Hidden on="tablet">
                <Info variant="warning">
                  Hidden on tablets (you can see this on mobile/desktop)
                </Info>
              </Hidden>
              <Hidden on="desktop">
                <Info variant="success">
                  Hidden on desktop (you can see this on mobile/tablet)
                </Info>
              </Hidden>
              <Hidden on={["mobile", "tablet"]}>
                <Info variant="error">
                  Only visible on desktop (hidden on mobile and tablet)
                </Info>
              </Hidden>
            </div>
          </div>

          {/* Loadable Component */}
          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-6">
              Loadable Component
            </h3>
            <div className="space-y-6 max-w-4xl">
              <div className="flex gap-4">
                <Button
                  variant={isLoading ? "secondary" : "primary"}
                  onClick={() => {
                    setIsLoading(true);
                    setHasError(false);
                    setTimeout(() => setIsLoading(false), 2000);
                  }}
                >
                  Simulate Loading
                </Button>
                <Button
                  variant={hasError ? "secondary" : "primary"}
                  onClick={() => {
                    setHasError(true);
                    setIsLoading(false);
                  }}
                >
                  Simulate Error
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setIsLoading(false);
                    setHasError(false);
                  }}
                >
                  Reset
                </Button>
              </div>

              <Loadable
                loading={isLoading}
                error={
                  hasError ? "Failed to load content. Please try again." : null
                }
                retryFn={() => {
                  setHasError(false);
                  setIsLoading(true);
                  //setTimeout(() => setIsLoading(false), 2000);
                }}
                width={600}
                height={200}
                background="#f9fafb"
              >
                <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Content Loaded Successfully!
                  </h4>
                  <p className="text-gray-600">
                    This is the actual content that appears when loading is
                    complete and there are no errors. The Loadable component
                    handles loading states, error states, and retry logic
                    automatically.
                  </p>
                </div>
              </Loadable>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
