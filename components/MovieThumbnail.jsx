import React from 'react';

const MovieThumbnail = ({ result }) => {
  return (
    <article>
      <span>{result.title}</span>
    </article>
  );
};

export default MovieThumbnail;
