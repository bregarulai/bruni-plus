import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className='sticky bg-[#040714] top-0 z-[1000] h-[4.5rem] flex items-center px-10 md:px-12'>
      {/* <div>Bruni+</div> */}
      <Image src='/images/logo.svg' width={80} height={80} />
    </header>
  );
};

export default Header;
