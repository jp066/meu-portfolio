import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import service from '../assets/logo.png';

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
              Vamos conversar sobre o seu <br/>projeto
            </h2>
            </div>
          </div>
          <form className='flex-1 border rounded-2xl bg-gray-800 p-8 flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all mb-6' 
              type='text' 
              placeholder='Seu nome' 
            />
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all mb-6' 
              type='email' 
              placeholder='Seu email' 
            />
            <textarea 
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all mb-6 resize-none' 
              placeholder='Sua mensagem'
            ></textarea>
            <button className='btn btn-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full'>
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
