import React, { useState } from "react";
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
    width="32" 
    height="32" 
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
    {isHovered && (
      <motion.circle
        cx="12"
        cy="12"
        r="1"
        fill="currentColor"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.2 }}
      />
    )}
  </svg>
);

// רכיב כרטיס הורדת קו"ח
const CVDownloadCard = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = () => {
    // פתיחה בחלון חדש לתצוגה והדפסה
    window.open(cvFile, '_blank');
  };

  return (
    <Tilt className='xs:w-[120px] w-full'>
      <motion.div
        variants={fadeIn("up", "spring", index * 0.2, 0.5)}
        className='w-full violet-gradient p-[1px] rounded-[12px] shadow-card cursor-pointer'
        onClick={handleDownload}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className='bg-tertiary rounded-[12px] py-3 px-4 min-h-[100px] flex justify-center items-center flex-col hover:bg-[#151030] transition-all duration-300 group relative overflow-hidden'>
          
          {/* אפקט זוהר ברקע */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-[12px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* אייקון הורדה */}
          <div className="relative z-10 text-white mb-2">
            <DownloadIcon isHovered={isHovered} />
          </div>

          {/* טקסט */}
          <motion.h4 
            className='text-white text-[14px] font-medium text-center relative z-10'
            animate={{ 
              color: isHovered ? '#a855f7' : '#ffffff',
              scale: isHovered ? 1.05 : 1 
            }}
            transition={{ duration: 0.2 }}
          >
            Resume
          </motion.h4>

          {/* חלקיקים מתנועעים */}
          {isHovered && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400 rounded-full"
                  initial={{ 
                    x: Math.random() * 80 + 20, 
                    y: Math.random() * 80 + 20,
                    opacity: 0 
                  }}
                  animate={{ 
                    y: [null, -10, 10],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </>
          )}
        </div>
      </motion.div>
    </Tilt>
  );
};

const ContactCard = ({ index, title, icon, link, type }) => {
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
        variants={fadeIn("up", "spring", index * 0.2, 0.5)}
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

        {/* Contact Cards Section */}
        <div className='mt-16'>
          <h3 className='text-white text-[24px] font-bold text-center mb-8'>
          Find Me Online
                    </h3>
          <div className='flex flex-wrap gap-4 justify-center'>
            {/* כרטיס הורדת קו"ח */}
            <CVDownloadCard index={0} />
            
            {/* שאר כרטיסי הקונטקט */}
            {contactInfo.map((contact, index) => (
              <ContactCard key={contact.title} index={index + 1} {...contact} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Home, "home");