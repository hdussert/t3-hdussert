import { Badge } from "~/components/ui/badge";

type BadgeListProps = {
  tags: string[] | readonly string[];
};

const BadgeList = ({ tags }: BadgeListProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge variant="outline" key={tag}>
          {tag}
        </Badge>
      ))}
    </div>
  );
};

export default BadgeList;
