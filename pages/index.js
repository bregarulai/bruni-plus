import axios from 'axios';
import { getSession, useSession } from 'next-auth/client';
import Head from 'next/head';

import {
  Brands,
  Header,
  Hero,
  MoviesCollection,
  ShowsCollection,
  Slider,
} from '../components';

export default function Home({
  popularMovies,
  popularShows,
  topRatedMovies,
  topRatedShows,
}) {
  const [session] = useSession();

  return (
    <>
      <Head>
        <title>Bruni Plus</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

      {!session ? (
        <Hero />
      ) : (
        <main className='relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]'>
          <Slider />
          <Brands />

          <MoviesCollection title='Popular Movies' results={popularMovies} />
          <ShowsCollection title='Popular Shows' results={popularShows} />
          <MoviesCollection title='Top Rated Movies' results={topRatedMovies} />
          <ShowsCollection title='Top Rated Shows' results={topRatedShows} />
        </main>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const [
    popularMoviesRes,
    popularShowsRes,
    topRatedMoviesRes,
    topRatedShowsRes,
  ] = await Promise.all([
    axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    axios.get(
      `
https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    axios.get(
      `
https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
  ]);

  const [popularMovies, popularShows, topRatedMovies, topRatedShows] =
    await Promise.all([
      popularMoviesRes.data.results,
      popularShowsRes.data.results,
      topRatedMoviesRes.data.results,
      topRatedShowsRes.data.results,
    ]);

  return {
    props: {
      session,
      popularMovies,
      popularShows,
      topRatedMovies,
      topRatedShows,
    },
  };
}
