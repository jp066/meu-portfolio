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
        <h2 className='h2 text-accent mb-4'>
          Sobre mim.
        </h2>
        <h3 className='h3 mb-2'>
          Sou um desenvolvedor full-stack com paixão por criar aplicações web dinâmicas e responsivas. Com experiência em tecnologias tanto de front-end quanto de back-end, busco oferecer experiências de usuário perfeitas e funcionalidades robustas.
        </h3>
        <p className='mb-1'>
          Gosto de trabalhar com tecnologias e frameworks modernos, e estou sempre ansioso para aprender novas habilidades e aprimorar meu ofício. Vamos construir algo incrível juntos!
        </p>
        {/* Stats */}
        <div className='flex gap-x-6 lg:gap-x-10 mt-1'>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {inView ? <CountUp start={0} end={1} duration={2} /> : null}
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Anos de experiência
            </div>
          </div>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {inView ? <CountUp start={0} end={4} duration={2} /> : null}
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Projetos
            </div>
          </div>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {inView ? <CountUp start={0} end={10} duration={2} /> : null}
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Tecnologias dominadas
            </div>
          </div>
        </div>

        {/* Skills */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='mt-8'
        >
          <h4 className='h4 mb-4'>Habilidades Técnicas</h4>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            <div className='bg-white/10 rounded-lg p-3 backdrop-blur-sm'>
              <span className='text-sm font-medium'>Python</span>
            </div>
            <div className='bg-white/10 rounded-lg p-3 backdrop-blur-sm'>
              <span className='text-sm font-medium'>Django</span>
            </div>
            <div className='bg-white/10 rounded-lg p-3 backdrop-blur-sm'>
              <span className='text-sm font-medium'>Django Rest framework</span>
            </div>
            <div className='bg-white/10 rounded-lg p-3 backdrop-blur-sm'>
              <span className='text-sm font-medium'>Fast API</span>
            </div>
            <div className='bg-white/10 rounded-lg p-3 backdrop-blur-sm'>
              <span className='text-sm font-medium'>JavaScript</span>
            </div>
            <div className='bg-white/10 rounded-lg p-3 backdrop-blur-sm'>
              <span className='text-sm font-medium'>TypeScript</span>
            </div>
            <div className='bg-white/10 rounded-lg p-3 backdrop-blur-sm'>
              <span className='text-sm font-medium'>Nest js</span>
            </div>
            <div className='bg-white/10 rounded-lg p-3 backdrop-blur-sm'>
              <span className='text-sm font-medium'>React.js</span>
            </div>
            <div className='bg-white/10 rounded-lg p-3 backdrop-blur-sm'>
              <span className='text-sm font-medium'>Node.js</span>
            </div>
            <div className='bg-white/10 rounded-lg p-3 backdrop-blur-sm'>
              <span className='text-sm font-medium'>SQL Server</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;