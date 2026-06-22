import { useAuth } from "../../context/AuthContext";

export default function ProfileHeader({ profile }) {
  const { user } = useAuth();

  const avatar =
    profile?.image ||
    user?.image ||
    "https://ui-avatars.com/api/?name=" +
      encodeURIComponent(
        `${profile?.firstName || "User"} ${profile?.lastName || ""}`
      ) +
      "&background=0D8ABC&color=fff&size=200";

  return (
    <div className="bg-white rounded-xl shadow-md p-8 mb-8">

      <div className="flex flex-col items-center">

        {/* Avatar */}
        <img
          src={avatar}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
          onError={(e) => {
            e.target.src =
              "https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff";
          }}
        />

        {/* Name */}
        <h1 className="text-3xl font-bold mt-5">
          {profile.firstName} {profile.lastName}
        </h1>

        {/* Email */}
        <p className="text-gray-500 mt-1">
          {profile.email}
        </p>

        {/* Role Badge */}
        <span
          className="
            mt-4
            px-5
            py-2
            rounded-full
            bg-blue-100
            text-blue-700
            font-semibold
          "
        >
          {profile.role.toUpperCase()}
        </span>

      </div>

    </div>
  );
}