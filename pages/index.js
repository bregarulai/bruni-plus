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
