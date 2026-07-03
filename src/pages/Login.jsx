import { useState } from "react";
import api from "../lib/api";

export default function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await api.post("/admin/login", form);

      localStorage.setItem("token", res.data.token);

      setMessage("Login Successful ✅");
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-5"
      >
        <h1 className="text-3xl font-bold text-center">
          Admin Login
        </h1>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-cyan-600 text-white py-3 rounded-xl hover:bg-cyan-700"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {message && (
          <p className="text-center font-medium">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
