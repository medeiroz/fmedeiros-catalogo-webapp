import Head from 'next/head';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store';

import { asyncLogin } from '../../store/Auth.store'

const Home: React.FC = () => {

  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth)

  return (
    <div>
      <Head>
        <title>HomePage</title>
      </Head>

      <main>
        <h1>Hello World</h1>
        <br/>
        <h1>Logeed: {auth?.user?.name}</h1>
        <br/>
        <button onClick={() => dispatch(asyncLogin({email: 'smedeiros', password: '123456'}))}>
          Entrar
        </button>
      </main>
    </div>
  )
}

export default Home
