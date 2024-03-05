import React from "react";

export const Expertise = () => {
  return (
    <>
      <div className=" py-14 bg-gradient-to-r from-indigo-500 to to-gray-400 to-90%">
        <h1 className="text-center text-3xl font-bold underline text-green-400">
          My Skills
        </h1>
        {/* box section */}

        <div className="flex justify-center space-x-2 mx-2 space-y-4 pt-16">
          {/* skills section */}
          <div className="flex space-x-2 my-5">
            <p className="bg-slate-300 w-fit px-3 py-2 rounded-full hover:bg-green-400">
              React
            </p>
            <p className="bg-slate-300 w-fit px-3 py-2 rounded-full  hover:bg-green-400">
              Javascript
            </p>
            <p className="bg-slate-300 w-fit px-3 py-2 rounded-full  hover:bg-green-400">
              Tailwind CSS
            </p>
            <p className="bg-slate-300 w-fit px-3 py-2 rounded-full  hover:bg-green-400">
              Figma
            </p>
            <p className="bg-slate-300 w-fit px-3 py-2 rounded-full  hover:bg-green-400">
              Webflow
            </p>
            <p className="bg-slate-300 w-fit px-3 py-2 rounded-full  hover:bg-green-400">
              Wireframing
            </p>
            <p className="bg-slate-300 w-fit px-3 py-2 rounded-full  hover:bg-green-400">
              Prototyping
            </p>
            <p className="bg-slate-300 w-fit px-3 py-2 rounded-full  hover:bg-green-400">
              Visual Design
            </p>
            <p className="bg-slate-300 w-fit px-3 py-2 rounded-full  hover:bg-green-400">
              Responsive Design
            </p>
            <p className="bg-slate-300 w-fit px-3 py-2 rounded-full  hover:bg-green-400">
              Prototyping Tools
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
