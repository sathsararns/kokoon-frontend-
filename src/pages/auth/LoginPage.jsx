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

      // redirect
      if (res.data.isAdmin) navigate("/admin");
      else if (res.data.role === "provider") navigate("/provider");
      else navigate("/customer");

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  }

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}