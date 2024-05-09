import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
//import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png";
import javaImage from "../assets/Java.png";
import pythonImage from "../assets/python.jpeg";
import cplusplusImage from "../assets/C++.jpeg";
import cImage from "../assets/c.jpeg";
import mysqlImage from "../assets/MYSQL.jpeg";
import firebaseImage from "../assets/FIREBASE.jpeg";
import nodeImage from "../assets/NODE.jpeg";
import springbootImage from "../assets/SB.png";
import bootstrapImage from "../assets/BOOTSTRAP.png";
import jiraImage from "../assets/JIRA.png";
import awsImage from "../assets/AWS.jpeg";
import csharpImage from "../assets/csharp.jpeg";
import dockerImage from "../assets/docker.jpeg";
import jenkinImage from "../assets/jenkins.jpeg";
import flutterImage from "../assets/flutter.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-400",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-400",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-400",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-400",
    },
    {
      id: 10,
      src: pythonImage,
      title: "Python",
      style: "shadow-blue-300"
    },
    {
      id: 9,
      src: javaImage,
      title: "Java",
      style: "shadow-red-400"
    },
    {
      id: 17,
      src: springbootImage,
      title: "Spring Boot",
      style: "shadow-blue-400"
    },
    {
      id: 16,
      src: nodeImage,
      title: "Node.js",
      style: "shadow-green-600"
    },
   
    {
      id: 23,
      src: flutterImage,
      title: "Flutter",
      style: "shadow-blue-300"
    },
    {
      id: 15,
      src: firebaseImage,
      title: "Firebase",
      style: "shadow-yellow-300"
    },
    {
      id: 14,
      src: mysqlImage,
      title: "MySQL",
      style: "shadow-indigo-400"
    },
    {
      id: 8,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-400"
    },

  
   
    // Additional technologies
 
    {
      id: 11,
      src: cplusplusImage,
      title: "C++",
      style: "shadow-yellow-400"
    },
    {
      id: 12,
      src: cImage,
      title: "C",
      style: "shadow-gray-400"
    },
    {
      id: 13,
      src: csharpImage,
      title: "C#",
      style: "shadow-purple-400"
    },
 
   

    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  

    {
      id: 19,
      src: jiraImage,
      title: "Jira",
      style: "shadow-blue-400"
    },
    {
      id: 20,
      src: awsImage,
      title: "AWS",
      style: "shadow-yellow-500"
    },
    {
      id: 21,
      src: dockerImage,
      title: "Docker",
      style: "shadow-blue-400"
    },
    {
      id: 22,
      src: jenkinImage,
      title: "Jenkins",
      style: "shadow-red-400"
    },

    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-cyan-400",
    },
    {
      id: 18,
      src: bootstrapImage,
      title: "Bootstrap",
      style: "shadow-purple-300"
    },
   
  ];
  
  return (
    <div
      name="experience"
      id="experience"
      className="bg-gradient-to-b from-blue-950 via-blue-930 to-blue-950 w-full min-h-screen py-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold p-2 border-b-4 border-white-500 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 px-4 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 bg-transparent duration-500 py-2 rounded-lg ${style} sm:mt-0`}
            >
              <img src={src} alt="" className="w-16 h-16 mx-auto" />
              <p className="mt-2 text-sm">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
