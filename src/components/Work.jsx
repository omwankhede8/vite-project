import React from "react";

const Work = () => {
  return (
    <>
      <div>
        <div className="bg-gradient-to-r from-indigo-500 to to-gray-400 to-90% ">
          <h1 className="text-3xl text-center text-green-400 font-bold underline">
            HOW DO I WORK ?
          </h1>
          <div className="flex justify-center items-center py-10 mx-20 ">
            <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full h-full p-4 border ">
              {/* boxes */}
              <div className="border-2 border-gray-500 rounded-md text-xl font-semibold bg-gray-100  ">
                Dicussion
                <i class="fa-solid fa-people-arrows mx-2"></i>
                <p className="font-light">
                  This phase marks the beginning of our collaboration journey.
                  We engage in thorough discussions to understand your goals,
                  vision, and requirements for the project. By actively
                  listening and exchanging ideas, we ensure alignment and
                  clarity, laying a strong foundation for the journey ahead.
                </p>
              </div>
              <div className="border-2 border-gray-500 rounded-md text-xl font-semibold bg-gray-100">
                Planning
                <i class="fa-solid fa-clipboard mx-2"></i>
                <p className="font-light">
                  With insights gathered from our discussions, we transition
                  into the planning phase. Here, we meticulously outline project
                  milestones, timelines, and resources required to achieve
                  success. By strategizing every aspect of the project, we aim
                  to maximize efficiency, minimize risks, and deliver
                  exceptional results within the agreed-upon parameters.
                </p>
              </div>
              <div className="border-2 border-gray-500 rounded-md text-xl font-semibold bg-gray-100">
                Design
                <i class="fa-solid fa-wand-magic-sparkles mx-2"></i>
                <p className="font-light">
                  Creativity takes center stage in the design phase. Drawing
                  upon the insights gathered, our team of designers unleash
                  their creativity to craft visually stunning and user-centric
                  designs. From wireframes to prototypes, every element is
                  carefully crafted to captivate your audience, enhance user
                  experience, and bring your vision to life.
                </p>
              </div>
              <div className="border-2 border-gray-500 rounded-md text-xl font-semibold bg-gray-100">
                Coding
                <i class="fa-solid fa-code mx-2"></i>
                <p className="font-light">
                  With designs approved, our development team springs into
                  action, translating concepts into code. Leveraging the latest
                  technologies and best practices, we meticulously build and
                  integrate functionalities, ensuring seamless performance
                  across all devices and platforms. Through rigorous testing and
                  iteration, we strive for perfection, delivering a robust and
                  scalable solution tailored to your needs.
                </p>
              </div>
              <div className="border-2 border-gray-500 rounded-md text-xl font-semibold bg-gray-100">
                Submit for Review
                <i class="fa-solid fa-magnifying-glass mx-2"></i>
                <p className="font-light">
                  As the project nears completion, we undergo a comprehensive
                  review process to ensure all requirements are met and
                  expectations exceeded.
                </p>
              </div>
              <div className="border-2 border-gray-500 rounded-md text-xl font-semibold bg-gray-100">
                Project is ready
                <i class="fa-solid fa-check-to-slot mx-2"></i>
                <p className="font-light">
                  Upon your approval, the project is deemed ready for
                  deployment. Whether it's launching a website, deploying an
                  application, or delivering a final product, we stand by your
                  side, ready to celebrate the culmination of our collaborative
                  efforts and the beginning of your success story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
