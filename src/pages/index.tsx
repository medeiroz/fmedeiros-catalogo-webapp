import Head from 'next/head';
import React from 'react'
import NavBar from '../components/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store';

import { asyncIncrement, increment, decrement, asyncDecrement } from '../store/Stock.store'

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
        <button onClick={() => dispatch(increment(1))}>Adicionar</button>
        <button onClick={() => dispatch(decrement(1))}>Remover</button>
        <br/>
        <button onClick={() => dispatch(asyncIncrement(1))}>async Adicionar</button>
        <button onClick={() => dispatch(asyncDecrement(1))}>async Remover</button>
      </main>
    </div>
  )
}

export default Home
