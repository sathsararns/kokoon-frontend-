import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import toast, { Toaster } from "react-hot-toast";

import RoleSelector from "../../components/auth/RoleSelector";
import CustomerFields from "../../components/auth/CustomerFields";
import ProviderFields from "../../components/auth/ProviderFields";

export default function SignupPage() {
  const navigate = useNavigate();

  const [role, setRole] = useState("customer");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    location: "",
    businessName: "",
    description: "",
    category: "",
    serviceRadius: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...formData,
        role,
      };

      const res = await api.post("/users/register", payload);

      localStorage.setItem("token", res.data.token);

      toast.success("Account created successfully");

      // redirect based on role
      if (role === "provider") {
        navigate("/provider");
      } else {
        navigate("/customer");
      }

    } catch (err) {
      toast.error(err?.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <Toaster />

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>

        {/* basic fields */}
        <input
          name="name"
          placeholder="Name"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        {/* ROLE SELECTOR */}
        <RoleSelector role={role} setRole={setRole} />

        {/* CONDITIONAL FIELDS */}
        {role === "customer" && (
          <CustomerFields
            formData={formData}
            handleChange={handleChange}
          />
        )}

        {role === "provider" && (
          <ProviderFields
            formData={formData}
            handleChange={handleChange}
          />
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white p-2 rounded"
        >
          {loading ? "Creating..." : "Create Account"}
        </button>
      </form>
    </div>
  );
}