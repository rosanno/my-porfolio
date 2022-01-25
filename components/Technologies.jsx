import React from 'react';
import { InView } from 'react-intersection-observer';
import Grid from './Grid';

const Technologies = () => {
  return (
    <InView triggerOnce threshold={0.25}>
      {({ ref, inView }) => (
        <section
          className='flex flex-col justify-center items-center mt-20 text-center'
          id='technologies'
        >
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl md:text-5xl font-bold mb-5'>
              Technologies & Tools
            </h1>
            <span className='text-sm text-gray-500 px-10'>
              This are the technologies and tools I used to build my projects
            </span>
          </div>
          <Grid ref={ref} inView={inView} />
        </section>
      )}
    </InView>
  );
};

export default Technologies;
