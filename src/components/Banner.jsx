import React, { useEffect, useRef } from "react";
import bannerImage from "../assets/dp.jpg";
import Typed from "typed.js";

const Banner = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["UI/UX Designer", "Frontend Developer", "Freelancer"],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 300,
      loop: true,
    });

    //destroying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="main flex min-h-48 bg-gradient-to-r from-indigo-500 to to-gray-400 to-90%">
      <div className="bg-gradient-to-r from-indigo-500 to to-black to-90% text-white w-full md:w-auto flex ps-12">
        {/* text */}
        <div>
          <h4 className="text-xl mx-3 mt-20">Hi , I am</h4>
          <h2 className="text-xl mx-2 bg-green-500 inline-block rounded-lg my-2 mt-5">
            {" "}
            Om wankhede{" "}
          </h2>
          <h3 className="text-xl font-bold py-2 mx-2">
            I am a{" "}
            <span className="font-bold underline bg-green-400" ref={el}>
              {" "}
            </span>
          </h3>
          <p className=" mx-2">
            Are you in search of a dedicated UI/UX designer who can bring your
            digital projects to life with creativity, precision, and
            user-centric design principles? Look no further! 🎨 With expertise
            in Webflow, Figma, I specialize in crafting intuitive and visually
            stunning user interfaces that enhance user experience and drive
            engagement. Whether you need a sleek website design, a user-friendly
            app interface, or captivating graphics, I've got you covered.
          </p>
          <div className="space-x-16 space-y-5">
            {/* icons */}

            <a
              className="fa-brands text-3xl fa-github"
              href="https://github.com/omwankhede8"
            ></a>
            <a
              className="fa-brands text-3xl fa-linkedin"
              href="https://www.linkedin.com/in/om-wankhede-702257217/"
            ></a>
            <a
              className="fa-brands text-3xl fa-twitter"
              href="https://twitter.com/Omwankh99942718"
            ></a>
            <a
              class="fa-brands text-3xl fa-upwork"
              href="https://www.upwork.com/freelancers/~014b083b560872e03d"
            ></a>
          </div>
          <button className="font-bold bg-gray-500 hover:bg-green-400 rounded-full my-2 mx-2 py-2 px-2 mt-5">
            Conatact Me
          </button>
        </div>
        <div>
          {/* image */}
          <img className="min-w-[300px] px-8 py-2 mt-20" src={bannerImage} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
