import React from 'react';
import Image from '../assets/services1.png';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center ' id='home'>
      <div className='container mx-auto'>
        <div className='flex-1 text-center font-secondary lg:text-left'>{/* Main content area */}
          <motion.h1
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
            JOÃO <span>PEDRO</span>
          </motion.h1>
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='mb-6 text-[36px] lg:text-[60px] font-primary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>Eu sou um</span>
            <TypeAnimation
              sequence={[
                'Desenvolvedor Backend',
                2000,
                'Desenvolvedor Frontend',
                2000,
                'Desenvolvedor Full Stack',
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />
          </motion.div>
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='mb-6 text-[36px] lg:text-[41px] font-secondary leading-[1]'>
            E crio aplicações web com foco em desempenho e experiência do usuário.
          </motion.p>
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
          >
            <button className='btn btn-lg'>
              Entre em contato
            </button>
          </motion.div>
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex gap-6 mt-8'>
            <a href='https://github.com/jp066' target='_blank' rel='noopener noreferrer'><FaGithub /></a>
            <a href='https://www.linkedin.com/in/joao-pedro-matos-dev/' target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
            <a href='https://instagram.com/jpedrooliveir4' target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
