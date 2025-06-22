import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_links,
  demo_link,
}) => {
  const handleDemoClick = () => {
    if (demo_link) {
      window.open(demo_link, "_blank");
    }
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div 
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full group relative cursor-pointer'
        onClick={handleDemoClick}
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='w-full h-full'
        >
          <div className='relative w-full h-[250px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />

            {/* Hover Overlay for Demo */}
            <div className='absolute inset-0 bg-white bg-opacity-60 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
              <div className='flex items-center gap-2'>
                <h3 className='text-black font-bold text-[18px]'>Visit Site</h3>
                <div className='text-black text-[24px]'>→</div>
              </div>
            </div>

            {/* GitHub Links */}
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div className='flex gap-2'>
                {source_code_links.map((link, linkIndex) => (
                  <div
                    key={linkIndex}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(link.url, "_blank");
                    }}
                    className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer z-10'
                    title={link.name}
                  >
                    <img
                      src={github}
                      alt={`${link.name} source code`}
                      className='w-1/2 h-1/2 object-contain'
                    />
                  </div>
                ))}
              </div>
            </div>
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

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center mb-10">
        <p className="text-[#915eff] font-medium text-[18px] uppercase tracking-wider">Mission Complete</p>
        <h2 className="text-white font-black md:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] mt-2">Projects.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");