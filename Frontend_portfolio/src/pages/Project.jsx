import React from "react";
import { useProjects } from "../context/ProjectContext";
import "../css/Projects.css";

const Projects = () => {
  const { projects } = useProjects();
  console.log("projects:", projects);

  return (
    <section className="projects-section">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-grid">
        {projects && projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.id} className="project-card">
              
              {/* Project Image */}
              <img
                src={
                  project.image ||
                  "https://via.placeholder.com/400x200?text=Project+Image"
                }
                alt={project.title}
                className="project-image"
              />

              <h2>{project.title}</h2>
              <p>{project.description}</p>

              <span className="tech">
                Tech: {project.tech || "MERN Stack"}
              </span>
            </div>
          ))
        ) : (
          <p>Loading projects...</p>
        )}
      </div>
    </section>
  );
};

export default Projects;