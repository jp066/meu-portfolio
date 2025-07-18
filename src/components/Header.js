import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className='py-8 header-transition'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#' className='text-3xl font-bold text-white header-transition'>
            <img src={Logo} alt='Site Logo' className='w-12 h-12 inline-block header-transition' />
          </a>
          <button className='btn btn-sm header-transition btn-transition'> Trabalhe comigo </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
