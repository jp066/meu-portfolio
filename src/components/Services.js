import React, { useState } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import ProjectsModal from './ProjectsModal';

const services = [
  {
    name: 'Back-end Development',
    description: 'Design e implementação de arquiteturas robustas para sistemas escaláveis, com foco em APIs RESTful e segurança.',
    icon: <BsArrowUpRight />,
    variants: fadeIn,
    stack: 'backend'
  },
  {
    name: 'Front-end Development',
    description: 'Criação de interfaces modernas, responsivas e otimizadas para performance e acessibilidade.',

    icon: <BsArrowUpRight />,
    variants: fadeIn,
    stack: 'frontend'
  },
  {
    name: 'Mobile App Development',
    description: 'Desenvolvimento de aplicativos móveis nativos e híbridos, com foco em usabilidade e integração com APIs.',
    icon: <BsArrowUpRight />,
    variants: fadeIn,
    stack: 'mobile'
  },
  {
    name: 'UI/UX Design',
    description: 'Criação de experiências de usuário intuitivas e visuais atraentes, com foco em design centrado no usuário.',

    icon: <BsArrowUpRight />,
    variants: fadeIn,
    stack: 'design'
  },
  {
    name: 'Database Management',
    description: 'Gerenciamento e otimização de bancos de dados relacionais e não relacionais para garantir performance e integridade dos dados.',

    icon: <BsArrowUpRight />,
    variants: fadeIn,
    stack: 'database'
  }
]

const Services = () => {
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [selectedStack, setSelectedStack] = useState(null);

  const openProjectsModal = (stack = null) => {
    setSelectedStack(stack);
    setIsProjectsModalOpen(true);
  };

  const closeProjectsModal = () => {
    setIsProjectsModalOpen(false);
    setSelectedStack(null);
  };

  return (
    <>
      <section className='section' id='services'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row gap-x-12'>
            {/* Left side - Text and image */}
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='flex-1 mb-12 lg:mb-0 relative'
            >
              {/* Background Image - positioned behind text */}
              <div
                className='absolute bottom-0 right-0 w-[700px] h-[500px] lg:bg-services bg-cover bg-center rounded-xl opacity-20 z-0'
                style={{
                  maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 100%)'
                }}
              ></div>

              {/* Content Layer - above background image */}
              <div className='relative z-10'>
                <h2 className='h2 text-accent mb-6'>O que eu faço.</h2>
                <h3 className='h3 max-w-[455px] mb-16'>
                  Eu sou desenvolvedor web e atualmente estudando o desenvolvimento mobile, especializo-me tanto em desenvolvimento front-end quanto back-end.
                </h3>

                <button
                  className='btn btn-sm lg:hidden'
                  onClick={scrollToServices}
                >
                  Veja meu trabalho
                </button>
              </div>
            </motion.div>

            {/* Right side - Services */}
            <motion.div
              variants={fadeIn('left', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='flex-1'
              id='services-list'
            >
              <div className='space-y-8'>
                {services.map((service, index) => {
                  const { name, description, link, stack } = service;
                  const hasProjects = ['backend', 'frontend', 'mobile', 'design', 'database'].includes(stack);

                  return (
                    <motion.div
                      key={index}
                      variants={fadeIn('left', 0.3 + index * 0.1)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{ once: false, amount: 0.3 }}
                      className='border-b border-white/20 pb-6 flex'
                    >
                      <div className='max-w-[476px] flex-1'>
                        <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-3'>
                          {name}
                        </h4>
                        <p className='font-secondary leading-tight text-base'>
                          {description}
                        </p>
                      </div>
                      <div className='flex flex-col flex-1 items-end'>
                        <button
                          onClick={hasProjects ? () => openProjectsModal(stack) : undefined}
                          className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                        >
                          <BsArrowUpRight />
                        </button>
                        {hasProjects ? (
                          <button
                            onClick={() => openProjectsModal(stack)}
                            className='text-gradient text-sm hover:underline cursor-pointer'
                          >
                            Ver Projetos
                          </button>
                        ) : (
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-gradient text-sm'
                          >
                            Saiba mais
                          </a>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Modal */}
      <ProjectsModal
        isOpen={isProjectsModalOpen}
        onClose={closeProjectsModal}
        filterStack={selectedStack}
      />
    </>
  );
};

export const scrollToServices = () => {
  const servicesSection = document.getElementById('services-list');
  if (servicesSection) {
    const rect = servicesSection.getBoundingClientRect();
    const scrollTop = window.pageYOffset + rect.top;

    window.scrollTo({
      top: scrollTop,
      left: window.pageXOffset, // mantém a posição horizontal atual
      behavior: 'smooth'
    });
  }
};

export default Services;
