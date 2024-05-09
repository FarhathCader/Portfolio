import React from "react";
import HeroImage from "../assets/farhath.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import ResumePDF from "../assets/CV_FARHAD.pdf";

const Home = () => {
  return (
    <div
      id="home"
      name="home"
      className="flex h-screen w-full bg-gradient-to-b from-blue-900 via-blue-930 to-blue-950"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Fullstack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-white">
            Hey there! 👋 I'm <b>Farhad Cader</b>, I'm a passionate full-stack developer dedicated to crafting elegant and intuitive user experiences. From frontend design to backend functionality, I thrive on creating seamless and engaging web applications from start to finish.
          </p>
          <div className="flex flex-row">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-blue-600 cursor-pointer hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 transition duration-300"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <a
              href={ResumePDF}
              download="Farhad_Cader_Resume.pdf"
              className="text-white ml-4 px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-blue-600 cursor-pointer hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
