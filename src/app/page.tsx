import Link from "next/link";

import { api, HydrateClient } from "~/trpc/server";
import NewRoomForm from "./_components/newroom-form";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <HydrateClient>
      <main className="container flex h-screen flex-col items-center justify-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Welcome to CopyCat
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-3">
          Enter room code or create a New Room
        </p>
        <NewRoomForm />
      </main>
    </HydrateClient>
  );
}
