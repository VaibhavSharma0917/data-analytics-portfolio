import { ExternalLink, Database } from "lucide-react";
import { useEffect, useState } from "react";
import api from "../../lib/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await api.get("/project");
      setProjects(res.data.projects);
    } catch (error) {
      console.error("Error Fetching Projects:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="projects" className="py-24 text-center">
        <h2 className="text-2xl font-bold">Loading Projects...</h2>
      </section>
    );
  }

  return (
    <section id="projects" className="bg-transparent py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-slate-900">
          Featured Projects
        </h2>

        <p className="text-slate-600 text-center mt-4 mb-16 text-lg">
          A collection of projects that reflect my learning journey in Data Analytics.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="h-52 overflow-hidden">
                {project.image ? (
                  <img
                    src={`https://data-analytics-portfolio-q9wi.onrender.com/uploads/projects/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="h-full bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                    <Database className="w-16 h-16 text-cyan-600" />
                  </div>
                )}
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-600 leading-7 mb-6">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl hover:bg-slate-700 transition"
                    >
                      <Database size={18} />
                      GitHub
                    </a>
                  )}

                  {project.live_demo && (
                    <a
                      href={project.live_demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-xl hover:bg-cyan-700 transition"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}