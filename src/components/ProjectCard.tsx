import { CalendarDays, FileChartColumn, Folder } from "lucide-react";
import type { ProjectOut } from "../types/Project.types";

interface CardProps {
  project: ProjectOut;
  className?: string;
  onCardClick?: () => void;
}

function ProjectCard({
  project: { name, description, createdAt, taskCount, completedTasks },
  className,
  onCardClick,
}: CardProps) {
  return (
    <div
      className={
        "flex flex-col gap-2 bg-white border border-[var(--sidebar-border)] rounded-lg p-4 w-fit " +
        className
      }
      onClick={onCardClick}
    >
      <div className="flex gap-2 items-center ">
        <Folder color="orange" />
        <h1 className="font-semibold text-pretty">{name}</h1>
      </div>
      <p>{description}</p>
      <br />
      <div className="flex items-center gap-2">
        <FileChartColumn color="darkgreen" />
        <div className="flex gap-2 items-center">
          <p className="text-gray-600 text-sm font-semibold">
            {taskCount} tasks
          </p>
          <span className="text-gray-600 text-sm font-semibold">-</span>
          <p className="text-gray-600 text-sm font-semibold">
            {completedTasks} completed
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <CalendarDays color="gray" />
        <p className="flex items-center gap-1 text-gray-600 text-sm">
          <span className="font-semibold"> Created: </span>
          {createdAt ? new Date(createdAt as string).toLocaleDateString() : ""}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
