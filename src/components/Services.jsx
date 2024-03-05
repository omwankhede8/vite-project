import React from "react";

const Services = () => {
  return (
    <>
      <div className="main py-14 bg-gradient-to-r from-indigo-500 to to-black to-90%">
        <h1 className="text-center text-3xl font-bold underline text-green-400">
          WHAT CAN I DO
        </h1>

        {/* services */}
        {/* UI Ux */}
        <div className="space-y-4 py-10 px-10">
          <i className="fa-brands text-3xl fa-figma text-white"></i>
          <h1 className="font-semibold inline-block px-2 text-2xl text-white">
            UI/UX Design
          </h1>

          <p className="text-white">
            🎨 Elevate your design process with my Figma services! As a frontend
            development expert, I seamlessly integrate Figma's powerful design
            tools into my workflow to bring your visions to life. 💡 Whether
            it's crafting stunning UI/UX mockups or collaborating on interactive
            prototypes, I leverage Figma's collaborative features to ensure
            every detail is perfected. 🚀 From wireframes to high-fidelity
            designs, I work closely with you to create visually captivating and
            user-friendly interfaces that exceed expectations. Let's turn your
            ideas into reality with Figma's precision and my expertise!
          </p>
          <button className="bg-green-400 rounded-full px-2 py-1 text-white font-bold">
            check
          </button>
        </div>

        <div className="flex justify-around">
          {/* Web  */}
          <div className=" space-y-4 py-10 px-10">
            <i className="fa-brands text-3xl fa-react text-white"></i>
            <h1 className="font-semibold text-2xl inline-block px-2 text-white ">
              Frontend development
            </h1>
            <p className="text-white">
              I specialize in providing top-tier frontend development services
              tailored to elevate your digital presence. 🌟 With meticulous
              attention to detail and a focus on user-centric design, I create
              sophisticated interfaces that seamlessly blend aesthetics with
              functionality. 💻 Leveraging the latest technologies and industry
              best practices, I ensure your website or application sets a new
              standard for excellence. Let's collaborate to bring your vision to
              life with precision and professionalism. 🚀
            </p>
            <button className="bg-green-400 rounded-full px-2 py-1 text-white font-bold">
              check
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
