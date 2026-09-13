import React, { use } from "react";
import type { TechType } from "../../type/TechType";
import TechnologyCard from "./TechnologyCard";

interface TechProps {
  techPromise: Promise<TechType[]>;
}
const Techdata = ({ techPromise }: TechProps) => {
  const TechData = use(techPromise);
  console.log(TechData);

  return (
    <div>
      <TechnologyCard TechData={TechData} />
    </div>
  );
};

export default Techdata;
