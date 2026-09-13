import { useState } from "react";
import api from "../../lib/api";

export default function AddProject() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    github: "",
    live_demo: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await api.post(
        "/project",
        {
          title: form.title,
          description: form.description,
          github: form.github,
          live_demo: form.live_demo,
          image: form.image,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      alert("Project Added Successfully!");
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Failed to add project.");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Add Project</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-3 rounded-xl"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          required
        />

        <textarea
          className="w-full border p-3 rounded-xl"
          name="description"
          placeholder="Description"
          onChange={handleChange}
          required
        />

        <input
          className="w-full border p-3 rounded-xl"
          name="github"
          placeholder="GitHub Link"
          onChange={handleChange}
        />

        <input
          className="w-full border p-3 rounded-xl"
          name="live_demo"
          placeholder="Live Demo Link"
          onChange={handleChange}
        />

        <input
          className="w-full border p-3 rounded-xl"
          type="text"
          name="image"
          placeholder="Image Path e.g. /images/projects/sqlImage.jpeg"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="bg-cyan-600 text-white px-6 py-3 rounded-xl"
        >
          Add Project
        </button>
      </form>
    </div>
  );
}