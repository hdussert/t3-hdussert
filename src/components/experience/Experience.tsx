import BadgeList from "~/components/BadgeList";
import ExternalLink from "~/components/ExternalLink";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import type { ExperienceData } from "./experience-type";

type ExperienceProps = ExperienceData;

const Experience = ({
  title,
  date,
  description,
  company,
  link,
  tags,
  location,
}: ExperienceProps) => {
  return (
    <Card className="mb-8 border-none sm:flex">
      <CardHeader className="z-20 flex p-4 sm:w-72 sm:flex-col sm:border-r sm:text-right">
        <div>
          <p className="font-display text-muted-foreground whitespace-nowrap uppercase">
            {date}
          </p>
          <p className="font-display text-xl">{title}</p>
        </div>
        <div>
          <ExternalLink label={company} link={link} />
          <p className="text-muted-foreground inline italic"> - {location}</p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col justify-center gap-4 rounded-lg p-4">
        <ul className="ml-4 list-disc">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <BadgeList tags={tags} />
      </CardContent>
    </Card>
  );
};

export default Experience;
