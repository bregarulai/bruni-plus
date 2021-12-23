import { getSession, useSession } from 'next-auth/client';
import Head from 'next/head';

import { Header, Hero, Slider } from '../components';

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
        <main>
          <Slider />
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
