// Tech.jsx
import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const TechCard = ({ technology, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: "easeOut"
      }}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="group relative"
    >
      {/* עדינות זוהר מסביב */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 via-slate-600/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300"></div>
      
      {/* הכרטיס הראשי */}
      <div className="relative w-32 h-32 rounded-2xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 border border-slate-600/50 flex items-center justify-center overflow-hidden group-hover:border-blue-500/30 transition-all duration-300 shadow-lg">
        
        {/* רקע עדין */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50"></div>
        
        {/* נקודת אור עדינה */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-3 right-3 w-1 h-1 bg-blue-400/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        {/* האייקון */}
        <div className="relative z-10 w-16 h-16 flex items-center justify-center">
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-14 h-14 object-contain filter brightness-95 group-hover:brightness-105 transition-all duration-300"
          />
        </div>
        
        {/* אפקט זכוכית עדין */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/8 to-transparent rounded-t-2xl"></div>
      </div>
      
      {/* שם הטכנולוגיה */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.08 + 0.3 }}
        className="mt-4 text-center"
      >
        <p className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
          {technology.name}
        </p>
      </motion.div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <div className="relative">
      {/* רקע עדין */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-1 h-1 bg-blue-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/6 w-1 h-1 bg-slate-400/10 rounded-full animate-pulse delay-1000"></div>
      </div>
      
      {/* כותרת */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Technologies
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto rounded-full"></div>
        <p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto">
          Professional tools and technologies I work with
        </p>
      </motion.div>
      
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
  );
};

export default SectionWrapper(Tech, "tech");