import { AvatarProps } from "./avatar.types";
import { useState } from "react";

export function Avatar({
  src,
  alt = "Avatar",
  size = "medium",
  showOnlineStatus = false,
  isOnline = false,
  fallback,
  className = "",
}: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    small: "w-8 h-8 text-xs",
    medium: "w-12 h-12 text-sm",
    large: "w-16 h-16 text-base",
  };

  const statusSizeClasses = {
    small: "w-2 h-2",
    medium: "w-3 h-3",
    large: "w-4 h-4",
  };

  const showFallback = !src || imageError;
  const fallbackText = fallback || alt.charAt(0).toUpperCase();

  return (
    <div className={`relative inline-block ${className}`.trim()}>
      <div
        className={`${sizeClasses[size]} rounded-full overflow-hidden bg-gray-200 flex items-center justify-center font-medium text-gray-600`}
      >
        {showFallback ? (
          <span>{fallbackText}</span>
        ) : (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      {showOnlineStatus && (
        <span
          className={`absolute bottom-0 right-0 ${statusSizeClasses[size]} rounded-full border-2 border-white ${
            isOnline ? "bg-online" : "bg-gray-400"
          }`}
        ></span>
      )}
    </div>
  );
}
