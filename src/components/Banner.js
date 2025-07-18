import React from 'react';
import Image from '../assets/services1.png';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='section' id='home'>
      <div className='container mx-auto'>
        <div>
          <h1>
            JOÃO <span>PEDRO</span>
          </h1>
          <div className='mb-6 text-[36px] lg:text-[60px] font-primary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a</span>
            <TypeAnimation
              sequence={[
                'Developer Backend',
                2000,
                'Developer Frontend',
                2000,
                'Full Stack Developer',
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />
          </div>
          <p className='mb-6 text-[36px] lg:text-[41px] font-secondary leading-[1]'>
            I create web applications with a focus on performance and user
            experience.
          </p>
          <div>
            <button>
              
            </button>
          </div>
        </div>
        <div>
          <img src={Image} alt='Services' />
        </div>
      </div>

    </section>
  );
};

export default Banner;
