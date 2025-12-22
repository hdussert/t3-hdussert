import type { ProjectData } from "./project-types";

type ProjectProps = ProjectData & {
  onClick?: () => void;
};

const Project = ({ title, description, url, onClick }: ProjectProps) => {
  return (
    <>
      {/* Mobile: Render <a> */}
      {/* TODO : Change design */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:bg-background z-10 flex aspect-square max-w-56 cursor-pointer flex-col items-center justify-center rounded-lg border p-4 text-center transition-all hover:z-20 hover:scale-110 sm:hidden"
      >
        <h3 className="font-display text-lg">{title}</h3>
        <p className="text-muted-foreground text-sm text-balance">
          {description}
        </p>
      </a>

      {/* Desktop: Render <div> */}
      <div
        className="hover:bg-background z-10 hidden aspect-square max-w-56 cursor-pointer flex-col items-center justify-center rounded-lg border p-4 text-center transition-all hover:z-20 hover:scale-110 sm:flex"
        onClick={onClick}
      >
        <h3 className="font-display text-lg">{title}</h3>
        <p className="text-muted-foreground text-sm text-balance">
          {description}
        </p>
      </div>
    </>
  );
};

export default Project;
