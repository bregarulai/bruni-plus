import axios from 'axios';
import { getSession } from 'next-auth/client';
import Head from 'next/head';
import React from 'react';
import { Header } from '../../components';

const MovieDetail = ({ result }) => {
  return (
    <>
      <Head>
        <title>{result.title || result.original_name}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
    </>
  );
};

export default MovieDetail;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { id } = context.query;
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`
  );
  const result = await res.data;

  return {
    props: {
      result,
      session,
    },
  };
}
