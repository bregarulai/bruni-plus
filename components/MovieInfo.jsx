import React from 'react';

const MovieInfo = ({ result }) => {
  return (
    <section className='absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>
        {result.title || result.original_name}
      </h1>
      <div className='flex items-center space-x-3 md:space-x-5'>
        <button className='text-sm md:text-base bg-[#f9f9f9] text-black flex items-center justify-center px-6 py-2.5 rounded hover:bg-[#c6c6c6]'>
          <img
            className='h-6 md:h-8'
            src='/images/play-icon-black.svg'
            alt='play button'
          />
          <span className='uppercase font-medium tracking-wide'>Play</span>
        </button>
        <button className='text-sm md:text-base'>
          <span className='uppercase font-medium tracking-wide'>Trailer</span>
        </button>
      </div>
    </section>
  );
};

export default MovieInfo;
