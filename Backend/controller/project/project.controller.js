import prisma from "../../prisma/prisma.js";

// 🔐 ADMIN: Add Project (Protected)
const addProject = async (req, res) => {
  try {
    const { title, description } = req.body;

    const project = await prisma.project.create({
      data: {
        title,
        description,
        createdBy: req.user.id,
      },
    });

    res.status(201).json({
      message: "Project created successfully",
      project,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating project" });
  }
};

// 🌍 PUBLIC: Get All Projects (No Auth Needed)
const getAllProjects = async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      include: {
        admin: {
          select: {
            id: true,
            email: true,
            role: true,
          },
        },
      },
      orderBy: {
        id: "desc",
      },
    });

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching projects" });
  }
};

export { addProject, getAllProjects };