import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import Phone from "./_components/phone";

export default async function Home() {
  noStore();
  const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <div className="flex flex-col items-center justify-center sm:flex-row">
          <h1 className="group text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Hugo Dussert
          </h1>
          <Phone />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <CardLink 
            href="https://create.t3.gg/en/usage/first-steps"
            title="Mon blog"
            description="Just the basics - Everything you need to know to set up your database and authentication."
          />
          <CardLink 
            href="https://create.t3.gg/en/introduction"
            title="Me contacter"
            description="Learn more about Create T3 App, the libraries it uses, and how to deploy it."
          />
        </div>
        {/* <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-white">
            {hello ? hello.greeting : "Loading tRPC query..."}
          </p>
        </div> */}
        {/* <CrudShowcase /> */}
      </div>
    </main>
  );
}

type CardLinkProps = {
  href: string;
  title: string;
  description: string;  
}

const CardLink = ({ href, title, description }: CardLinkProps) => {
  return (
    <Link
      className="flex  max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 transition hover:bg-white/20"
      href={href}
      target="_blank"
    >
      <h3 className="text-2xl font-bold">{title} →</h3>
      <div className="text-lg">
        {description}
      </div>
    </Link>
  );
}

// async function CrudShowcase() {
//   const latestPost = await api.post.getLatest.query();

//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   );
// }
