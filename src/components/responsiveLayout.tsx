import React, { useState } from 'react';
import { motion } from 'motion/react';

const getRandomSize = () => Math.floor(Math.random() * 150) + 50; // Random size between 50 and 200

const ResponsiveMotionLayout: React.FC = () => {
  const [sizes, setSizes] = useState<number[]>([100, 100, 100, 100]);

  const handleResize = () => {
    setSizes(sizes.map(() => getRandomSize()));
  };

  return (
    <div className="text-center mt-5">
      <motion.div className="flex justify-center gap-2 p-5 bg-gray-200">
        {sizes.map((size, index) => (
          <motion.div
            key={index}
            animate={{ width: size, height: size }}
            transition={{ duration: 0.5 }}
            className="bg-blue-300 flex justify-center items-center"
          >
            {size}px
          </motion.div>
        ))}
      </motion.div>
      <button
        onClick={handleResize}
        className="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Resize Divs
      </button>
    </div>
  );
};

export default ResponsiveMotionLayout;
