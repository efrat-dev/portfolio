import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { contactInfo } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

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
            הורד קו"ח
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

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Human Algorithm</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <span className="text-white font-semibold text-[19px] block mb-4">
          "To write code is to walk the bridge between abstract thought and real-world impact."
        </span>
        
        I approach programming as an intellectual discipline where great code reflects clear thinking — not just what 
        works, but why it matters. For me, programming is the art of teaching logic to a machine while bringing 
        clarity to complex problems.
        <br /><br />
        I see software development as a rigorous exploration of ideas, where precision meets creativity. Code is not 
        just a tool in my hands — it's a language of thought, a medium for turning complex concepts into elegant, 
        functional solutions. I believe in the philosophy that every line written should serve a purpose, every 
        function should tell a story, and every application should bridge the gap between what exists and what's possible.
        <br /><br />
        My approach is rooted in understanding the 'why' behind every technical decision. I don't just build features; 
        I craft experiences. I don't just solve problems; I anticipate them. This mindset drives me to create software 
        that doesn't merely function — it resonates, inspires, and leaves a lasting impression - not just in systems, but in minds.
        <br /><br />
        I'm passionate about joining teams where this philosophy can flourish, where technical excellence meets 
        meaningful purpose, and where every project becomes an opportunity to push boundaries and create something 
        remarkable together.
      </motion.p>
      
        <div className='mt-16 flex flex-wrap gap-4 justify-center'>
        {/* כרטיס הורדת קו"ח */}
        <CVDownloadCard index={0} />
        
        {/* שאר כרטיסי הקונטקט */}
        {contactInfo.map((contact, index) => (
          <ContactCard key={contact.title} index={index + 1} {...contact} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");