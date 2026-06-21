import useAuth from "../../hooks/useAuth";

export default function Topbar() {
  const { user } = useAuth();

  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-6">

      {/* Left Side */}
      <div>
        <h1 className="text-lg font-semibold text-gray-800">
          Dashboard
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">

        {/* User Info */}
        <div className="text-right">
          <p className="text-sm font-medium text-gray-800">
            {user?.name || "User"}
          </p>
          <p className="text-xs text-gray-500 capitalize">
            {user?.role || "role"}
          </p>
        </div>

        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
          {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
        </div>

      </div>
    </div>
  );
}