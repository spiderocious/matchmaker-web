import { MessageInputProps } from "./message-input.types";
import { IconButton } from "../icon-button/icon-button";
import { FaPaperPlane } from "react-icons/fa";

export function MessageInput({
  value,
  onChange,
  onSend,
  placeholder = "Type a message...",
  disabled = false,
  className = "",
}: MessageInputProps) {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey && value.trim()) {
      e.preventDefault();
      onSend();
    }
  };

  const handleSendClick = () => {
    if (value.trim()) {
      onSend();
    }
  };

  return (
    <div className={`flex gap-2 items-center ${className}`.trim()}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        disabled={disabled}
        className="flex-1 px-4 py-2.5 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-border-focus text-base transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
      />
      <IconButton
        icon={<FaPaperPlane />}
        variant="primary"
        size="medium"
        onClick={handleSendClick}
        disabled={disabled || !value.trim()}
        aria-label="Send message"
      />
    </div>
  );
}
