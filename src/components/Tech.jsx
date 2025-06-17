// Tech.jsx
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const TechCard = ({ technology, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [breatheScale, setBreatheScale] = useState(1);

  // אפקט נשימה עדין עם useState
  useEffect(() => {
    const breatheInterval = setInterval(() => {
      setBreatheScale(prev => {
        const time = Date.now() / 2000; // מחזור של 4 שניות
        return 1 + Math.sin(time) * 0.02; // תנודה בין 0.98 ל-1.02
      });
    }, 50);

    return () => clearInterval(breatheInterval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30, rotateX: -20 }}
      animate={{
        opacity: 1,
        scale: breatheScale, // אפקט הנשימה
        y: 0,
        rotateX: 0
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{
        scale: 1.15,
        y: -12,
        rotateY: mousePosition.x * 0.1,
        rotateX: -mousePosition.y * 0.1,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative perspective-1000 cursor-pointer"
    >
      {/* הילה מתרחבת */}
      <motion.div 
        className="absolute -inset-4 rounded-3xl opacity-0 blur-xl"
        animate={{
          background: isHovered 
            ? ["linear-gradient(45deg, #3b82f6, #6366f1, #8b5cf6, #3b82f6)", 
               "linear-gradient(135deg, #6366f1, #8b5cf6, #3b82f6, #6366f1)",
               "linear-gradient(225deg, #8b5cf6, #3b82f6, #6366f1, #8b5cf6)"]
            : "linear-gradient(45deg, transparent, transparent)",
          opacity: isHovered ? [0.3, 0.5, 0.3] : 0,
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      
      {/* זוהר פנימי נע */}
      <motion.div 
        className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-purple-500/20 to-indigo-500/10 rounded-2xl opacity-0 blur-sm"
        animate={{
          opacity: isHovered ? [0.5, 0.8, 0.5] : 0,
          rotate: isHovered ? 360 : 0,
        }}
        transition={{ 
          opacity: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 8, repeat: Infinity, ease: "linear" }
        }}
      />
      
      {/* הכרטיס הראשי */}
      <motion.div 
        className="relative w-36 h-36 rounded-3xl bg-gradient-to-br from-slate-800/90 via-slate-700/80 to-slate-900/90 backdrop-blur-sm border border-slate-600/30 flex items-center justify-center overflow-hidden shadow-2xl"
        animate={{
          borderColor: isHovered 
            ? ["rgba(59, 130, 246, 0.3)", "rgba(99, 102, 241, 0.5)", "rgba(139, 92, 246, 0.3)"]
            : "rgba(148, 163, 184, 0.3)",
          boxShadow: isHovered
            ? ["0 25px 50px -12px rgba(59, 130, 246, 0.25)", 
               "0 25px 50px -12px rgba(99, 102, 241, 0.35)",
               "0 25px 50px -12px rgba(139, 92, 246, 0.25)"]
            : "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        
        {/* רקע נוזלי */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-white/10 via-blue-500/5 to-transparent"
          animate={{
            background: isHovered 
              ? ["linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(59,130,246,0.1) 50%, transparent 100%)",
                 "linear-gradient(225deg, rgba(255,255,255,0.1) 0%, rgba(99,102,241,0.1) 50%, transparent 100%)",
                 "linear-gradient(315deg, rgba(255,255,255,0.1) 0%, rgba(139,92,246,0.1) 50%, transparent 100%)"]
              : "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(59,130,246,0.02) 50%, transparent 100%)"
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* חלקיקים מרחפים */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: 0 
              }}
              animate={isHovered ? {
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              } : {}}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* קווים דקורטיביים נעים */}
        <motion.div 
          className="absolute inset-0"
          animate={isHovered ? { rotate: 360 } : {}}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-gradient-to-b from-blue-400/20 to-transparent transform -translate-x-1/2"></div>
          <div className="absolute bottom-0 left-1/2 w-0.5 h-8 bg-gradient-to-t from-indigo-400/20 to-transparent transform -translate-x-1/2"></div>
          <div className="absolute left-0 top-1/2 h-0.5 w-8 bg-gradient-to-r from-purple-400/20 to-transparent transform -translate-y-1/2"></div>
          <div className="absolute right-0 top-1/2 h-0.5 w-8 bg-gradient-to-l from-blue-400/20 to-transparent transform -translate-y-1/2"></div>
        </motion.div>
        
        {/* האייקון */}
        <motion.div 
          className="relative z-10 w-20 h-20 flex items-center justify-center"
          animate={isHovered ? { 
            rotateY: [0, 180, 360],
            scale: [1, 1.1, 1]
          } : {}}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <motion.img
            src={technology.icon}
            alt={technology.name}
            className="w-16 h-16 object-contain filter brightness-90"
            animate={{
              filter: isHovered 
                ? ["brightness(0.9) drop-shadow(0 0 10px rgba(59,130,246,0.3))",
                   "brightness(1.1) drop-shadow(0 0 15px rgba(99,102,241,0.4))",
                   "brightness(0.9) drop-shadow(0 0 10px rgba(139,92,246,0.3))"]
                : "brightness(0.9)"
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        
        {/* זכוכית משתנה */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-1/2 rounded-t-3xl"
          animate={{
            background: isHovered
              ? "linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.05))"
              : "linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(255,255,255,0.02))"
          }}
          transition={{ duration: 0.5 }}
        />
        
        {/* פינות מוארות */}
        {[
          { position: "top-3 left-3", delay: 0 },
          { position: "top-3 right-3", delay: 0.2 },
          { position: "bottom-3 left-3", delay: 0.4 },
          { position: "bottom-3 right-3", delay: 0.6 }
        ].map((corner, i) => (
          <motion.div
            key={i}
            className={`absolute ${corner.position} w-2 h-2 border-l border-t border-blue-400/0 rounded-tl-sm`}
            animate={isHovered ? {
              borderColor: ["rgba(59,130,246,0)", "rgba(59,130,246,0.6)", "rgba(59,130,246,0)"],
            } : {}}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              delay: corner.delay,
              ease: "easeInOut" 
            }}
          />
        ))}
      </motion.div>
      
      {/* שם הטכנולוגיה - מופיע רק בהובר */}
      <motion.div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={isHovered ? { 
          opacity: 1, 
          y: 0, 
          scale: 1 
        } : { 
          opacity: 0, 
          y: 10, 
          scale: 0.8 
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.div 
          className="relative px-4 py-2 bg-slate-800/90 backdrop-blur-sm rounded-lg border border-slate-600/50"
          animate={isHovered ? {
            borderColor: ["rgba(59,130,246,0.3)", "rgba(99,102,241,0.5)", "rgba(59,130,246,0.3)"],
            boxShadow: ["0 4px 20px rgba(59,130,246,0.1)", "0 4px 25px rgba(99,102,241,0.2)", "0 4px 20px rgba(59,130,246,0.1)"]
          } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-slate-200 text-sm font-medium tracking-wide">
            {technology.name}
          </p>
          {/* חץ קטן */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45 border-l border-t border-slate-600/50"></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};



const Tech = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
        {/* רקע אינטראקטיבי */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* גלים נעים */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-full opacity-5"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-1/4 left-1/4 w-40 h-40 border border-blue-400/10 rotate-45 rounded-2xl"></div>
            <div className="absolute top-3/4 right-1/4 w-32 h-32 border border-indigo-400/8 rotate-12 rounded-2xl"></div>
            <div className="absolute top-1/2 left-3/4 w-28 h-28 border border-purple-400/6 -rotate-12 rounded-2xl"></div>
          </motion.div>
          
          {/* חלקיקים מרחפים ברקע */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/10 rounded-full"
              initial={{ 
                x: Math.random() * 1200,
                y: Math.random() * 800,
                opacity: 0
              }}
              animate={isVisible ? {
                y: [0, -50, 0],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0]
              } : {}}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* רשת הטכנולוגיות */}
        <div className="flex flex-row flex-wrap justify-center gap-12 relative z-10">
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