import React from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import Card from '../components/Card';
import { ProjectsData } from '../data/ProjectsData';

const cardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.5,
    },
  },
};

const projectVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

const Projects = () => {
  return (
    <InView triggerOnce threshold={0.25}>
      {({ ref, inView }) => (
        <section
          className='section bg-white dark:bg-gray-900 mt-20 md:my-48 py-28'
          id='projects'
        >
          <div className='flex flex-col justify-center items-center text-center'>
            <h1 className='font-bold text-3xl md:text-5xl mb-28'>Projects</h1>
            <motion.div
              ref={ref}
              variants={cardVariants}
              initial='hidden'
              animate={`${inView && 'visible'}`}
              className='grid grid-rows-1 lg:grid-cols-4 md:grid-cols-3 gap-10'
            >
              {ProjectsData.slice(0, 8).map((project, i) => (
                <motion.div key={i} variants={projectVariants}>
                  <Card
                    title={project.title}
                    img={project.img}
                    language={project.language}
                    github={project.github}
                    url={project.url}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
          {ProjectsData.length > 8 ? (
            <div className='mt-24 cursor-pointer text-blue-400 text-2xl underline'>
              See all
            </div>
          ) : (
            <></>
          )}
        </section>
      )}
    </InView>
  );
};

export default Projects;
