import { type ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";

type ExperienceProps = {
  titre: string;
  date: string;
  description: ReactNode;
  entreprise: string;
  entrepriseLogoRef: string;
  tags: string[];
};

export const Experience = ({
  titre,
  date,
  description,
  entreprise,
  entrepriseLogoRef,
  tags,
}: ExperienceProps) => {
  return (
    <Card className={cn("bg-primary-foreground")}>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center  sm:justify-between">
          <p className="font-display text-2xl">{titre}</p>
          <p className="font-body">{date}</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={entrepriseLogoRef} alt="Hugo Dussert" />
            <AvatarFallback>D</AvatarFallback>
          </Avatar>
          <h2 className="text-l font-display">{entreprise}</h2>
        </div>
      </CardHeader>
      <CardContent className="mx-6 rounded-lg">{description}</CardContent>
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
