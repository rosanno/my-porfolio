import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Datas } from '../data/Data';

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      type: 'tween',
      staggerChildren: 0.1,
    },
  },
};

const imgVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

// eslint-disable-next-line react/display-name
const Grid = forwardRef((props, ref) => {
  return (
    <motion.div
      ref={ref}
      variants={gridVariants}
      initial='hidden'
      animate={`${props.inView && 'visible'}`}
      className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-10 w-4/5 mx-auto'
    >
      {Datas.map((data, i) => (
        <motion.div key={i} className='tech' variants={imgVariants}>
          <Image src={data.img} alt={data.title} />
          <span className='mt-5'>{data.title}</span>
        </motion.div>
      ))}
    </motion.div>
  );
});

export default Grid;
