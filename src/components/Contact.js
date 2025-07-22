import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import service from '../assets/logo.png';
import { BsInstagram, BsMailbox, BsMailbox2, BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex-1'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wider'>
                Entre em contato
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Vamos conversar sobre o seu <br />projeto
              </h2>
            </div>
          </div>
          <form className='flex-1 border rounded-2xl bg-gray-800 p-8 flex flex-col gap-y-6 pb-24 p-6 items-start relative'>
            {/* Aviso sobre funcionalidade */}
            <div className='absolute top-4 right-4'>
              <div className='bg-accent/20 border border-accent/30 rounded-lg px-3 py-2'>
                <p className='text-accent text-xs font-medium'>
                  ⚠️ Funcionalidade será adicionada em breve
                </p>
              </div>
            </div>

            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all mb-6'
              type='text'
              placeholder='Seu nome'
              disabled
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all mb-6'
              type='email'
              placeholder='Seu email'
              disabled
            />
            <textarea
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all mb-6 resize-none'
              placeholder='Sua mensagem'
              disabled
            ></textarea>
            <button
              className='btn btn-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full opacity-50 cursor-not-allowed'
              disabled
            >
              Enviar mensagem
            </button>

            {/* Mensagem adicional */}
            <div className='mt-4 p-4 bg-white/5 rounded-lg border border-white/10 w-full flex flex-col items-center'>
              <p className='text-white/70 text-sm text-center mb-3'>
                📧 Por enquanto, entre em contato através das redes profissionais (ou sociais) ou email direto.
              </p>
              <div className='flex justify-center gap-4'>
                <a
                  href='https://instagram.co/jpedrooliveir4'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 text-white/70 hover:text-accent transition-colors duration-300'
                >
                  <BsInstagram size={18} />
                  <span className='text-sm'>Instagram</span>
                </a>
                <a
                  href='https://wa.me/5586995176012'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 text-white/70 hover:text-accent transition-colors duration-300'
                >
                  <BsWhatsapp size={18} />
                  <span className='text-sm'>WhatsApp</span>
                </a>
                <a
                  href='https://wa.me/5586995176012'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 text-white/70 hover:text-accent transition-colors duration-300'
                >
                  <BsMailbox size={18} />
                  <span className='text-sm'>Email</span>
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
