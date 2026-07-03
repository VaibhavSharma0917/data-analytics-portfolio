import { useEffect, useState } from "react";
import api from "../../lib/api";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.get("/project", {
        headers: { Authorization: token },
      });
      setProjects(res.data.projects);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const deleteProject = async (id) => {
    if (!window.confirm("Delete this project?")) return;

    try {
      const token = localStorage.getItem("token");
      await api.delete(`/project/${id}`, {
        headers: { Authorization: token },
      });
      fetchProjects();
    } catch {
      alert("Failed to delete project");
    }
  };

  if (loading) {
    return <p className="text-center py-6">Loading projects...</p>;
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>

      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="border rounded-xl p-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-slate-600">{project.description}</p>
              </div>

              <button
                onClick={() => deleteProject(project.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
