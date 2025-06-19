import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { blogPosts } from "../constants";
const BlogCard = ({ index, title, description, readTime, date, category, url, image, onClick }) => {
  const handleClick = () => {
    onClick(url);
  };

  return (
    <div 
      className='bg-tertiary p-5 rounded-2xl sm:w-[320px] w-full group relative cursor-pointer'
      onClick={handleClick}
    >
      <Tilt
        className='w-full h-full'
      >
        <div className='relative w-full h-[200px]'>
          <img
            src={image}
            alt={title}
            className='w-full h-full object-cover rounded-2xl'
          />

          {/* Hover Overlay */}
          <div className='absolute inset-0 bg-white bg-opacity-80 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center'>
            <h3 className='text-black font-bold text-[18px] mb-2'>Read Post</h3>
            <div className='text-black text-[24px]'>→</div>
          </div>

          {/* Category Badge */}
          <div className='absolute top-3 left-3'>
            <span className='text-[11px] px-2 py-1 rounded-full bg-violet-gradient text-white font-medium'>
              {category}
            </span>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[20px] leading-tight'>{title}</h3>
          <p className='mt-2 text-secondary text-[14px] leading-relaxed'>{description}</p>
          
          <div className='mt-4 flex justify-between items-center text-[12px] text-gray-400'>
            <span>{readTime}</span>
            <span>{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

const BlogListItem = ({ index, title, description, readTime, date, category, url, onClick }) => {
  return (
    <Tilt
      className="w-full"
    >
      <div 
        className='bg-tertiary p-4 rounded-lg cursor-pointer hover:bg-[#151030] transition-all duration-300 border-l-4 border-transparent hover:border-violet-400 group'
        onClick={() => onClick(url)}
      >
        <div className='flex justify-between items-start'>
          <div className='flex-1 space-y-2'>
            <div className='flex items-center gap-3'>
              <span className='text-[11px] px-2 py-1 rounded bg-violet-gradient text-white font-medium'>
                {category}
              </span>
              <span className='text-gray-400 text-[11px]'>{readTime}</span>
              <span className='text-gray-400 text-[11px]'>
                {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
            
            <h3 className='text-white font-semibold text-[16px] group-hover:text-violet-400 transition-colors duration-300'>
              {title}
            </h3>
            
            <p className='text-secondary text-[13px] leading-relaxed'>
              {description}
            </p>
          </div>

          <div className='ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <div className="w-8 h-8 rounded-full bg-violet-gradient flex items-center justify-center">
              <span className="text-white text-[14px]">→</span>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

const ViewToggle = ({ isListView, onToggle }) => {
  return (
    <div className='flex items-center gap-2 bg-tertiary rounded-lg p-1'>
      <button
        onClick={() => onToggle(false)}
        className={`px-3 py-2 rounded text-[14px] transition-all duration-300 ${
          !isListView 
            ? 'bg-violet-gradient text-white shadow-lg' 
            : 'text-gray-400 hover:text-white'
        }`}
      >
        Grid
      </button>
      <button
        onClick={() => onToggle(true)}
        className={`px-3 py-2 rounded text-[14px] transition-all duration-300 ${
          isListView 
            ? 'bg-violet-gradient text-white shadow-lg' 
            : 'text-gray-400 hover:text-white'
        }`}
      >
        List
      </button>
    </div>
  );
};

const Blog = () => {
  const [isListView, setIsListView] = useState(false);

  const handlePostClick = (url) => {
    // Navigate within the same site - change this to your routing method
    // For React Router: navigate(url)
    // For Next.js: router.push(url)
    // For now using window.location for internal navigation
    window.location.href = url;
  };

  const handleViewAllPosts = () => {
    // Navigate to blog index page within the same site
    window.location.href = "/blog";
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Content Architect</p>
        <h2 className={`${styles.sectionHeadText}`}>Creating AI Blog.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <span className="text-white font-semibold text-[19px] block mb-4">
          "Teaching is the highest form of understanding."
        </span>
        
        My blog is where theory meets practice — a space where I document my journey through AI, 
        machine learning, and software development. Each post combines rigorous technical analysis 
        with hands-on implementation, creating resources that serve both as learning material and 
        practical reference guides.
        <br /><br />
        From deep dives into transformer architectures to practical MLOps pipelines, I believe in 
        sharing knowledge that empowers others to build, learn, and innovate. Every article includes 
        interactive code examples, detailed explanations, and real-world applications.
      </motion.p>

      {/* View Toggle and Visit Blog Button */}
      <div className='mt-8 flex justify-between items-center flex-wrap gap-4'>
        <ViewToggle isListView={isListView} onToggle={setIsListView} />
        
        <motion.button
          onClick={handleViewAllPosts}
          className="px-6 py-3 bg-violet-gradient rounded-lg text-white font-medium hover:scale-105 transition-transform duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Visit Full Blog →
        </motion.button>
      </div>

      {/* Blog Posts with AnimatePresence for smooth transitions */}
      <div className='mt-12'>
        <AnimatePresence mode="wait">
          {!isListView ? (
            <motion.div 
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className='flex flex-wrap gap-7 justify-center'
            >
              {blogPosts.slice(0, 6).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <BlogCard 
                    index={index} 
                    {...post} 
                    onClick={handlePostClick}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className='space-y-4 max-w-4xl mx-auto'
            >
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <BlogListItem 
                    index={index} 
                    {...post} 
                    onClick={handlePostClick}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default SectionWrapper(Blog, "blog");