import React from 'react';
import Logo from '../assets/logo.png';
import Profile from '../assets/profile.png'; // Temporarily using logo as profile image


const Header = () => {
  return (
    <header className='py-8 header-transition'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#' className='text-3xl font-bold text-white header-transition'>
            <img src={Logo} alt='Site Logo' className='w-12 h-12 inline-block header-transition' />
          </a>
          <div className='flex items-center gap-4'>
            {/* Imagem de perfil pequena com hover para ampliar */}
            <div className='relative group'>
              <div className='w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 header-transition hover:border-white/40 cursor-pointer transform hover:scale-110'>
                <img
                  src={Profile}
                  alt='Profile'
                  className='w-full h-full object-cover header-transition'
                />
              </div>

              {/* Imagem ampliada no hover */}
              <div className='absolute top-10 -right-25 md:right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform group-hover:translate-y-2'>
                <div className='relative p-2'>
                  <div className='w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white/20'>
                    <img
                      src={Profile}
                      alt='Profile - Ampliada'
                      className='w-full h-full object-cover'
                    />
                  </div>
                  {/* Seta apontando para a imagem pequena */}
                </div>
              </div>
            </div>
            <button className='btn btn-sm header-transition btn-transition'> Trabalhe comigo </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
