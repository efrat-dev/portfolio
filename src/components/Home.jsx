import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

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
  <div
  className='absolute bottom-4 left-1/2 transform -translate-x-1/2 
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
         
        <div className='mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Home, "home");