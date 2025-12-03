export type AvatarSize = "small" | "medium" | "large";

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: AvatarSize;
  showOnlineStatus?: boolean;
  isOnline?: boolean;
  fallback?: string;
  className?: string;
}
