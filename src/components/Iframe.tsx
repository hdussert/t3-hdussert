import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "~/lib/utils";

type IframeProps = {
  url: string;
  className?: string;
  ref: React.Ref<HTMLIFrameElement>;
};

const Iframe = ({ url, className, ref }: IframeProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [url]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <Loader className="h-12 w-12 animate-spin text-white" />
        </div>
      )}
      <iframe
        ref={ref}
        className="h-full w-[calc(100%+16px)]"
        src={url}
        onLoad={() => setIsLoading(false)}
        sandbox="allow-same-origin allow-scripts"
      />
    </div>
  );
};

export default Iframe;
