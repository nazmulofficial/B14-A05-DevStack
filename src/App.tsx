import { Suspense } from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tech from "./components/Tech";
import Techdata from "./components/technogly/Techdata";
import type { TechType } from "./type/TechType";
import Footer from "./footer";

const techdata = async (): Promise<TechType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const techPromise = techdata();

  return (
    <>
      <div className="mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <Tech />

        <Suspense fallback={<div>Loading...</div>}>
          <Techdata techPromise={techPromise} />
        </Suspense>

        <Footer />
      </div>
    </>
  );
}

export default App;