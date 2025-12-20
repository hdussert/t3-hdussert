import { ProjectData } from "./project-types";

type ProjectProps = ProjectData & {
  onClick?: () => void;
};

const Project = ({ title, description, url, onClick }: ProjectProps) => {
  return (
    <div
      key={title}
      className="z-10 flex aspect-square max-w-56 cursor-pointer flex-col items-center justify-center rounded-lg border p-4 text-center transition-all hover:z-20 hover:scale-110 hover:bg-background"
      onClick={onClick}
    >
      <h3 className="font-display text-lg">{title}</h3>
      <p className="text-balance text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

export default Project;
