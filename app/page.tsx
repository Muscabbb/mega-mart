import BestDeals from "./Components/bestDeals";
import Dropdown from "./Components/dropdown";
import Header from "./Components/header";
import Hero from "./Components/hero";
import { result } from "./pexelData";
import { Suspense } from "react";

export default async function Home() {
  const data: any = await result;

  const heroImages = data.photos.map((image: any) => image.src.original);

  return (
    <>
      <header className=" fixed top-0 left-0 z-40 w-full shadow bg-white">
        <Header />
        <Dropdown />
      </header>

      <main className="container mx-auto">
        <Hero images={heroImages} />
        <BestDeals images={heroImages} />
      </main>
    </>
  );
}
