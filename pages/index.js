import { getSession, useSession } from 'next-auth/client';
import Head from 'next/head';

import { Brands, Header, Hero, Slider } from '../components';

export default function Home() {
  const [session] = useSession();
  return (
    <div className=''>
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
        </main>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
