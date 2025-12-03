import { MessageBubbleProps } from "./message-bubble.types";
import { Avatar } from "../avatar/avatar";

export function MessageBubble({
  message,
  variant = "received",
  avatar,
  senderName,
  timestamp,
  className = "",
}: MessageBubbleProps) {
  const isSent = variant === "sent";

  const bubbleClasses = isSent
    ? "bg-primary text-white ml-auto"
    : "bg-gray-100 text-gray-900 mr-auto";

  return (
    <div
      className={`flex gap-3 max-w-md ${isSent ? "flex-row-reverse" : ""} ${className}`.trim()}
    >
      {!isSent && avatar && (
        <Avatar src={avatar} alt={senderName || "User"} size="small" />
      )}

      <div className={`flex flex-col ${isSent ? "items-end" : "items-start"}`}>
        {!isSent && senderName && (
          <span className="text-xs text-gray-600 mb-1 px-4">{senderName}</span>
        )}

        <div className={`${bubbleClasses} rounded-2xl px-4 py-2.5`}>
          <p className="text-sm leading-relaxed">{message}</p>
        </div>

        {timestamp && (
          <span className="text-xs text-gray-500 mt-1 px-4">{timestamp}</span>
        )}
      </div>
    </div>
  );
}
