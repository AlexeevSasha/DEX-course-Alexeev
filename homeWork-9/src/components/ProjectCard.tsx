import { IProject } from "../types";

interface IProjectCardProps {
  project: IProject;
  onClick: (id: number) => void;
  id: number;
}

export function ProjectCard({ project, onClick, id }: IProjectCardProps) {
  let importantProject = "status-project ";
  importantProject += project.important ? "important" : "noImportant";

  return (
    <div className={importantProject} onClick={() => onClick(id)}>
      {project.text}
    </div>
  );
}
