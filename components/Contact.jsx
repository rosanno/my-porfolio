import React from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import Image from 'next/image';
import Map from '../img/map.png';

const formVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    console.log(e.target);

    emailjs
      .sendForm(
        'service_z8tv0va',
        'template_dkjl10n',
        e.target,
        'user_vXOakyKjg9brpwXsRcMft'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <InView triggerOnce threshold={0.25}>
      {({ ref, inView }) => (
        <section
          className='section light:bg-gray-200 pb-10 mt-5 md:mt-48'
          id='contact'
          ref={ref}
        >
          <div className='text-center'>
            <h1 className='text-3xl md:text-5xl font-bold'>Contacts</h1>
            <div className='flex flex-col md:flex-row justify-center mt-20'>
              <form onSubmit={sendEmail} className='flex-1 shrink-0'>
                <motion.div
                  variants={formVariant}
                  initial='hidden'
                  animate={`${inView && 'visible'}`}
                >
                  <div className='flex flex-col'>
                    <input
                      type='text'
                      name='name'
                      placeholder='name'
                      className='inputs'
                    />
                    <input
                      type='email'
                      name='email'
                      placeholder='email add...'
                      className='inputs mt-2'
                    />
                    <textarea
                      rows='5'
                      name='messages'
                      className='inputs mt-2'
                    ></textarea>
                    <div className='flex flex-col justify-end md:h-28 mt-5 md:mt-0 text-white items-end text-center'>
                      <button
                        type='submit'
                        className='bg-rose-500 hover:bg-rose-700 cursor-pointer transition ease-in-out duration-500 rounded px-5 py-2 md:mr-10'
                      >
                        Send messages!
                      </button>
                    </div>
                  </div>
                </motion.div>
              </form>
              <motion.div
                className='flex-2 mt-5 md:mt-0'
                variants={formVariant}
                initial='hidden'
                animate={`${inView && 'visible'}`}
              >
                <Image src={Map} alt='map' className='rounded' />
              </motion.div>
            </div>
          </div>
        </section>
      )}
    </InView>
  );
};

export default Contact;
