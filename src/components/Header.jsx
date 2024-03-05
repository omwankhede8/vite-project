import React, { useCallback, useEffect, useState } from "react";
import dp from "../assets/om.png";

const Header = () => {
  const [brandName, setBrandName] = useState("om wankhede");
  const [menuLinks, setMenuLinks] = useState([
    {
      titile: "Home",
      link: "/home",
      id: 1,
    },
    {
      titile: "About",
      link: "/about",
      id: 2,
    },
    {
      titile: "Skills",
      link: "/skills",
      id: 3,
    },
    {
      titile: "Portfolio",
      link: "/portfolio",
      id: 4,
    },
  ]);

  // scroll down navbar

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="fixed w-full">
        <div
          className={` ${
            scrolling
              ? "bg-orange-50"
              : "bg-gradient-to-r from-indigo-500 to to-black to-90%"
          } main flex justify-between  items-center h-20 px-16 min-w-full  
      `}
        >
          <div>
            {/* logo */}
            <img src={dp} alt="" className="w-[100px]" />
          </div>
          <div className="space-x-6">
            {/* menu links */}
            {menuLinks.map((links) => (
              <a
                key={links.id}
                href={links.link}
                className="hover:text-green-400 text-gray-400 font-semibold px-10"
              >
                {links.titile}
              </a>
            ))}
          </div>
          <button className="bg-green-500 rounded-full  py-2 px-2 text-white text-bold">
            {" "}
            Contact
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
