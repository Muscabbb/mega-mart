import BestDeals from "./Components/bestDeals";
import Dropdown from "./Components/dropdown";
import Header from "./Components/header";
import Hero from "./Components/hero";
import { result } from "./pexelData";
import { Suspense } from "react";

export default async function Home() {
  const data: any = await result;

  const heroImages = [
    data.photos[0].src.original,
    data.photos[1].src.original,
    data.photos[2].src.original,
    data.photos[3].src.original,
    data.photos[4].src.original,
    data.photos[5].src.original,
    data.photos[6].src.original,
    data.photos[7].src.original,
    data.photos[8].src.original,
    data.photos[9].src.original,
  ];

  return (
    <>
      <header>
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
