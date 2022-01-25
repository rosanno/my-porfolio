import React, { forwardRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import code from '../img/code.svg';

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const image = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.2,
    },
  },
};

const heading = 'Hi';
const subheading = "I'm rosanno";
const subtitle = 'frontend / backend developer';

// eslint-disable-next-line react/display-name
const Header = forwardRef((props, ref) => {
  return (
    <div className='section pt-20' id='home' ref={ref}>
      <div className='flex flex-col md:flex-row justify-center md:items-center h-full w-full'>
        <div className='flex-1'>
          <motion.h1 variants={sentence} initial='hidden' animate='visible'>
            {heading.split('').map((char, index) => (
              <motion.span
                key={char + '-' + index}
                variants={letter}
                className='text-2xl font-normal'
              >
                {char}
              </motion.span>
            ))}
            <br />
            {subheading.split('').map((char, index) => (
              <motion.span
                key={char + '-' + index}
                variants={letter}
                className='uppercase font-bold text-4xl md:text-6xl'
              >
                {char}
              </motion.span>
            ))}
            <br />
            {subtitle.split('').map((char, index) => (
              <motion.span
                key={char + '-' + index}
                variants={letter}
                className='text-lg text-gray-500 font-normal'
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>
        <motion.div
          variants={image}
          initial='hidden'
          animate='visible'
          className='flex-1 mt-14'
        >
          <Image src={code} alt='code' />
        </motion.div>
      </div>
    </div>
  );
});

export default Header;
