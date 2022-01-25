import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiGithubLine } from 'react-icons/ri';
import { GrFacebookOption } from 'react-icons/gr';
import { FaDiscord } from 'react-icons/fa';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import ReactTooltip from 'react-tooltip';

const buttonVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, delay: 0.6 } },
};

const FloatingButtons = ({ isMounted }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        variants={buttonVariants}
        initial='hidden'
        animate='visible'
        className='fixed bottom-1/3'
      >
        <div className='flex flex-ro items-center'>
          <div
            className={`relative md:flex flex-col justify-between ml-4 h-32 ${
              isOpen ? 'left-0' : '-left-96 md:left-0'
            } transition-all ease-in-out duration-500`}
          >
            {isMounted && <ReactTooltip id={'git'} effect={'solid'} />}
            <div
              data-tip={'Github'}
              data-for={'git'}
              className='bg-black dark:bg-white dark:text-black text-white rounded-full p-2 my-2 hover:cursor-pointer'
            >
              <a
                href='https://github.com/rosanno'
                target='_blank'
                rel='noreferrer'
              >
                <RiGithubLine size={20} />
              </a>
            </div>
            {isMounted && <ReactTooltip id={'fb'} effect={'solid'} />}
            <div
              data-tip={'Facebook'}
              data-for={'fb'}
              className='bg-black dark:bg-white dark:text-black text-white rounded-full p-2 my-2 hover:cursor-pointer'
            >
              <a href=''>
                <GrFacebookOption size={20} />
              </a>
            </div>
            {isMounted && <ReactTooltip id={'discord'} effect={'solid'} />}
            <div
              data-tip={'Discord'}
              data-for={'discord'}
              className='bg-black dark:bg-white dark:text-black text-white rounded-full p-2 my-2 hover:cursor-pointer'
            >
              <a
                href='https://discord.com/channels/899474098747478066/899474098747478069'
                target='_blank'
                rel='noreferrer'
              >
                <FaDiscord size={20} />
              </a>
            </div>
          </div>
          <div
            className={`flex md:hidden  ${
              isOpen ? 'ml-2 delay-300' : '-ml-12 delay-75'
            } transition-all ease-in-out bg-gray-500 bg-opacity-25 rounded-full p-1`}
          >
            {isOpen ? (
              <BsChevronLeft onClick={() => setIsOpen(false)} />
            ) : (
              <BsChevronRight onClick={() => setIsOpen(true)} />
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FloatingButtons;
