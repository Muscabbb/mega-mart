import { result } from "./pexelData";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home() {
  const data: any = await result;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      salamuli
    </main>
  );
}
