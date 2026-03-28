import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  // GET ALL PROJECTS
  const fetchProjects = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/project/get"
      );

      console.log("API RESPONSE:", res.data);

      setProjects(res.data.data);

    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  // ADD PROJECT (ADMIN ONLY)
  const addProject = async (formData) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:8000/api/project/add",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Project Added:", res.data);

      // Refresh project list
      fetchProjects();

    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        fetchProjects,
        addProject
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectContext);