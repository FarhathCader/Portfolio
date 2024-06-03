import React, { useEffect, useState, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import debounce from "lodash.debounce";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "certificates" },
    { id: 6, link: "contact" },
  ];

  const handleScroll = useCallback(() => {
    console.log("Scrolling...");
    const scrollPosition = window.scrollY + 300;
    const activeSection = links.find(({ link }) => {
      const element = document.getElementById(link);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;
        return scrollPosition >= offsetTop && scrollPosition <= offsetBottom;
      }
      return false;
    });
    console.log("Active Section:", activeSection);
    if (activeSection) {
      setActiveLink(activeSection.link);
      console.log("Active Link:", activeSection.link);
    }
  }, [links]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check the active section on component mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, links]);

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
    setNav(false); // Close the mobile navigation when a link is clicked
  };

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 shadow-md text-white bg-blue-950 fixed top-0 left-0 text-white z-50">
      <div>
        {/* Logo or brand name can be placed here */}
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className={`px-4 cursor-pointer capitalize font-medium hover:text-gray-200 ${activeLink === link ? "text-yellow-300 border-b-2 border-yellow-500" : ""}`}
          >
            <Link
              to={link}
              smooth
              duration={800}
              className="transition-colors duration-800 transition-smooth"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-700 to-indigo-900 text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => handleSetActiveLink(link)}
                to={link}
                smooth
                duration={300}
                className="transition-colors duration-300"
              >
                {link}
              </Link>
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
