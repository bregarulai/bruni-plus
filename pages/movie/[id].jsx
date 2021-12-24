import axios from 'axios';
import { getSession, useSession } from 'next-auth/client';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import { Header, Hero } from '../../components';

const MovieDetail = ({ result }) => {
  const [session] = useSession();
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{result.title || result.original_name}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {!session ? (
        <Hero />
      ) : (
        <main className='relative z-50'>
          <div className='relative min-h-[calc(100vh-72px)] bg-black mix-blend-overlay'>
            <Image
              src={
                `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                `${BASE_URL}${result.poster_path}`
              }
              alt={result.title}
              layout='fill'
              objectFit='cover'
              priority
              className='opacity-60'
            />
          </div>
        </main>
      )}
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
