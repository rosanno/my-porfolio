import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { MenuAlt3Icon, XIcon } from '@heroicons/react/solid';
import { BsToggle2Off, BsToggle2On } from 'react-icons/bs';
import useDarkMode from '../hooks/useDarkMode';

const navVariant = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const navItemsVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const logoVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9 } },
};

const Navbar = ({ navScroll, active, setActive }) => {
  const [colorTheme, setColorTheme] = useDarkMode();

  return (
    <>
      <div
        className={`hidden md:flex w-full h-20 fixed inset-y-0 z-30 items-center justify-between px-3 md:px-16 ${
          navScroll ? 'bg-white dark:bg-gray-900 shadow-md' : ''
        } transition ease-in-out duration-300 navbar`}
      >
        <div className='hidden md:flex justify-between w-full'>
          <motion.div
            variants={logoVariant}
            initial='hidden'
            animate='visible'
            className='flex flex-row justify-center items-center text-lg'
          >
            <span className='mr-1 font-bold text-red-600'>{'<'}</span>
            <a className='font-[700]' href='#header'>
              <span className='text-red-600'>R</span>OS
            </a>
            <span className='ml-1 font-bold text-red-600'>{'/>'}</span>
          </motion.div>
          <motion.ul
            variants={navVariant}
            initial='hidden'
            animate='visible'
            className='flex flex-row justify-center items-center'
          >
            <motion.li
              variants={navItemsVariant}
              className='list-item active-link'
            >
              <Link
                activeClass='active'
                to='home'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </motion.li>
            <motion.li variants={navItemsVariant} className='list-item'>
              <Link
                activeClass='active'
                to='about'
                spy={true}
                smooth={true}
                offset={-260}
                duration={500}
              >
                About
              </Link>
            </motion.li>
            <motion.li variants={navItemsVariant} className='list-item'>
              <Link
                activeClass='active'
                to='technologies'
                spy={true}
                smooth={true}
                offset={-300}
                duration={500}
              >
                Technologies
              </Link>
            </motion.li>
            <motion.li variants={navItemsVariant} className='list-item'>
              <Link
                activeClass='active'
                to='projects'
                spy={true}
                smooth={true}
                offset={-560}
                duration={500}
              >
                Projects
              </Link>
            </motion.li>
            <motion.li variants={navItemsVariant} className='list-item'>
              <Link
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
                offset={-700}
                duration={500}
              >
                Contact
              </Link>
            </motion.li>
            <motion.li
              variants={navItemsVariant}
              className='px-5 hover:cursor-pointer transition duration-300'
              onClick={() => setColorTheme(colorTheme)}
            >
              {colorTheme === 'light' ? (
                <BsToggle2On size={20} />
              ) : (
                <BsToggle2Off size={20} />
              )}
            </motion.li>
          </motion.ul>
        </div>
      </div>
      <div className='flex md:hidden sticky pt-3 pr-2 z-10 top-0 justify-end w-full'>
        <div className='bg-gray-400 rounded-full bg-opacity-5 z-10'>
          <MenuAlt3Icon
            className='h-8'
            onClick={() => {
              setActive(true);
            }}
          />
        </div>
      </div>
      <div
        className={`flex md:hidden fixed bg-black bg-opacity-100 text-white shadow-lg h-full z-10 top-0 overflow:hidden ${
          active ? 'right-0' : '-right-full'
        } transition-all ease-in-out duration-700 w-full`}
      >
        <XIcon
          className='h-8 absolute right-2 top-6'
          onClick={() => {
            setActive(false);
          }}
        />
        <div
          className='absolute top-8 left-2'
          onClick={() => setColorTheme(colorTheme)}
        >
          {colorTheme === 'light' ? (
            <BsToggle2On size={20} />
          ) : (
            <BsToggle2Off size={20} />
          )}
        </div>
        <ul className='flex flex-col justify-center items-center w-full h-4/5'>
          <motion.li className='list-item'>
            <Link
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </motion.li>
          <motion.li className='list-item'>
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </motion.li>
          <motion.li className='list-item'>
            <Link
              activeClass='active'
              to='technologies'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Technologies
            </Link>
          </motion.li>
          <motion.li className='list-item'>
            <Link
              activeClass='active'
              to='projects'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </motion.li>
          <motion.li className='list-item'>
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </motion.li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
