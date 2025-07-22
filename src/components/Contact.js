import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import service from '../assets/logo.png';
import { BsInstagram, BsMailbox, BsMailbox2, BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  return (
    <section className='py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 min-h-[100vh] sm:min-h-[90vh] lg:min-h-screen' id='contact'>
      <div className='container mx-auto px-4 sm:px-6 md:px-8 lg:px-12'>
        <div className='flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 h-full items-center justify-center'>
          <div className='flex-1 mb-6 sm:mb-8 lg:mb-0 text-center lg:text-left'>
            <div className='px-2 sm:px-4 lg:px-0'>
              <h4 className='text-lg sm:text-xl uppercase text-accent font-medium mb-3 sm:mb-4 tracking-wider'>
                Entre em contato
              </h4>
              <h2 className='text-[28px] sm:text-[36px] md:text-[45px] lg:text-[70px] xl:text-[90px] leading-tight font-bold mb-6 sm:mb-8 lg:mb-12'>
                Vamos conversar sobre o seu <br className='hidden sm:block' />projeto
              </h2>
            </div>
          </div>
          <form className='flex-1 border rounded-2xl bg-gray-800 p-4 sm:p-6 md:p-8 flex flex-col gap-y-4 sm:gap-y-6 pb-12 sm:pb-16 md:pb-24 items-start relative mx-2 sm:mx-4 lg:mx-0 w-full max-w-lg lg:max-w-none'>
            {/* Aviso sobre funcionalidade */}
            <div className='absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 z-10'>
              <div className='bg-accent/20 border border-accent/30 rounded-md sm:rounded-lg px-2 sm:px-3 py-1 sm:py-2'>
                <p className='text-accent text-[10px] sm:text-xs font-medium'>
                  ⚠️ Em breve
                </p>
              </div>
            </div>

            <input
              className='bg-transparent border-b py-2 sm:py-3 outline-none w-full placeholder:text-white/60 focus:border-accent transition-all mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base'
              type='text'
              placeholder='Seu nome'
              disabled
            />
            <input
              className='bg-transparent border-b py-2 sm:py-3 outline-none w-full placeholder:text-white/60 focus:border-accent transition-all mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base'
              type='email'
              placeholder='Seu email'
              disabled
            />
            <textarea
              className='bg-transparent border-b py-6 sm:py-8 md:py-12 outline-none w-full placeholder:text-white/60 focus:border-accent transition-all mb-3 sm:mb-4 md:mb-6 resize-none text-sm sm:text-base'
              placeholder='Sua mensagem'
              disabled
            ></textarea>
            <button
              className='btn btn-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full opacity-50 cursor-not-allowed text-sm sm:text-base'
              disabled
            >
              Enviar mensagem
            </button>

            {/* Mensagem adicional */}
            <div className='mt-3 sm:mt-4 p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10 w-full flex flex-col items-center'>
              <p className='text-white/70 text-[10px] sm:text-xs md:text-sm text-center mb-2 sm:mb-3'>
                📧 Entre em contato através das redes ou email direto.
              </p>
              <div className='flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4'>
                <a
                  href='https://instagram.co/jpedrooliveir4'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-1 sm:gap-2 text-white/70 hover:text-accent transition-colors duration-300 text-[10px] sm:text-xs md:text-sm'
                >
                  <BsInstagram size={14} className='sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]' />
                  <span>Instagram</span>
                </a>
                <a
                  href='https://wa.me/5586995176012'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-1 sm:gap-2 text-white/70 hover:text-accent transition-colors duration-300 text-[10px] sm:text-xs md:text-sm'
                >
                  <BsWhatsapp size={14} className='sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]' />
                  <span>WhatsApp</span>
                </a>
                <a
                  href='https://wa.me/5586995176012'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-1 sm:gap-2 text-white/70 hover:text-accent transition-colors duration-300 text-[10px] sm:text-xs md:text-sm'
                >
                  <BsMailbox size={14} className='sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]' />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
