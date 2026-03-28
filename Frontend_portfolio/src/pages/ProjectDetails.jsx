import React, { useState } from "react";
import { useProjects } from "../context/ProjectContext";
import "../css/AddProject.css";

const AddProject = () => {
  const { addProject } = useProjects();

  const [form, setForm] = useState({
    title: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("image", form.image);

    addProject(formData);

    setForm({
      title: "",
      description: "",
      image: null,
    });
  };

  return (
    <section className="add-project-section">
      <div className="add-project-card">
        <h1>Add New Project</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={form.title}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Project Description"
            value={form.description}
            onChange={handleChange}
            required
          />

          <input
            type="file"
            name="image"
            onChange={handleChange}
            required
          />

          <button type="submit">Add Project</button>

        </form>
      </div>
    </section>
  );
};

export default AddProject;