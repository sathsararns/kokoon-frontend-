import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function DashboardLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-[#0b1736] text-white p-5">
        <h1 className="text-xl font-bold mb-8">
          Dashboard
        </h1>

        <nav className="flex flex-col gap-4">

          {user?.role === "customer" && (
            <>
              <NavLink to="/customer" className="hover:text-yellow-400">
                Home
              </NavLink>
              <NavLink to="/customer/bookings" className="hover:text-yellow-400">
                My Bookings
              </NavLink>
              <NavLink to="/customer/profile" className="hover:text-yellow-400">
                Profile
              </NavLink>
            </>
          )}

          {user?.role === "provider" && (
            <>
              <NavLink to="/provider" className="hover:text-yellow-400">
                Dashboard
              </NavLink>
              <NavLink to="/provider/services" className="hover:text-yellow-400">
                My Services
              </NavLink>
              <NavLink to="/provider/bookings" className="hover:text-yellow-400">
                Bookings
              </NavLink>
            </>
          )}

          {user?.isAdmin && (
            <>
              <NavLink to="/admin" className="hover:text-yellow-400">
                Admin Home
              </NavLink>
              <NavLink to="/admin/users" className="hover:text-yellow-400">
                Users
              </NavLink>
            </>
          )}

        </nav>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="mt-10 bg-red-500 px-4 py-2 rounded"
        >
          Logout
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>

    </div>
  );
}