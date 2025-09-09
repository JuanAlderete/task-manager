export interface ProjectOut {
  id: string;
  name: string;
  description: string;
  color: string;
  status: "active" | "completed" | "paused";
  createdAt: string;
  taskCount: number;
  completedTasks: number;
  pendingTasks: number;
  inProgressTasks: number;
}

// Para no hacer uso de Typescript, puedo crear otra interface
// Omit<ProjectOut, 'id' | 'createdAt' | 'taskCount' | 'completedTasks' | 'pendingTasks' | 'inProgressTasks'>
export interface ProjectIn {
  name: string;
  description: string;
  color: string;
  status: "active" | "completed" | "paused";
}
