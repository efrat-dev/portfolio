import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, pypi } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { openSourceProjects } from "../constants";

const OpenSourceProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  pypi_link,
}: {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
  pypi_link?: string; // אופציונלי
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full group relative'
      >
        <Tilt
          tiltMaxAngleX={45}
          tiltMaxAngleY={45}
          scale={1}
          transitionSpeed={450}
          className='w-full h-full'
        >
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />

            {/* GitHub Link */}
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={(e) => {
                  window.open(source_code_link, "_blank");
                }}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer z-10 ml-2'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            {/* PyPI Package Link - רק אם קיים */}
            {pypi_link && (
              <div className='absolute top-3 right-16 card-img_hover'>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(pypi_link, "_blank");
                  }}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer z-10'
                >
                  <img
                    src={pypi}
                    alt='pypi package'
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            )}
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </div>
    </motion.div>
  );
};

const OpenSourceWorks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I Create</p>
        <h2 className={`${styles.sectionHeadText}`}>Open Source Projects.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {openSourceProjects.map((project, index) => (
          <OpenSourceProjectCard key={`opensource-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(OpenSourceWorks, "opensource");