import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Sidebar() {
  const { user, logout } = useAuth();

  const customerLinks = [
    { name: "Dashboard", path: "/customer" },
    { name: "Search Providers", path: "/customer/search" },
    { name: "Bookings", path: "/customer/bookings" },
    { name: "Favorites", path: "/customer/favorites" },
    { name: "Profile", path: "/customer/profile" },
  ];

  const providerLinks = [
    { name: "Dashboard", path: "/provider" },
    { name: "My Services", path: "/provider/services" },
    { name: "Booking Requests", path: "/provider/bookings" },
    { name: "Availability", path: "/provider/availability" },
    { name: "Profile", path: "/provider/profile" },
  ];

  const adminLinks = [
    { name: "Dashboard", path: "/admin" },
    { name: "Users", path: "/admin/users" },
    { name: "Providers", path: "/admin/providers" },
    { name: "Categories", path: "/admin/categories" },
    { name: "Bookings", path: "/admin/bookings" },
  ];

  let links = [];

  if (user?.role === "customer") links = customerLinks;
  else if (user?.role === "provider") links = providerLinks;
  else if (user?.role === "admin") links = adminLinks;

  return (
    <div className="w-64 h-full bg-[#0b1736] text-white flex flex-col p-4">

      <h1 className="text-xl font-bold mb-6">
        Service Hub
      </h1>

      <nav className="flex flex-col gap-2 flex-1">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `p-2 rounded hover:bg-white/10 ${
                isActive ? "bg-white/20" : ""
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 p-2 rounded"
      >
        Logout
      </button>

    </div>
  );
}