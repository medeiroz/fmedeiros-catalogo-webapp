import Head from 'next/head';
import React from 'react'
import NavBar from '../components/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store';

import { increment, decrement } from '../store/Stock.store'

const Home: React.FC = () => {

  const dispatch = useDispatch();
  const stock = useSelector((state: RootState) => state.stock)

  return (
    <div>
      <Head>
        <title>HomePage</title>
      </Head>

      <main>
        <NavBar />
        <h1>Hello World</h1>
        <br/>
        <h2>{stock.counter}</h2>
        <button onClick={() => dispatch(increment())}>Adicionar</button>
        <button onClick={() => dispatch(decrement())}>Remover</button>
      </main>
    </div>
  )
}

export default Home
