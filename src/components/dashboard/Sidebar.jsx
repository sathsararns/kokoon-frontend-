import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Sidebar() {
  const { user } = useAuth();

  return (
    <div className="w-64 bg-white border-r p-4">

      <h2 className="text-xl font-bold mb-6">
        {user?.role?.toUpperCase()} PANEL
      </h2>

      <div className="space-y-3">

        {user?.role === "customer" && (
          <>
            <Link to="/customer" className="block">Dashboard</Link>
          </>
        )}

        {user?.role === "provider" && (
          <>
            <Link to="/provider" className="block">Dashboard</Link>
          </>
        )}

        {user?.role === "admin" && (
          <>
            <Link to="/admin" className="block">Dashboard</Link>
          </>
        )}

      </div>

    </div>
  );
}