import Link from "next/link";
import { cn } from "~/styles/helpers";

type CardLinkProps = {
  href: string;
  title: string;
  description: string;
};

export function CardLink({ href, title, description }: CardLinkProps) {
  return (
    <Link className={styles.card} href={href} target="_blank">
      <div className={styles.description}>{description}</div>
      <h3 className={styles.title}>{title} →</h3>
    </Link>
  );
}

const styles = {
  card: cn(
    "flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 transition hover:bg-white/20",
  ),
  title: cn("text-2xl font-bold"),
  description: cn("text-lg"),
};
