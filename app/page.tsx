import Dropdown from "./Components/dropdown";
import Header from "./Components/header";
import { result } from "./pexelData";
import { Suspense } from "react";

export default async function Home() {
  const data: any = await result;

  return (
    <>
      <header className="">
        <Header />
      </header>
      <Dropdown />
      <main className="container mx-auto"></main>
    </>
  );
}
