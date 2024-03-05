import React from "react";

const About = () => {
  return (
    <div className="bg-[#f8f0de] py-14">
      <div>
        <h1 className=" underline flex justify-center text-3xl font-bold py-5 text-green-400 ">
          About Me
        </h1>
      </div>
      <div className="flex">
        {/* image */}
        <div className="">
          <img
            className="min-w-[600px] px-2"
            src="https://cdn.dribbble.com/users/5247317/screenshots/15743374/media/9efab9b62bcd8db503ffd8e698707795.gif"
            alt=""
          />
        </div>
        {/* text */}
        <div>
          <h1 className="text-black  ">UI/UX & Frontend Developer</h1>
          <p className="text-l font-medium tracking-[.25em] italic">
            👋 Hey there! I'm Om Wankhede, a passionate UI/UX and front-end
            developer with a knack for turning ideas into digital masterpieces.
            🎨 With creativity as my compass and code as my canvas, I specialize
            in crafting captivating user experiences that leave a lasting
            impression. 💻 🚀 On my journey as a freelancer, I've had the
            privilege of collaborating with diverse clients on a wide array of
            projects. From dynamic websites to interactive applications, each
            project fuels my passion for innovation and excellence. 🌟 💼 What
            sets me apart? It's my commitment to excellence and my relentless
            pursuit of perfection. Whether it's refining user interfaces,
            optimizing user flows, or coding responsive layouts, I pour my heart
            and soul into every project. Together, let's create digital
            experiences that stand out in a crowded online world! 🌐✨ Ready to
            bring your ideas to life? Let's connect and make magic happen! 🔮✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
