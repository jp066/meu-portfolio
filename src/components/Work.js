import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div>
          <div>
            <div>
              <h2 className='h2 leading-tight text-accent'>Meus ultimos trabalhos.</h2>
              <p className='max-w-sm mb-16'>
                Here is some of my recent work that I am really proud of.
              </p>
              <button className='btn btn-sm'>Meus projetos</button>
            </div>
            <div>image</div> {/* parei aqui */}
          </div>
          <div>2</div>
        </div>
      </div>
    </section>
  );
};

export default Work;
