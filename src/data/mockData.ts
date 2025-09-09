import type { ProjectOut } from "../types/Project.types";
import type { TaskOut } from "../types/Task.types";

// Datos de proyectos
export const mockProjects: ProjectOut[] = [
  {
    id: "compras",
    name: "Compras",
    description: "Gestión de compras y proveedores Q1 2024",
    color: "#3B82F6", // azul
    status: "active",
    createdAt: "2024-01-01",
    taskCount: 5,
    completedTasks: 2,
    pendingTasks: 2,
    inProgressTasks: 1,
  },
  {
    id: "marketing",
    name: "Marketing Digital",
    description: "Estrategia digital y campañas 2024",
    color: "#10B981", // verde
    status: "active",
    createdAt: "2024-01-05",
    taskCount: 3,
    completedTasks: 1,
    pendingTasks: 1,
    inProgressTasks: 1,
  },
  {
    id: "desarrollo",
    name: "Desarrollo Web",
    description: "Desarrollo de plataforma interna",
    color: "#8B5CF6", // morado
    status: "active",
    createdAt: "2024-01-08",
    taskCount: 4,
    completedTasks: 1,
    pendingTasks: 2,
    inProgressTasks: 1,
  },
];

// Tareas organizadas por proyecto
export const mockTasks: TaskOut[] = [
  // Proyecto Compras
  {
    id: "task-1",
    projectId: "compras",
    title: "Definir presupuesto Q1",
    description:
      "Establecer el presupuesto de compras para el primer trimestre",
    status: "completed",
    priority: "high",
    dueDate: "2024-01-15",
    createdAt: "2024-01-10T10:30:00",
    tags: ["presupuesto", "planificación"],
  },
  {
    id: "task-2",
    projectId: "compras",
    title: "Evaluar proveedores",
    description: "Análisis y evaluación de proveedores potenciales",
    status: "in-progress",
    priority: "high",
    dueDate: "2024-01-20",
    createdAt: "2024-01-12T14:20:00",
    tags: ["proveedores", "evaluación"],
  },
  {
    id: "task-3",
    projectId: "compras",
    title: "Negociar contratos",
    description:
      "Negociación de términos y condiciones con proveedores seleccionados",
    status: "pending",
    priority: "high",
    dueDate: "2024-01-25",
    createdAt: "2024-01-13T09:15:00",
    tags: ["contratos", "negociación"],
  },

  // Proyecto Marketing
  {
    id: "task-4",
    projectId: "marketing",
    title: "Campaña redes sociales",
    description: "Diseño e implementación de campaña para Q1",
    status: "in-progress",
    priority: "medium",
    dueDate: "2024-01-30",
    createdAt: "2024-01-05T16:00:00",
    tags: ["social-media", "campaña"],
  },
  {
    id: "task-5",
    projectId: "marketing",
    title: "Diseño de landing page",
    description: "Crear landing page para nueva campaña",
    status: "pending",
    priority: "medium",
    dueDate: "2024-02-05",
    createdAt: "2024-01-06T11:30:00",
    tags: ["diseño", "web"],
  },

  // Proyecto Desarrollo
  {
    id: "task-6",
    projectId: "desarrollo",
    title: "Setup del proyecto",
    description: "Configuración inicial del entorno de desarrollo",
    status: "completed",
    priority: "high",
    dueDate: "2024-01-12",
    createdAt: "2024-01-08T08:00:00",
    tags: ["setup", "desarrollo"],
  },
];
