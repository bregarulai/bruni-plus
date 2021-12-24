import axios from 'axios';
import React from 'react';

const MovieDetail = ({ result }) => {
  console.log({ result });
  return <div>Movie Detail</div>;
};

export default MovieDetail;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`
  );
  const result = await res.data;

  return {
    props: {
      result,
    },
  };
}
