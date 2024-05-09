import React, { useState } from "react";

const Contact = () => {

    const [emailBody,setEmailBody] = useState('Hello Farhad, I came across your portfolio and I would like to discuss a project with you.')
    const [name,setname] = useState('')
    

    const handleEmail = (e) => {
    e.preventDefault();
    const subject = 'Contact Throguh Portfolio!';
    const mailtoLink = `mailto:farhathcader@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody+'\n\n' +name)}`;
    window.location.href = mailtoLink;
    }

  return (
   
    <div
        id="contact"
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-blue-900 via-blue-930 to-blue-950 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-white-500">
            Contact
          </p>
          <p className="py-6">
            I'm currently seeking new opportunities to collaborate on exciting
            projects. Whether you have a project idea in mind or just want to
            say hi, feel free to <b>contact me!</b>
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            // action="https://getform.io/f/Xe01qVax"
            // method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={(e) => setname(e.target.value)}
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message here..."
              onChange={(e) => setEmailBody(e.target.value)}
              id=""
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-blue-500 to-blue-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            onClick={handleEmail}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
