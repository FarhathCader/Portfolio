import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import cv  from '../assets/CV_FARHAD.pdf'

const SocialLink = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/mmusharraf",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/mhdmusharraf",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:mhdmusharraf.edu@gmail.com",
    },
   
  ];

  return (
    <div className="lg:flex lg:flex-col lg:top-[35%] lg:left-0 lg:fixed">
      <ul className="lg:hidden bg-gradient-to-b from-blue-950 via-blue-930 to-blue-950 p-4 overflow-y-auto">
      <li
        className={`flex justify-between items-center w-full h-14 px-4 mb-2 bg-blue-500 hover:bg-blue-600 rounded-md duration-300 rounded-br-md`}>
          <a
              href={cv}
              className="flex justify-between items-center w-full text-white"
              // download='CV_FARHAD'
              target="_blank"
              rel="noreferrer"
            >
                <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
            </a>
      
        </li>
        {links.map((link) => (
          <li
            key={link.id}
            className={`flex justify-between items-center w-full h-14 px-4 mb-2 bg-blue-500 hover:bg-blue-600 rounded-md duration-300 ${link.style}`}
          >
            <a
              href={link.href}
              className="flex justify-between items-center w-full text-white"
              download={link.download}
              target="_blank"
              rel="noreferrer"
            >
              {link.child}
            </a>
          </li>
        ))}
       
      </ul>
      <ul className="hidden lg:flex lg:flex-col">
      <li
        className= 'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-blue-500 hover:ml-[-10px] hover:rounded-md duration-300 rounded-br-md'>
          <a
              href={cv}
              className="flex justify-between items-center w-full text-white"
              // download='CV_FARHAD'
              target="_blank"
              rel="noreferrer"
            >
                <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
            </a>
      
        </li>
        {links.map((link) => (
          <li
            key={link.id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-blue-500 hover:ml-[-10px] hover:rounded-md duration-300 ${link.style}`}
          >
            <a
              href={link.href}
              className="flex justify-between items-center w-full text-white"
              download={link.download}
              target="_blank"
              rel="noreferrer"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLink;
