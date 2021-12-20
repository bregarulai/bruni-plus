import { getSession } from 'next-auth/client';
import Head from 'next/head';

import { Header } from '../components';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Bruni Plus</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className=''></main>
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
