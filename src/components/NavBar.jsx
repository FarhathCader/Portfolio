import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // Default active link

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "certificates",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  useEffect(() => {

    const scrollListener = () => {
      console.log("Scrolling...");
      const scrollPosition = window.scrollY + 200; // Adjust this value as needed
      const activeSection = links.find(({ link }) => {
        const element = document.getElementById(link);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          return scrollPosition >= offsetTop && scrollPosition <= offsetBottom;
        }
        return false;
      });
      if (activeSection) {
        console.log("Active section found:", activeSection.link);
        setActiveLink(activeSection.link);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      console.log("Removing scroll listener");
      window.removeEventListener("scroll", scrollListener);
    };
  }, [links]);

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
    setNav(false); // Close the mobile navigation when a link is clicked
  };

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 shadow-md text-white bg-blue-950 fixed fixed top-0 left-0 text-white z-50"
    >
      <div>
        {/* <Link to="home" className="cursor-pointer" onClick={() => handleSetActiveLink('home')}>
          <h1 className="text-5xl font-mono hover:font-serif ml-2">Farhad Cader</h1>
        </Link> */}
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className={`px-4 cursor-pointer capitalize font-medium hover:text-gray-200 ${activeLink === link ? "text-yellow-300 border-b border-yellow-500" : ""}`}
            >
              <Link
                to={link}
                smooth
                duration={500}
                className="transition-colors duration-300"
                onClick={() => handleSetActiveLink(link)}
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-700 to-indigo-900 text-white">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => handleSetActiveLink(link)}
                  to={link}
                  smooth
                  duration={500}
                  className="transition-colors duration-300"
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NavBar;
