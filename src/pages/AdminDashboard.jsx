import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddProject from "../components/Admin/AddProject";
import ProjectList from "../components/Admin/ProjectList";
import MessageList from "../components/Admin/MessageList";

export default function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="bg-cyan-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-white text-cyan-600 px-5 py-2 rounded-lg font-semibold"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-10 space-y-8">
        <AddProject />
        <ProjectList />
        <MessageList />
      </div>
    </div>
  );
}
