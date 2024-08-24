"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface BlogsCardProps {
  imageUrl: string;
  title: string;
  onReadMore: () => void;
}

const BlogCard: React.FC<BlogsCardProps> = ({ imageUrl, title, onReadMore }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg bg-white transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-md"
      whileHover={{
        scale: 1.05,
        rotateX: 9,
        rotateY: 20,
        rotateZ: 8,
        zIndex: 1,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }}
    >
      <motion.div
        className="w-full h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="p-4 flex flex-col items-center justify-center h-32 text-center relative">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
        <button
          className="text-bold bg-blue-500 text-black hover:text-white rounded-lg px-4 py-2 mt-2 transition-colors duration-300 hover:bg-blue-600"
          onClick={onReadMore}
        >
          Read More
        </button>
      </div>
    </motion.div>
  );
};

export default BlogCard;
