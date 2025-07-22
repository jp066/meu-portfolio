import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../variants';
import Projects from './Projects';
import { IoClose } from 'react-icons/io5';

const ProjectsModal = ({ isOpen, onClose, filterStack = null }) => {
    if (!isOpen) return null;

    const getModalTitle = () => {
        switch (filterStack) {
            case 'backend': return 'Projetos Backend';
            case 'frontend': return 'Projetos Frontend';
            case 'mobile': return 'Projetos Mobile';
            case 'design': return 'Projetos Design';
            case 'database': return 'Projetos Database';
            default: return 'Meus Projetos';
        }
    }; return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='fixed inset-0 z-50 flex items-center justify-center'
                onClick={onClose}
            >
                {/* Backdrop */}
                <div className='absolute inset-0 bg-black/80 backdrop-blur-sm' />

                {/* Modal Content */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 50 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className='relative z-10 bg-black/40 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-6xl max-h-[90vh] overflow-y-auto mx-4 w-full'
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className='flex justify-between items-center mb-8'>
                        <motion.h2
                            variants={fadeIn('right', 0.2)}
                            initial='hidden'
                            animate='show'
                            className='h2 text-accent'
                        >
                            {getModalTitle()}
                        </motion.h2>
                        <button
                            onClick={onClose}
                            className='text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full'
                        >
                            <IoClose size={24} />
                        </button>
                    </div>

                    {/* Description */}
                    <motion.p
                        variants={fadeIn('up', 0.3)}
                        initial='hidden'
                        animate='show'
                        className='text-white/80 mb-8 text-lg leading-relaxed'
                    >
                        Aqui estão alguns dos projetos que desenvolvi, demonstrando minhas habilidades em diferentes tecnologias e áreas de desenvolvimento.
                    </motion.p>

                    {/* Projects Grid */}
                    <motion.div
                        variants={fadeIn('up', 0.4)}
                        initial='hidden'
                        animate='show'
                    >
                        <Projects filterStack={filterStack} />
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectsModal;
