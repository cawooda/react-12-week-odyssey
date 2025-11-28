interface ProfileCardProps {
  name: string;
  title?: string;
  avatarUrl?: string;
  bio?: string;
}

function ProfileCard({ name, title, avatarUrl, bio }: ProfileCardProps) {
  return (
    <div
      className="flex flex-col items-center rounded-2xl m-4 p-4 shadow-lg w-full max-w-2xl"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      {/* Header: Avatar + Name & Title */}
      <div className="flex flex-row items-center w-full gap-4">
        {/* Avatar container */}
        <div
          className="rounded-2xl p-2"
          style={{ backgroundColor: "var(--color-bg-muted)" }}
        >
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={`${name}'s avatar`}
              className="h-20 w-20 rounded-full object-cover"
            />
          ) : (
            <div
              className="h-20 w-20 rounded-full flex items-center justify-center text-white font-semibold"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              {name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        {/* Name & Title */}
        <div className="flex flex-col flex-1">
          <div className="mb-1">
            <h2
              className="text-sm font-medium"
              style={{ color: "var(--color-text-muted)" }}
            >
              Name
            </h2>
            <h3
              className="text-lg font-semibold"
              style={{ color: "var(--color-text)" }}
            >
              {name}
            </h3>
          </div>
          {title && (
            <div>
              <h2
                className="text-sm font-medium"
                style={{ color: "var(--color-text-muted)" }}
              >
                Title
              </h2>
              <h3
                className="text-md font-medium"
                style={{ color: "var(--color-text)" }}
              >
                {title}
              </h3>
            </div>
          )}
        </div>
      </div>

      {/* Bio section */}
      {bio && (
        <div
          className="mt-4 w-full rounded-2xl p-4"
          style={{ backgroundColor: "var(--color-bg-muted)" }}
        >
          <p style={{ color: "var(--color-text)" }}>{bio}</p>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;
