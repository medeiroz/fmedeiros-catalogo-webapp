import Head from 'next/head';
import React from 'react';
import NavBar from '../components/NavBar';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>HomePage</title>
      </Head>

      <main>
        <NavBar />
        <h1>Hello World</h1>
        <button>Click-me</button>
      </main>
    </div>
  )
}

export default Home
