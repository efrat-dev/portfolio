import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SVGComponent from '../assets/branding/SVGComponent.jsx';

// ייבוא תמונת המיתוג
import brandingImage from '../assets/branding/logo1.png';

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className="w-full bg-primary relative overflow-hidden">
      
      {/* אפקט רקע מתנועע */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
          className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-pink-900/10 bg-[length:200%_200%]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        
        {/* קונטיינר ראשי */}
        <div className="flex flex-col items-center space-y-8">
          
          {/* SVG Component עם אפקטים */}
                
              <SVGComponent />

          {/* קווים מעוצבים */}
          <div className="flex items-center space-x-4 w-full max-w-md">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-pink-400 flex-1"
            />
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-2 h-2 bg-purple-400 rounded-full"
            />
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-[2px] bg-gradient-to-l from-transparent via-purple-400 to-pink-400 flex-1"
            />
          </div>

          {/* טקסט מעוצב */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center space-y-2"
          >
            <p className="text-secondary text-sm font-medium">
              © {new Date().getFullYear()} Efrat Bdil
            </p>
            <p className="text-secondary/70 text-xs">
            Intelligent Development. Reliable Results.
            </p>
          </motion.div>

          {/* חלקיקים מתנועעים */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: '20%'
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;