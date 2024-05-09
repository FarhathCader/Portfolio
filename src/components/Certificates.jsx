import React, { useState } from 'react';
import { motion } from 'framer-motion';

import cer1 from '../assets/certificates/advanced_react.jpeg';
import cer2 from '../assets/certificates/BE-META.jpeg';
import cer3 from '../assets/certificates/se.png';
import cer4 from '../assets/certificates/py-hr.png';
import cer5 from '../assets/certificates/cloud.png';
import cer6 from '../assets/certificates/FE-META.jpeg';
import cer7 from '../assets/certificates/JAVA.png';
import cer8 from '../assets/certificates/devops.jpeg';
import cer9 from '../assets/certificates/py-hr.png';
import cer10 from '../assets/certificates/py-ibm.jpeg';
import cer11 from '../assets/certificates/py-moratuwa.png';
import cer12 from '../assets/certificates/SQL.png';
import cer13 from '../assets/certificates/SQL ii.png';
import cer14 from '../assets/certificates/version.jpeg';
import cer15 from '../assets/certificates/problem.png';
import cer16 from '../assets/certificates/FRONT.png';
import cer17 from '../assets/certificates/C.jpg';
import cer18 from '../assets/certificates/csharp ii.jpg';
import cer19 from '../assets/certificates/csharp iii.jpg';
import cer20 from '../assets/certificates/csharp.png';
import cer21 from '../assets/certificates/oop.jpeg';

const images = [cer1, cer2, cer3, cer4, cer5, cer6, cer7, cer8, cer9, cer10, cer11, cer12, cer13, cer14, cer15, cer16, cer17, cer18, cer19, cer20, cer21];

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

   return (
    <div 
      name='certificates'
      id='certificates'
      className="w-full h-screen bg-gradient-to-b from-blue-950 via-blue-930 to-blue-900 p-4 text-white"
    >
      <div className="flex flex-col justify-center items-center h-full">
        <div className='pb-8'>
          <h1 className="text-4xl font-bold inline p-1 border-b-4 border-white-500">
            Certificates
          </h1>
        </div>
     
        <div className="relative  w-full h-2/5 sm:w-3/5 sm:h-3/5 md:w-full md:h-3/5">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 overflow-hidden"
          >
            <img
              src={images[currentIndex]}
              alt={`Certificate ${currentIndex + 1}`}
              className="w-full h-full rounded-lg shadow-lg object-cover sm:object-contain md:object-scale-down"
            />
          </motion.div>
        </div>
        <div className="flex justify-between w-full max-w-xs sm:max-w-sm mt-4">
          <div
            className="cursor-pointer text-3xl rounded-full bg-white p-2 shadow-md hover:shadow-lg text-blue-900"
            onClick={handlePrevious}
          >
            {'<'}
          </div>
          <div
            className="cursor-pointer text-3xl rounded-full bg-white p-2 shadow-md hover:shadow-lg text-blue-900"
            onClick={handleNext}
          >
            {'>'}
          </div>
        </div>
       
      </div>
    </div>
  );
};
export default Certificates;
