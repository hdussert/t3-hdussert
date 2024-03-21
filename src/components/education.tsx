import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Card, CardFooter, CardHeader } from "~/components/ui/card";

type EducationProps = {
  title: string;
  date: string;
  school: string;
  schoolLogoRef: string;
  tags: string[];
};

export const Education = ({
  title,
  date,
  school,
  schoolLogoRef,
  tags,
}: EducationProps) => {
  return (
    <Card className="bg-primary-foreground">
      <CardHeader>
        <div className="flex flex-row items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={schoolLogoRef} alt="Hugo Dussert" />
            <AvatarFallback>D</AvatarFallback>
          </Avatar>
          <h2 className="text-l font-display">{school}</h2>
          <p className="font-body">{date}</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center  sm:justify-between">
          <p className="font-display text-2xl">{title}</p>
        </div>
      </CardHeader>
      <CardFooter>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};
