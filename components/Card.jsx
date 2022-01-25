import React from 'react';
import Image from 'next/image';
import { AiFillGithub } from 'react-icons/ai';
import { RiShareBoxLine } from 'react-icons/ri';

const Card = ({ title, img, language, github, url }) => {
  return (
    <div className='max-w-md md:max-w-sm relative bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden md:max-w-1xl hover:scale-110 transition ease-in-out duration-500 cursor-pointer'>
      <div className='flex flex-col'>
        <div>
          <Image
            src={img}
            alt='rolex website'
            className='h-48 w-full object-cover md:h-full md:w-48'
          />
        </div>
        <div className='px-6 py-10'>
          <div className='uppercase text-xs md:text-sm font-semibold'>
            {title}
          </div>
          <div className='text-xs mt-1 uppercase'>
            <p className='truncate'>{language}</p>
          </div>
          <a
            href={github}
            target='_blank'
            rel='noreferrer'
            className='absolute right-4 bottom-3'
          >
            <AiFillGithub size={25} />
          </a>
          {url !== '' ? (
            <a
              href={url}
              target='_blank'
              rel='noreferrer'
              className='absolute left-4 bottom-3'
            >
              <RiShareBoxLine size={20} />
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
