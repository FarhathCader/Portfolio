import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import trainTransport from "../assets/portfolio/Train-transportation.png";
import studentRegistration from "../assets/portfolio/student-registration.png";
import coding from "../assets/portfolio/coding.jpg";
import food from "../assets/portfolio/food-ordering.jpeg";
import portfolio from "../assets/portfolio/portfolio.png";
import ml from "../assets/portfolio/ml.avif";
import hostel from "../assets/portfolio/hostel.jpg";




const Portfolio = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);

  const [of,setOf] = useState("hidden");

  const portfolios = [
    {
      id: 1,
      src: coding,
      topic: "Automated Grading System for Coding Assignments",
      description: "The system allows teachers to organize coding contests, where students can join and submit their solutions easily. It checks student codes using special tests to see if they work correctly. It's built with MongoDB for storing data, Express.js and Node.js for managing the server, and React.js for making the website interactive. HTML, CSS, and JavaScript make the website look and work nicely. Git helps developers work together, Figma helps design the system, and Monaco Code Editor improves the coding experience.",
      code: "https://github.com/FarhathCader/Automated-Grading-for-Programming-Assignments.git"
    },
    {
      id: 2,
      src: trainTransport,
      topic: "Live Train Tracking System",
      description: "The project integrates a Spring Boot backend to manage train schedule updates and user interactions efficiently. Users can add trains to the schedule and update the current railway station based on the timetable. Technologies like Spring Boot for backend development, React for the frontend, MySQL for database management, along with HTML, CSS, and JavaScript for the user interface, ensure a robust and interactive system. Bootstrap aids in designing a responsive layout, while Git facilitates collaborative development. Figma is utilized for design mockups, streamlining the development process. Overall, it's a comprehensive solution merging backend functionality with a user-friendly frontend to manage train schedules effectively.",
      code: "https://github.com/FarhathCader/Live-Train-Tracking-System.git"
    },
    {
      id: 3,
      src: food,
      topic: "Online Food Ordering Mobile App",
      description: "The mobile application for online food ordering is built with Flutter, offering a seamless and engaging user experience. Firebase serves as the backend, ensuring smooth data management and real-time updates. Users can browse menus, place orders, and make secure payments using the Stripe payment gateway. Dart, the programming language for Flutter, facilitates efficient development and performance optimization. Git enables collaborative development, ensuring version control and code management. Overall, it's a robust and user-friendly solution leveraging modern technologies to streamline the food ordering process.",
      code: "https://github.com/FarhathCader/Online-Food-Ordering-App.git"
    },
    {
      id: 4,
      src: portfolio,
      topic: "Portfolio Website",
      description: "The portfolio website is crafted using React and Tailwind CSS, combining powerful frontend tools for a sleek and responsive design. It showcases my projects, skills, and experiences in an intuitive and visually appealing manner. Tailwind CSS streamlines styling, ensuring consistent and elegant layouts across different devices. With React's dynamic components, users can seamlessly navigate through project details and explore my expertise. The website's simplicity and user-centric design are aimed at providing visitors with a delightful browsing experience. It's a testament to my skills and serves as a central hub to showcase my work and achievements.",
      code: "https://github.com/FarhathCader/Portfolio.git"
    },
    {
      id: 5,
      src: studentRegistration,
      topic: "Student Registration System",
      description: "I created a desktop application to simplify student registration and effectively manage student data. The application allows users to perform CRUD (Create, Read, Update, Delete) operations for managing users, students, courses, and modules through an easy-to-use interface. Additionally, I integrated a GPA (Grade Point Average) calculation feature to facilitate academic performance tracking. Technologies such as WPF (Windows Presentation Foundation), C#, and XAML were utilized for application development, while SQLite was used for data storage. Overall, the application enhances efficiency in handling student registration and data management tasks.",
      code: "https://github.com/FarhathCader/Desktop_App.git"
    },
    {
      id: 6,
      src: ml,
      topic: "Football Win Prediction Machine Learing Project",
      description: " In this machine learning project, I worked on predicting football match outcomes using supervised learning methods. I implemented and compared the effectiveness of two widely used algorithms: Random Forest and Decision Trees. To assess the models' performance, I evaluated various metrics including accuracy, precision, recall, and F1-score. This allowed me to analyze how well the models predicted the results of football matches and understand their strengths and weaknesses.",
      code: "https://github.com/FarhathCader/Football-Win-Prediction.git"
    },
    {
      id: 7,
      src: hostel,
      topic: "Hostel Allocation System Using DSA",
      description: "I designed and developed a hostel allocation system as a console application using linked list data structures. This system enables users to input student details such as distance from faculty to home, family income, etc. It then calculates a score based on these criteria to determine the suitability of each student for hostel allocation. Utilizing merge sort, the system efficiently sorts the students in descending order based on their scores, facilitating the identification of the most suitable candidates for hostel facilities.",
      code: "https://github.com/FarhathCader/Football-Win-Prediction.git"
    },
  ];

  const handleClick = (id) => {
    setSelectedPortfolio(selectedPortfolio === id ? null : id);
  };

  const handleClose = (id) => {
    setSelectedPortfolio(null);
  };

  const handleCodeClick = (code) => {
    if (code) {
      window.open(code, "_blank");
    }
  };

//   return (
//     <div
//       name="portfolio"
//       id="portfolio"
//       className="bg-gradient-to-b from-blue-900 via-blue-930 to-blue-950 w-full text-white md:h-screen"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-white-500">
//             Portfolio
//           </p>
//           <p className="py-6">Projects I have worked on</p>
//         </div>
//         <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 px-12 sm:px-0 ">
//         {portfolios.map((portfolio) => {
//   return (
//     <div
//       key={portfolio.id}
//       className={`relative shadow-lg rounded-md bg-blue-950 shadow-purple-500 ${selectedPortfolio === portfolio.id ? 'overflow-scroll' : 'overflow-hidden'} duration-200 hover:scale-105 p-2`}
//     >
//       <div
//         className="rounded-md duration-200  cursor-pointer"
//         onClick={() => handleClick(portfolio.id)}
//       >
//         {selectedPortfolio === portfolio.id ? (
//           <div className="absolute top-0 left-0 w-full h-full  text-white rounded-md p-4 ">
//             <button
//               className="absolute top-2 right-2 text-white"
//               onClick={handleClose}
//             >
//               <FaTimes />
//             </button>
//             <p className="text-white text-xs">{portfolio.description}</p>
//           </div>
//         ) : (
//           <div class="flex flex-col items-center">
//             <div class="flex flex-col items-center h-20">
//               <p class="text-white mb-4 text-center">{portfolio.topic}</p>
//             </div>
//             <div class="flex flex-col items-center">
//               <img src={portfolio.src} alt="" class="rounded-md" />
//             </div>
//           </div>
//         )}
//       </div>
//       {selectedPortfolio !== portfolio.id && (
//         <div className="flex items-center justify-center">
//           <button
//             className="w-full px-6 py-3 m-4 duration-200 hover:scale-105 bg-white text-blue-900 rounded-md"
//             onClick={() => handleCodeClick(portfolio.code)}
//           >
//             View Code
//           </button>
//         </div>
//       )}
//     </div>
//   );
// })}

//         </div>
//       </div>
//     </div>
//   );

return (
  <div
    name="portfolio"
    id = "portfolio"
    className="bg-gradient-to-b from-blue-900 via-blue-930 to-blue-950 w-full text-white md:h-full"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-white-500">
          Portfolio
        </p>
        <p className="py-6">Projects I have worked on</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolios.map((portfolio) => {
          return (
            <div
              key={portfolio.id}
              className="shadow-md shadow-blue-400  rounded-lg border-2 border-white-800 p-2 hover:scale-105" 
            >
              <div
                className="rounded-md duration-200 hover:scale-105 cursor-pointer"
                onClick={() => handleClick(portfolio.id)}
              >
                {selectedPortfolio === portfolio.id ? (
                  <div className="w-full h-full bg-gray-800 bg-opacity-90 p-4 flex flex-col items-center justify-center">
                    <button
                      className="absolute top-2 right-2 text-white"
                      onClick={handleClose}
                    >
                      <FaTimes />
                    </button>
                    <p className="text-white">{portfolio.description}</p>
                  </div>
                ) : (
                  <div class="flex flex-col items-center py-2 px-1">
                    <div className="h-20">
                    <p class="text-white mb-4 text-center font-bold">{portfolio.topic}</p>

                    </div>
                              
                  <img src={portfolio.src} alt="" className="rounded-md" />
                             </div>
            
                )}
              </div>
             <div className="flex items-center justify-center">
          <button
           className="w-full px-6 py-3 m-4 duration-200 hover:scale-105 bg-white text-blue-900 rounded-md"
            onClick={() => handleCodeClick(portfolio.code)}
           >
            View Code
           </button>
        </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);
};
export default Portfolio;