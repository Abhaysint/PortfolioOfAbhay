import React from "react";
import { workExperience } from "@/data";
// Remove the import of Button since we're not using it
// import { Button } from "./ui/moving-border";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <div
            key={card.id}
            className={`flex-1 text-black dark:text-white border border-neutral-200 dark:border-slate-800 rounded-2xl overflow-hidden ${card.className}`}
            // Apply the styles that were previously on the Button component
            style={{
              background:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center p-6 md:p-8 lg:p-10 gap-4">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="w-16 md:w-20 lg:w-32 flex-shrink-0"
              />
              <div className="lg:ml-5 flex-grow">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
