import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useInView } from 'react-intersection-observer'
  ;

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <h2 className='h2 text-accent mb-6'>
          About me.
        </h2>
        <h3 className='h3 mb-4'>
          I am a full-stack developer with a passion for creating dynamic and responsive web applications. With expertise in both front-end and back-end technologies, I strive to deliver seamless user experiences and robust functionality.
        </h3>
        <p className='mb-4'>
          I enjoy working with modern technologies and frameworks, and I am always eager to learn new skills and improve my craft. Let's build something amazing together!
        </p>
        {/* Stats */}
        <div className='flex gap-x-6 lg:gap-x-10 mt-12'>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {inView ? <CountUp start={0} end={3} duration={2} /> : null}
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Years of Experience
            </div>
          </div>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {inView ? <CountUp start={0} end={4} duration={2} /> : null}
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Projects
            </div>
          </div>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {inView ? <CountUp start={0} end={3} duration={2} /> : null}
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Habilities
            </div>
          </div>
        </div>
        <div>
          <button>

          </button>
        </div>
      </div>
    </section>
  );
};

export default About;