import type { ProjectData } from "./project-types";

type ProjectProps = ProjectData & {
  onClick?: () => void;
};

const Project = ({ title, description, onClick }: ProjectProps) => {
  return (
    <div
      key={title}
      className="hover:bg-background z-10 flex aspect-square max-w-56 cursor-pointer flex-col items-center justify-center rounded-lg border p-4 text-center transition-all hover:z-20 hover:scale-110"
      onClick={onClick}
    >
      <h3 className="font-display text-lg">{title}</h3>
      <p className="text-muted-foreground text-sm text-balance">
        {description}
      </p>
    </div>
  );
};

export default Project;
