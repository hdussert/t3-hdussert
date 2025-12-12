import { type ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";

type ExperienceProps = {
  titre: string;
  date: string;
  description: ReactNode;
  entreprise: string;
  entrepriseLogoRef: string;
  tags: string[];
  location: string;
};

export const Experience = ({
  titre,
  date,
  description,
  entreprise,
  entrepriseLogoRef,
  tags,
  location,
}: ExperienceProps) => {
  return (
    <Card className="bg-primary-foreground">
      <CardHeader className="flex-row items-start justify-between">
        <div className="flex flex-col">
          <p className="font-display text-xl">{titre}</p>
          <p className="font-display uppercase text-muted-foreground">{date}</p>
          <p className="italic text-muted-foreground">{location}</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={entrepriseLogoRef} alt="Hugo Dussert" />
            <AvatarFallback>D</AvatarFallback>
          </Avatar>
          <h2 className="text-l font-display">{entreprise}</h2>
        </div>
      </CardHeader>
      <CardContent className="rounded-lg">{description}</CardContent>
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
