import { mockProjects } from "../data/mockData";
import type { ApiResponse } from "../types/Index.types";
import type { ProjectIn, ProjectOut } from "../types/Project.types";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const ProjectService = {
  async getProjects(): Promise<ApiResponse<ProjectOut[]>> {
    await delay(800);
    return {
      data: mockProjects,
      message: "Successfully obtained projects",
      success: true,
    };
  },
  async getProjectByID(
    projectId: string
  ): Promise<ApiResponse<ProjectOut | null>> {
    if (!projectId || projectId === "")
      return {
        data: null,
        message: "There are no projects with that id",
        success: false,
      };
    await delay(800);
    const project = mockProjects.find((p: ProjectOut) => p.id === projectId);
    return {
      data: project!,
      message: project
        ? "Successfully obtained projects"
        : "There are no projects with that id",
      success: project ? true : false,
    };
  },
  async createProject(project: ProjectIn): Promise<ApiResponse<ProjectIn>> {
    await delay(1000);
    const newProject: ProjectOut = {
      ...project,
      id: `proj-${Date.now()}`,
      completedTasks: 0,
      inProgressTasks: 0,
      pendingTasks: 0,
      taskCount: 0,
      createdAt: new Date().toISOString(),
    };
    mockProjects.push(newProject);
    return {
      data: newProject,
      message: "Project created successfully",
      success: true,
    };
  },
  async searchProjects(
    query: string,
    status: ProjectOut["status"] | ""
  ): Promise<ApiResponse<ProjectOut[]>> {
    await delay(300);

    const filteredProjects = mockProjects.filter((project) => {
      const matchesQuery =
        project.name.toLowerCase().includes(query.toLowerCase()) ||
        project.description.toLowerCase().includes(query.toLowerCase());

      const matchesStatus =
        status === "" || project.status.toLowerCase() === status.toLowerCase();

      return matchesQuery && matchesStatus;
    });

    return {
      data: filteredProjects,
      message: `${filteredProjects.length} projects found`,
      success: true,
    };
  },
};
