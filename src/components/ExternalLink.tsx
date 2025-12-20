import { ExternalLink as ExternalLinkSVG } from "lucide-react";
import { Button } from "~/components/ui/button";

type ExternalLinkProps = {
  link: string;
  label: string;
};

const ExternalLink = ({ label, link }: ExternalLinkProps) => {
  return (
    <Button asChild variant="link" size="lg" className="text-md inline p-0">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <ExternalLinkSVG className="mr-2 inline size-4" />
        {label}
      </a>
    </Button>
  );
};

export default ExternalLink;
