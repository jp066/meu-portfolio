import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
const projects = [
    {
        id: 1,
        title: 'Domus Fidei',
        description: 'Domus Dei é um aplicativo mobile desenvolvido para fortalecer e organizar a vida paroquial. Ele reúne funcionalidades para párocos, catequistas, coordenadores e fiéis em um único espaço digital, promovendo comunicação eficiente, organização litúrgica e espiritualidade acessível.',
        technologies: ['Django', 'Flask', 'SQL Server'],
        link: '',
        github: 'https://github.com/jp066/Domus_Fidei-Backend',
        stack: 'backend'
    },
    {
        id: 2,
        title: 'SOS central',
        description: 'SOS Central é um aplicativo desenvolvido no periodo de enchentes no RS. Seu uso é para fornecer assistência imediata em situações de emergência. Ele permite que os usuários enviem alertas de socorro e compartilhem sua localização com contatos de confiança e serviços de emergência.',
        technologies: ['DART & FLUTTER', 'Firebase'],
        link: '#',
        github: 'https://github.com/jp066/SOS_Central',
        stack: 'mobile'
    },
    {
        id: 3,
        title: 'API RESTful terço',
        description: 'API robusta para microserviços com autenticação JWT e documentação completa.',
        technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
        link: '#',
        github: '#',
        stack: 'backend'
    },
    {
        id: 4,
        title: 'ShopLink',
        description: 'Uma API para criar, atualizar e compartilhar listas de compras entre usuários. Ideal para casais, colegas de casa ou equipes organizarem compras do dia a dia.',
        technologies: ['JavaScript', 'TypeScript', 'NestJS', 'PostgreSQL + TypeORM'],
        link: '',
        github: '',
        stack: 'backend'
    },
    {
        id: 5,
        title: 'Portfolio',
        description: 'Portfolio pessoal',
        technologies: ['React.js', 'Tailwind CSS', 'HTML5'],
        link: '#',
        github: 'https://github.com/jp066/meu-portfolio',
        stack: 'frontend'
    },
    {
        id: 6,
        title: 'Design Domus Fidei',
        description: 'Design system completo com componentes reutilizáveis e guidelines de interface para aplicações mobile.',
        technologies: ['Figma'],
        link: 'https://www.figma.com/design/MYLSnPpIAfFonwKLZKE2RZ/Domus-dei?m=auto&t=zeMyrKEmRzDme9fT-6',
        github: '',
        stack: 'design'
    },
    {
        id: 9,
        title: 'XP vida',
        description: 'O XP Vida é um sistema de gamificação da rotina, onde os usuários acumulam XP ao completar tarefas, avançam de nível e desbloqueiam recompensas.',
        technologies: ['Node.js', 'NestJs', 'PostgreSQL', 'TypeORM'],
        link: '#',
        github: '#',
        stack: 'backend'
    }
];

const Projects = ({ filterStack = null }) => {
    const filteredProjects = filterStack
        ? projects.filter(project => project.stack === filterStack)
        : projects;

    // Se não houver projetos para exibir
    if (filteredProjects.length === 0) {
        return (
            <motion.div
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='flex flex-col items-center justify-center py-16 text-center'
            >
                <div className='mb-6'>
                    <div className='w-24 h-24 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center'>
                        <svg
                            className='w-12 h-12 text-white/30'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={1.5}
                                d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                            />
                        </svg>
                    </div>
                </div>
                <h3 className='text-xl font-semibold text-white/80 mb-2'>
                    Nenhum projeto encontrado
                </h3>
                <p className='text-white/60 max-w-md'>
                    {filterStack
                        ? `Ainda não há projetos disponíveis para a categoria ${filterStack}.`
                        : 'Não há projetos disponíveis no momento.'}
                </p>
                <p className='text-white/40 text-sm mt-2'>
                    Novos projetos serão adicionados em breve!
                </p>
            </motion.div>
        );
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {filteredProjects.map((project, index) => (
                <motion.div
                    key={project.id}
                    variants={fadeIn('up', 0.2 + index * 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className='bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-black/30 transition-all duration-300'
                >
                    <div className='mb-4'>
                        <h3 className='text-xl font-semibold text-white mb-2'>{project.title}</h3>
                        <p className='text-white/70 text-sm leading-relaxed mb-4'>{project.description}</p>

                        <div className='flex flex-wrap gap-2 mb-4'>
                            {project.technologies.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className='px-3 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30'
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className='flex gap-4'>
                            {project.link && project.link !== '#' ? (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='text-accent hover:text-white transition-colors text-sm'
                                >
                                    Ver Projeto
                                </a>
                            ) : (
                                <span className='text-white/40 text-sm'>
                                    Sem link disponível
                                </span>
                            )}

                            {project.github && project.github !== '#' ? (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='text-white/70 hover:text-white transition-colors text-sm'
                                >
                                    GitHub
                                </a>
                            ) : (
                                <span className='text-white/40 text-sm'>
                                    Sem link disponível
                                </span>
                            )}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Projects;
