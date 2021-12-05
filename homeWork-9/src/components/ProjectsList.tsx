import { IProject } from "../types";
import { ProjectCard } from "./ProjectCard";

interface IProjectsListProps {
  projects: IProject[];
  onClick: (id: number) => void;
}

//TODO: Добавить компонент ProjectsList
// важные подкрасить красным, неважные зелёным

export function ProjectsList({ projects, onClick }: IProjectsListProps) {
  return (
    <div>
      {projects.map((e) => {
        return (
          <ProjectCard key={e.id} project={e} onClick={onClick} id={e.id} />
        );
      })}
    </div>
  );
}
