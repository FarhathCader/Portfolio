import React from "react";

const About = () => {
  return (
    <div
      id="about"
      name="about"
      className="bg-gradient-to-b from-blue-900 via-blue-930 to-blue-950 w-full text-white  min-h-screen py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-white-500">
            About
          </p>
        </div>
        <div className="text-xl mt-10 md:mt-20">
          <p className="mb-6">
            As a third-year Computer Engineering student, I've delved into
            fundamental topics such as data structures, algorithms, and
            programming languages, including JavaScript, Python, Java, C++, C#,
            and C. I've honed my skills through hands-on experience with
            frameworks like MERN stack and Spring Boot, applying them to
            diverse projects.
          </p>
          <p className="mb-6">
            Beyond the basics, I've explored the realms of machine learning and
            deep learning, broadening my understanding of cutting-edge
            technologies. Proficient in database management and familiar with
            tools like Git and Jira, I bring a comprehensive skill set to the
            table.
          </p>
          <p>
            Now, I'm eager to embark on a six-month internship where I can
            leverage my knowledge, tackle intriguing projects, and continue my
            growth as a software engineer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
