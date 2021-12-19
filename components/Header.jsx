import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { signIn } from 'next-auth/client';

import {
  HomeIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
} from '@heroicons/react/solid';

const Header = () => {
  return (
    <header className='sticky top-0 z-[1000] h-[4.5rem] flex items-center px-10 md:px-12'>
      {/* <div>Bruni+</div> */}
      <Image
        src='/images/logo.svg'
        width={80}
        height={80}
        className='cursor-pointer'
      />
      <div className='hidden ml-10 md:flex items-center space-x-6'>
        <Link href='/'>
          <div className='header-link group'>
            <HomeIcon className='h-4' />
            <span className='span'>Home</span>
          </div>
        </Link>
        <Link href='/'>
          <div className='header-link group'>
            <SearchIcon className='h-4' />
            <span className='span'>Search</span>
          </div>
        </Link>
        <Link href='/'>
          <div className='header-link group'>
            <PlusIcon className='h-4' />
            <span className='span'>Watchlist</span>
          </div>
        </Link>
        <Link href='/'>
          <div className='header-link group'>
            <StarIcon className='h-4' />
            <span className='span'>Originals</span>
          </div>
        </Link>
        <Link href='/'>
          <div className='header-link group'>
            <img src='/images/movie-icon.svg' alt='link icon' className='h-5' />
            <span className='span'>Movies</span>
          </div>
        </Link>
        <Link href='/'>
          <div className='header-link group'>
            <img
              src='/images/series-icon.svg'
              alt='link icon'
              className='h-5'
            />
            <span className='span'>Series</span>
          </div>
        </Link>
      </div>
      <button
        className='ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200'
        onClick={signIn}
      >
        Login
      </button>
    </header>
  );
};

export default Header;
