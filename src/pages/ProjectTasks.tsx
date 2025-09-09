import { useNavigate } from "react-router";
import TaskCard from "../components/TaskCard";

function ProjectTasks() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/tasks", {
      state: {
        filter: "pending",
        fromDashboard: true,
      },
    });
  };
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Tasks</h1>
      <TaskCard
        className="cursor-pointer hover:shadow-sm hover:bg-gray-50"
        title="Your tasks"
        priority="High"
        date={new Date()}
        onCardClick={handleClick}
      />
    </div>
  );
}

export default ProjectTasks;
