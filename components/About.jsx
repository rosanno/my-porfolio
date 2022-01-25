import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Profile from '../img/profile.svg';

const textVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: 200 },
};

const ImageVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: -200 },
};

// eslint-disable-next-line react/display-name
const About = forwardRef((props, ref) => {
  return (
    <section
      className='section bg-white dark:bg-gray-900 py-20 mt-36 md:mt-48 overflow-hidden'
      id='about'
      ref={ref}
    >
      <div className='flex flex-col md:flex-row-reverse justify-center h-full w-full'>
        <motion.div
          animate={props.controls}
          initial='hidden'
          variants={textVariants}
          className='flex-1 ml-0 md:ml-20'
        >
          <h1 className='font-bold text-3xl md:text-5xl mt-8'>About me</h1>
          <p className='mt-7 text-left text-base text-gray-500'>
            I{"'"}m Rosanno Macabuhay, looking for a position to kickstart my
            career in the field of Frontend Development. I{"'"}ve been
            interested in learning Frontend Development during my entire college
            and took this chance during pandemic to be more skilled and
            knowledgeable on this field.
          </p>
        </motion.div>
        <motion.div
          animate={props.controls}
          initial='hidden'
          variants={ImageVariants}
          className='flex-1 mt-14'
        >
          <Image src={Profile} alt='about me' />
        </motion.div>
      </div>
    </section>
  );
});

export default About;
