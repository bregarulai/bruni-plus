import React from 'react';
import { CollectionThumbnail } from '../components';

const MoviesCollection = ({ title, results }) => {
  return (
    <section className='relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto'>
      <h2 className='font-semibold'>{title}</h2>
      {results.map((result) => (
        <CollectionThumbnail key={result.id} result={result} />
      ))}
    </section>
  );
};

export default MoviesCollection;
