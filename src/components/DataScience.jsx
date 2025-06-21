import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { 
  mlDeepLearningProjects, 
  llmProjects, 
  learningResources 
} from "../constants/index.js"
import { fadeIn, textVariant } from "../utils/motion.js";

// General component for project/learning material cards
const DataProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  const handleDemoClick = () => {
    if (demo_link) {
      window.open(demo_link, "_blank");
    }
  };

  return (
    <div 
      className={`bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full group relative ${demo_link ? 'cursor-pointer' : ''}`}
      onClick={demo_link ? handleDemoClick : undefined}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='w-full h-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          {/* Hover Overlay for Demo */}
          {demo_link && (
            <div className='absolute inset-0 bg-white bg-opacity-80 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center'>
              <h3 className='text-black font-bold text-[18px] mb-2'>Visit Demo</h3>
              <div className='text-black text-[24px]'>→</div>
            </div>
          )}

          {/* GitHub Link */}
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer z-10'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] text-justify'>{description}</p>
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
  );
};

// Component for learning resources section
const LearningResourcesSection = () => {
  return (
    <div className="mt-20">
      <motion.div
        initial="hidden"
        animate="show"
        variants={textVariant()}
        className="text-center mb-8"
      >
        <h3 className="text-[#915eff] font-medium text-[18px] uppercase tracking-wider">
        Learning Engineer
        </h3>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mt-2">
          Knowledge Hub
        </h2>
      </motion.div>
      
      <motion.p 
        initial="hidden"
        animate="show"
        variants={fadeIn("", "", 0.1, 1)}
        className="text-justify text-secondary text-[17px] max-w-3xl mx-auto leading-[30px]"
      >
        Summaries, tutorials, and learning materials I've created throughout my journey in the Data Science world
      </motion.p>

      <div className='mt-12 flex flex-wrap gap-7 justify-center'>
        {learningResources.map((resource, index) => (
          <motion.div 
            key={`learning-${index}`}
            initial="hidden"
            animate="show"
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
          >
            <DataProjectCard index={index} {...resource} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Component for ML & Deep Learning projects
const MLDeepLearningSection = () => {
  return (
    <div className="mt-20">
      <motion.div
        initial="hidden"
        animate="show"
        variants={textVariant()}
        className="text-center mb-8"
      >
        <h3 className="text-[#915eff] font-medium text-[18px] uppercase tracking-wider">
        Data Alchemist
                </h3>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mt-2">
          Machine & Deep Learning
        </h2>
      </motion.div>
      
      <motion.p 
        initial="hidden"
        animate="show"
        variants={fadeIn("", "", 0.1, 1)}
        className="text-justify text-secondary text-[17px] max-w-3xl mx-auto leading-[30px]"
      >
        Projects in implementation of Machine Learning and Deep Learning algorithms
      </motion.p>

      <div className='mt-12 flex flex-wrap gap-7 justify-center'>
        {mlDeepLearningProjects.map((project, index) => (
          <motion.div 
            key={`ml-${index}`}
            initial="hidden"
            animate="show"
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
          >
            <DataProjectCard index={index} {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Component for LLM projects
// Component for LLM projects - עם ID ייחודי
const LLMProjectsSection = () => {
    return (
      <div className="mt-20" id="llm-section">
        <motion.div
          initial="hidden"
          animate="show"
          variants={textVariant()}
          className="text-center mb-8"
        >
          <h3 className="text-[#915eff] font-medium text-[18px] uppercase tracking-wider">
          Prompt Whisperer
          </h3>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mt-2">
            LLM & NLP
          </h2>
        </motion.div>
        
        <motion.p 
          initial="hidden"
          animate="show"
          variants={fadeIn("", "", 0.1, 1)}
          className="text-justify text-secondary text-[17px] max-w-3xl mx-auto leading-[30px]"
        >
          Projects with Large Language Models, LangChain, and advanced NLP applications. <br /><br />
          Building with LLMs is more than just calling an API. It's a data-centric challenge that requires analytical thinking, thoughtful evaluation, and intelligent orchestration. With a Data Science mindset, I transform language models into insight engines—driven by structured data, optimized prompts, and meaningful outcomes.
        </motion.p>

        <div className='mt-12 flex flex-wrap gap-7 justify-center'>
          {llmProjects.map((project, index) => (
            <motion.div 
              key={`llm-${index}`}
              initial="hidden"
              animate="show"
              variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            >
              <DataProjectCard index={index} {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

// Main component
const DataScience = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="show"
        variants={textVariant()}
        className="text-center mb-10"
      >
        <p className="text-[#915eff] font-medium text-[18px] uppercase tracking-wider">
          I & AI
        </p>
        <h2 className="text-white font-black md:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] mt-2">
          Data Science.
        </h2>
      </motion.div>
      
      <motion.p 
        initial="hidden"
        animate="show"
        variants={fadeIn("", "", 0.1, 1)}
        className="text-justify text-secondary text-[18px] max-w-4xl mx-auto leading-[32px]"
      >
        My journey in the world of Data Science, artificial intelligence, and developing intelligent solutions based on data-driven insights. <br/> <br />
        My fascination with Artificial Intelligence goes beyond curiosity—it's a deep appreciation for the profound intelligence and innovation at the heart of this transformative field. I'm captivated by algorithms that learn, adapt, and solve complex problems in ways that mirror human cognition. By investing in AI technologies today, I'm building the foundation for tomorrow's innovations and shaping the intelligent future we're heading toward.
      </motion.p>

      {/* Learning Resources */}
      <LearningResourcesSection />

      {/* ML & Deep Learning Projects */}
      <MLDeepLearningSection />

      {/* LLM Projects */}
      <LLMProjectsSection />
    </>
  );
};

export default SectionWrapper(DataScience, "data-science");