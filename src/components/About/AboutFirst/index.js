import './index.scss';
import Photo from '../../Photo';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const imageList = [
  require('../../../assets/images/Ananda_Crest1.jpg'),
  require('../../../assets/images/bc1.jpg'),
  require('../../../assets/images/iit.png'),
];

const paraList = [
  
  `
  I attended Ananda College from 2018 to 2020, where I completed my GCE A/L examinations in the physical sciences and achieved three C passes. 
  Beyond my academic pursuits, I also served as a board member of the Ananda College Saukyadana Unit.
  During that period, we organized a Saukyadana event called 'Arogya' and a week-long medical camp at Siripada. 
  This experience provided me with valuable insights into teamwork and event planning, skills that are integral to my chosen career path.
  `,
  `
  I studied at Gampaha Bandaranayake College from 2013 to 2017 and achieved outstanding results with 9 A's in my GCE O-Level examinations.
  In addition to my academic achievements, I also had the privilege of being a part of the Cadet Army Platoon during the years 2016-2017. 
  This experience as a member of the Cadet Army Platoon enriched my personal development, teaching me valuable lessons in discipline, leadership, and teamwork.
  `,
  `
  I am currently pursuing a Bachelor of Software Engineering at IIT Sri Lanka, which awards a degree from the University of Westminster.
  As a young adult aspiring to enter the professional world, I am dedicated to honing not only my technical skills, acquired through my 
  university education but also a range of soft skills crucial for a successful career.
  
  I also hold the position of Secretary at the Leo Club of Biyagama Alliance. 
  This role has afforded me valuable experience in interacting with people and managing projects. 
  These skills will undoubtedly serve as a strong foundation for my future endeavors.
  `,
];

const Hello = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentParaIndex, setCurrentParaIndex] = useState(0);

  const updateContent = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    setCurrentParaIndex((prevIndex) => (prevIndex + 1) % paraList.length);
  };

  useEffect(() => {
    const interval = setInterval(updateContent, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fade-in-div">
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >

          <div className='school'><Photo imageUrl={imageList[currentImageIndex]} className={'aboutFirst'} /></div>

          
          <div key={currentParaIndex} className="paragraph">
                    <div className='rt'>{paraList[currentParaIndex]}</div>
                    
          </div>

        </motion.div>
        
      </AnimatePresence>
    </div>
  );
};

export default Hello;
