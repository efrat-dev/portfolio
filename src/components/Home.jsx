import React, { useState, useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services, contactInfo } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

// ייבוא קובץ PDF מתיקיית src
import cvFile from "../assets/cv.pdf";

// אייקון הורדה SVG חמוד
const DownloadIcon = ({ isHovered }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    className={`transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
  >
    <motion.path
      d="M12 3V16M12 16L16 12M12 16L8 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: isHovered ? 1 : 0.8 }}
      transition={{ duration: 0.3 }}
    />
    <motion.path
      d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: isHovered ? 1 : 0.8 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    />
  </svg>
);

// רכיב כפתור הורדת קו"ח מחודש
const CVDownloadButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = () => {
    // פתיחה בחלון חדש לתצוגה והדפסה
    window.open(cvFile, '_blank');
  };

  return (
    <div className="flex justify-center mb-12">
      <motion.button
        onClick={handleDownload}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {/* רקע עם גרדיאנט */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* הכפתור עצמו */}
        <div className="relative bg-[#1a1a2e] border border-purple-500/30 rounded-xl px-8 py-4 flex items-center gap-3 hover:border-purple-400/60 transition-all duration-300">
          
          {/* אפקט זוהר פנימי */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* אייקון */}
          <div className="relative z-10 text-white">
            <DownloadIcon isHovered={isHovered} />
          </div>

          {/* טקסט */}
          <motion.span 
            className='text-white text-[16px] font-semibold relative z-10'
            animate={{ 
              color: isHovered ? '#a855f7' : '#ffffff'
            }}
            transition={{ duration: 0.2 }}
          >
            Download Resume
          </motion.span>

          {/* חלקיקים מתנועעים */}
          {isHovered && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400 rounded-full"
                  initial={{ 
                    x: Math.random() * 160 + 20, 
                    y: Math.random() * 40 + 10,
                    opacity: 0 
                  }}
                  animate={{ 
                    y: [null, -15, 15],
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </>
          )}
        </div>
      </motion.button>
    </div>
  );
};

const ContactCard = ({ index, title, icon, link, type, isVisible }) => {
  const handleClick = () => {
    if (type === "scroll") {
      // גלילה לחלק הקונטקט
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(link, "_blank");
    }
  };

  return (
    <Tilt className='xs:w-[120px] w-full'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className='w-full violet-gradient p-[1px] rounded-[12px] shadow-card cursor-pointer'
        onClick={handleClick}
      >
        <div
          options={{
            max: 20,
            scale: 1.1,
            speed: 250,
          }}
          className='bg-tertiary rounded-[12px] py-3 px-4 min-h-[100px] flex justify-center items-center flex-col hover:bg-[#151030] transition-all duration-300 group'
        >
          <img
            src={icon}
            alt={title}
            className='w-8 h-8 object-contain mb-2 group-hover:scale-110 transition-transform duration-300'
          />

          <h4 className='text-white text-[14px] font-medium text-center'>
            {title}
          </h4>
        </div>
      </motion.div>
    </Tilt>
  );
};

const ServiceCard = ({ index, title, icon, link }) => {
  return (
    <a href={`#${link}`} className="block">
      <Tilt className='xs:w-[200px] w-full cursor-pointer group'>
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:shadow-lg transition-shadow duration-300'
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className='bg-tertiary rounded-[20px] py-4 px-8 min-h-[220px] flex justify-evenly items-center flex-col relative overflow-hidden'
          >
            <img
              src={icon}
              alt={title}
              className='w-12 h-12 object-contain'
            />
            <h3 className='text-white text-[16px] font-bold text-center mt-3'>
              {title}
            </h3>

            {/* הכיתוב שצץ בריחוף */}
            <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                           text-[#915EFF] text-sm font-medium pointer-events-none 
                           whitespace-nowrap'>
              Click to explore →
            </div>
          </div>
        </motion.div>
      </Tilt>
    </a>
  );
};

const Home = () => {
  const [contactVisible, setContactVisible] = useState(false);
  const contactRef = useRef(null);

  // Hook לזיהוי גלילה לכרטיסי הקונטקט
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContactVisible(true);
        }
      },
      {
        threshold: 0.3, // האנימציה תתחיל כאשר 30% מהסקשן נראה
      }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);
  return (
    <>
      {/* רקע על כל הרוחב - מחוץ ל-wrapper */}
      <div className="fixed inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat -z-20"></div>
             
      {/* התוכן הממורכז */}
      <div className="relative w-full min-h-screen">
        <div className="flex flex-col gap-6">
          <div className='flex flex-row items-start gap-5'>
            <div className='flex flex-col justify-center items-center mt-5'>
              <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
              <div className='w-1 sm:h-80 h-40 violet-gradient' />
            </div>
             
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className='text-[#915EFF]'>Efrat Bdil</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                Full Stack & AI Developer with passion <br className='sm:block hidden' />
                for clean code and meaningful impact
              </p>
               
              <br />
              <p className='text-secondary text-[17px] max-w-3xl leading-[30px]'>
                I specialize in building intelligent software solutions that combine logic, creativity, and cutting-edge AI technologies. 
                My approach focuses on self-learning, continuous growth, and delivering real-world solutions that make a difference. 
                I'm eager to contribute my skills and grow within a collaborative team environment where innovation thrives.
              </p>
            </div>
          </div>
        </div>
         
        {/* Services Grid */}
        <div className='mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

        {/* כפתור הורדת קו"ח - נפרד ומעוצב */}
        <div className="mt-16">
          <CVDownloadButton />
        </div>

        {/* Contact Cards Section */}
        <div className='mt-8' ref={contactRef}>
          <motion.h3 
            className='text-white text-[24px] font-bold text-center mb-8'
            initial={{ opacity: 0, y: -20 }}
            animate={contactVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            Find Me Online
          </motion.h3>
          <div className='flex flex-wrap gap-4 justify-center'>
            {/* רק כרטיסי הקונטקט */}
            {contactInfo.map((contact, index) => (
              <ContactCard key={contact.title} index={index} isVisible={contactVisible} {...contact} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Home, "home");