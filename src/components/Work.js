import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import domus from '../assets/domus.png';
import xp from '../assets/xp.png';
import shop from '../assets/shop.png';


import { scrollToServices } from '../components/Services';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          {/* Coluna esquerda */}
          <div className='flex-1 flex flex-col gap-y-8 mb-10 lg:mb-0'>
            {/* Texto no topo */}
            <div>
              <h2 className='h2 leading-tight text-accent mb-4'>  MEUS ULTIMOS<br />PROJETOS</h2>
              <p className='max-w-sm mb-8 text-white/70'>
                Veja alguns dos meus trabalhos recentes dos quais estou muito orgulhoso.
              </p>
              <br />
              <button className='btn btn-sm bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full'
              onClick={scrollToServices}
              >
                Ver todos os projetos</button>
            </div>

            {/* Um projeto embaixo do botão */}
            <div className='group relative overflow-hidden border-2 border-white/20 rounded-xl aspect-[4/3]'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500 w-full h-full object-cover' src={domus} alt='project' />
              <div className='absolute -bottom-full left-4 group-hover:bottom-12 transition-all duration-500 z-50'>
                <span className='text-gradient text-sm block mb-1'>FullStack</span>
              </div>
              <div className='absolute -bottom-full left-4 group-hover:bottom-4 transition-all duration-500 z-50'>
                <span className='text-lg font-semibold text-white'>
                  Domus Fidei
                </span>
              </div>
            </div>
          </div>

          {/* Coluna direita - Dois projetos verticais */}
          <div className='flex-1 flex flex-col gap-y-6'>
            <div className='group relative overflow-hidden border-2 border-white/20 rounded-xl aspect-[16/10]'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500 w-full h-full object-cover' src={xp} alt='project' />
              <div className='absolute -bottom-full left-6 group-hover:bottom-12 transition-all duration-500 z-50'>
                <span className='text-gradient block mb-2'>FullStack</span>
              </div>
              <div className='absolute -bottom-full left-6 group-hover:bottom-4 transition-all duration-500 z-50'>
                <span className='text-xl font-semibold text-white'>
                  Xp Vida
                </span>
              </div>
            </div>

            <div className='group relative overflow-hidden border-2 border-white/20 rounded-xl aspect-[16/10]'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500 w-full h-full object-cover' src={shop} alt='project' />
              <div className='absolute -bottom-full left-6 group-hover:bottom-12 transition-all duration-500 z-50'>
                <span className='text-gradient block mb-2'>FullStack</span>
              </div>
              <div className='absolute -bottom-full left-6 group-hover:bottom-4 transition-all duration-500 z-50'>
                <span className='text-xl font-semibold text-white'>
                  ShopLink
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
