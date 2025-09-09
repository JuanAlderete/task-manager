import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import type { ProjectOut } from "../types/Project.types";
import { ProjectService } from "../services/projectService";
import LoadingSpinner from "../components/LoadingSpinner";

function Projects() {
  const [projects, setProjects] = useState<ProjectOut[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await ProjectService.getProjects();

        if (response.success) {
          setProjects(response.data);
        } else {
          setError(response.message);
        }
      } catch (err) {
        setError("Error al cargar proyectos");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <div className="flex flex-wrap gap-4">
        {projects.map((project: ProjectOut) => (
          <ProjectCard
            key={project.id}
            className="cursor-pointer hover:shadow-sm hover:bg-gray-50"
            project={project}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
