// Tech.jsx
import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const TechCard = ({ technology, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20, rotateY: -15 }}
      animate={{ opacity: 1, scale: 1, y: 0, rotateY: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{
        scale: 1.08,
        y: -8,
        rotateY: 8,
        rotateX: 5,
        transition: { duration: 0.3 }
      }}
      className="group relative perspective-1000"
    >
      {/* זוהר מתקדם מסביב */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 via-purple-500/10 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 animate-pulse"></div>
      
      {/* הכרטיס הראשי */}
      <div className="relative w-32 h-32 rounded-2xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 border border-slate-600/50 flex items-center justify-center overflow-hidden group-hover:border-blue-400/50 transition-all duration-300 shadow-xl group-hover:shadow-blue-500/10">
        
        {/* רקע מתקדם */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-blue-500/5 to-transparent opacity-60"></div>
        
        {/* דוטים דקורטיביים */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 right-4 w-1 h-1 bg-blue-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-4 left-4 w-0.5 h-0.5 bg-indigo-400/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute top-6 left-6 w-0.5 h-0.5 bg-blue-300/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
        </div>
        
        {/* קו דקורטיבי */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* האייקון */}
        <div className="relative z-10 w-16 h-16 flex items-center justify-center">
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-14 h-14 object-contain filter brightness-95 group-hover:brightness-110 group-hover:drop-shadow-lg transition-all duration-300"
          />
        </div>
        
        {/* אפקט זכוכית מתקדם */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/12 via-white/6 to-transparent rounded-t-2xl"></div>
        
        {/* משולש דקורטיבי */}
        <div className="absolute top-2 left-2 w-2 h-2 border-l border-t border-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* שם הטכנולוגיה */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 + 0.4 }}
        className="mt-5 text-center"
      >
        <p className="text-slate-300 text-sm font-medium group-hover:text-blue-100 transition-colors duration-300 tracking-wide">
          {technology.name}
        </p>
      </motion.div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I Work With
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Tech Stack.
        </h2>
      </motion.div>

      <div className="relative mt-20">
        {/* רקע יצירתי */}
        <div className="absolute inset-0 overflow-hidden">
          {/* גרידים גיאומטריים עדינים */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-400/20 rotate-45 rounded-lg"></div>
            <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-indigo-400/15 rotate-12 rounded-lg"></div>
            <div className="absolute top-1/2 left-3/4 w-20 h-20 border border-blue-300/10 -rotate-12 rounded-lg"></div>
          </div>
          
          {/* נקודות מנצנצות */}
          <div className="absolute top-1/6 left-1/5 w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/5 w-1 h-1 bg-indigo-400/15 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 left-4/5 w-0.5 h-0.5 bg-blue-300/10 rounded-full animate-pulse delay-500"></div>
        </div>
        
        {/* רשת הטכנולוגיות */}
        <div className="flex flex-row flex-wrap justify-center gap-8">
          {technologies.map((technology, index) => (
            <TechCard
              key={technology.name}
              technology={technology}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");