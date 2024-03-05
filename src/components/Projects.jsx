import React from "react";
import p1 from "../assets/project1.jpg";

const Projects = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full h-full p-4 border bg-gradient-to-r from-indigo-500 to to-gray-400 to-90%">
      <div>
        <img src={p1} alt="" />
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Projects;
