import { useState } from "react";
import api from "../../lib/api";

export default function AddProject() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    github: "",
    live_demo: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", form.title);
    data.append("description", form.description);
    data.append("github", form.github);
    data.append("live_demo", form.live_demo);
    data.append("image", form.image);

    try {
      const token = localStorage.getItem("token");

      await api.post("/project", data, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Project Added Successfully!");
      window.location.reload();
    } catch (err) {
      alert("Failed to add project.");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Add Project</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full border p-3 rounded-xl" name="title" placeholder="Title" onChange={handleChange} required />
        <textarea className="w-full border p-3 rounded-xl" name="description" placeholder="Description" onChange={handleChange} required />
        <input className="w-full border p-3 rounded-xl" name="github" placeholder="GitHub Link" onChange={handleChange} />
        <input className="w-full border p-3 rounded-xl" name="live_demo" placeholder="Live Demo Link" onChange={handleChange} />
        <input className="w-full border p-3 rounded-xl" type="file" name="image" accept="image/*" onChange={handleChange} required />
        <button className="bg-cyan-600 text-white px-6 py-3 rounded-xl">Add Project</button>
      </form>
    </div>
  );
}
