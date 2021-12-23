import Image from 'next/image';
import React from 'react';

const Brands = () => {
  return (
    <section className='flex flex-col md:flex-row items-center justify-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto'>
      <div className='brand group'>
        <Image src='/images/disnep.png' layout='fill' objectFit='cover' />
        <video
          autoPlay
          loop
          playsInline
          className='hidden group-hover:inline rounded-lg object-cover transform hover:scale-105 transition duration-300'
        >
          <source src='/videos/disney.mp4' type='video/mp4' />
        </video>
      </div>
    </section>
  );
};

export default Brands;
