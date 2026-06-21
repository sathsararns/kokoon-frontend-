import { useState } from "react";
import api from "../../utils/api";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const res = await api.post("/users/login", {
        email,
        password,
      });

      login({
        token: res.data.token,
        role: res.data.role,
        isAdmin: res.data.isAdmin,
        email,
      });

      if (res.data.isAdmin) navigate("/admin");
      else if (res.data.role === "provider") navigate("/provider");
      else navigate("/customer");

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 border rounded w-80 space-y-3">

        <h2 className="text-xl font-bold">Login</h2>

        <input
          className="w-full border p-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full border p-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white p-2"
        >
          Login
        </button>

      </div>
    </div>
  );
}