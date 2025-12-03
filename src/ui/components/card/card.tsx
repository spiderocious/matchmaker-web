import { CardProps, UserCardProps } from "./card.types";
import { Avatar } from "../avatar/avatar";
import { Tag } from "../tag/tag";
import { Button } from "../button/button";

export function Card({
  children,
  className = "",
  hoverable = false,
}: CardProps) {
  const baseClasses =
    "bg-white rounded-card shadow-card p-6 transition-shadow duration-200";
  const hoverClasses = hoverable ? "hover:shadow-card-hover" : "";
  const combinedClasses = `${baseClasses} ${hoverClasses} ${className}`.trim();

  return <div className={combinedClasses}>{children}</div>;
}

export function UserCard({
  avatar,
  name,
  age,
  location,
  isOnline = false,
  tags = [],
  onMessage,
  onViewProfile,
  className = "",
}: UserCardProps) {
  return (
    <Card hoverable className={`max-w-sm ${className}`.trim()}>
      <div className="flex flex-col items-center text-center">
        <Avatar
          src={avatar}
          alt={name}
          size="large"
          showOnlineStatus
          isOnline={isOnline}
          fallback={name}
          className="mb-4"
        />

        <h3 className="text-xl font-semibold text-gray-900">
          {name}
          {age && `, ${age}`}
        </h3>

        {location && <p className="text-sm text-gray-600 mt-1">{location}</p>}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {tags.map((tag, index) => (
              <Tag key={index} variant="primary" size="small">
                {tag}
              </Tag>
            ))}
          </div>
        )}

        <div className="flex gap-3 mt-6 w-full">
          {onMessage && (
            <Button variant="secondary" onClick={onMessage} className="flex-1">
              Message
            </Button>
          )}
          {onViewProfile && (
            <Button
              variant="primary"
              onClick={onViewProfile}
              className="flex-1"
            >
              View Profile
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
