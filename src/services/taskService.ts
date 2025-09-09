import { mockTasks } from "../data/mockData";
import type { ApiResponse } from "../types/Index.types";
import type { TaskIn, TaskOut } from "../types/Task.types";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const TaskService = {
  async getTasks(): Promise<ApiResponse<TaskOut[]>> {
    await delay(800);
    return {
      data: mockTasks,
      message: "Successfully obtained tasks",
      success: true,
    };
  },
  async getTaskByID(taskId: string): Promise<ApiResponse<TaskOut | null>> {
    if (!taskId || taskId === "")
      return {
        data: null,
        message: "There are no tasks with that id",
        success: false,
      };
    await delay(800);
    const task = mockTasks.find((task: TaskOut) => task.id === taskId);
    return {
      data: task!,
      message: "Successfully obtained tasks",
      success: task ? true : false,
    };
  },
  async getTasksByProject(projectId: string): Promise<ApiResponse<TaskOut[]>> {
    await delay(500);

    const projectTasks = mockTasks.filter(
      (task: TaskOut) => task.projectId === projectId
    );

    return {
      data: projectTasks,
      message: `${projectTasks.length} tasks found for the project`,
      success: true,
    };
  },
  async addTask(task: TaskIn): Promise<ApiResponse<TaskIn>> {
    await delay(1000);
    const newTask: TaskOut = {
      ...task,
      createdAt: new Date().toISOString(),
      id: `task-${Date.now()}`,
    };
    mockTasks.push(newTask);
    return {
      data: task,
      message: "Task created successfully",
      success: true,
    };
  },
  async updateTaskStatus(
    taskId: string,
    status: TaskOut["status"]
  ): Promise<ApiResponse<TaskOut | null>> {
    await delay(800);
    const taskIndex = mockTasks.findIndex((task: TaskOut) => task.id == taskId);
    if (taskIndex === -1)
      return {
        data: null,
        message: "There are no tasks with that id",
        success: false,
      };
    mockTasks[taskIndex].status = status;
    return {
      data: mockTasks[taskIndex],
      message: "Task updated successfully",
      success: true,
    };
  },
  async searchTasks(
    query: string,
    status: TaskOut["status"] | "",
    priority: TaskOut["priority"] | ""
  ): Promise<ApiResponse<TaskOut[]>> {
    await delay(300);

    const filteredProjects = mockTasks.filter((task) => {
      const matchesQuery =
        task.title.toLowerCase().includes(query.toLowerCase()) ||
        task.description.toLowerCase().includes(query.toLowerCase());

      const matchesStatus =
        status === "" || task.status.toLowerCase() === status.toLowerCase();

      const matchesPriority =
        priority === "" ||
        task.priority.toLowerCase() === priority.toLowerCase();

      return matchesQuery && matchesStatus && matchesPriority;
    });

    return {
      data: filteredProjects,
      message: `${filteredProjects.length} projects found`,
      success: true,
    };
  },
};
