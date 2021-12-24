import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const MovieThumbnail = ({ result }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  const router = useRouter();
  return (
    <article>
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        width={330}
        height={210}
        objectFit='cover'
        className='rounded-lg'
        alt={`${result.title} poster`}
      />
    </article>
  );
};

export default MovieThumbnail;
