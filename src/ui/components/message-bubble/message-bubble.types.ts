export type MessageBubbleVariant = "sent" | "received";

export interface MessageBubbleProps {
  message: string;
  variant?: MessageBubbleVariant;
  avatar?: string;
  senderName?: string;
  timestamp?: string;
  className?: string;
}
