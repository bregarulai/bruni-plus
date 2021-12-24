import React from 'react';

const MovieInfo = ({ result }) => {
  return (
    <section className='absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4'>
      <h1>{result.title || result.original_name}</h1>
    </section>
  );
};

export default MovieInfo;
