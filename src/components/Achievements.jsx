import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CertificationCard = ({
  index,
  name,
  issuer,
  issuerImage,
  description,
  date,
  skills,
  image,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='certification_image'
            className='w-full h-full object-cover rounded-2xl'
          />
          
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div className='bg-white bg-opacity-90 w-20 h-20 flex justify-center items-center rounded-lg shadow-lg'>
              <img
                src={issuerImage}
                alt={`${issuer} logo`}
                className='w-16 h-16 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-1 text-secondary text-[16px] font-semibold'>{issuer}</p>
          <p className='mt-1 text-secondary text-[14px]'>{date}</p>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {skills.map((skill) => (
            <p
              key={`${name}-${skill.name}`}
              className={`text-[14px] ${skill.color}`}
            >
              #{skill.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center mb-10">
        <p className="text-[#915eff] font-medium text-[18px] uppercase tracking-wider">Achievement Unlocked</p>
        <h2 className="text-white font-black md:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] mt-2">Certifications.</h2>
      </motion.div>
      
      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {certifications.map((certification, index) => (
          <CertificationCard key={`certification-${index}`} index={index} {...certification} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "certificates");