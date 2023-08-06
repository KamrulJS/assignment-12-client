import { useQuery } from "@tanstack/react-query";
import React from "react";
import ClassCard from "./ClassCard";

const PopularClasses = () => {
  const { data: popularData = [] } = useQuery(["popularClass"], async () => {
    const res = await fetch(
      "https://audiopair-server-main.vercel.app/popularClass"
    );
    return res.json();
  });
  const sliceData = popularData.slice(0, 6);

  
  return (
    <div className="text-center w-11/12 mx-auto mt-28">
      <h1 className="section-title">Popular Classes</h1>
      <p className="w-9/12 m-auto">
        Discover our popular classes at Musiquest. Choose from a curated
        selection of highly praised courses, spanning various genres and skill
        levels. Join now to learn from expert instructors and embark on an
        extraordinary musical adventure.
      </p>
      <div className="grid lg:grid-cols-3 gap-8 mt-10">
        {sliceData.map((cls) => (
          <ClassCard key={cls._id} data={cls}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
