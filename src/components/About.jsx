import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

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
    </>
  );
};

export default SectionWrapper(About, "about");