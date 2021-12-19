import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { HomeIcon } from '@heroicons/react/solid';

const Header = () => {
  return (
    <header className='sticky bg-[#040714] top-0 z-[1000] h-[4.5rem] flex items-center px-10 md:px-12'>
      {/* <div>Bruni+</div> */}
      <Image
        src='/images/logo.svg'
        width={80}
        height={80}
        className='cursor-pointer'
      />
      <div>
        <Link href='/'>
          <span className='header-link group'>
            <HomeIcon className='h-4' />
            <span className='span'>Home</span>
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
