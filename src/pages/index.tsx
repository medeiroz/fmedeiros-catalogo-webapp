import Head from 'next/head';
import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { connect } from 'react-redux'

const Home: React.FC = () => {

  const [count, setCount] = useState<number>(0);

  const handlerIncrement = () => {
    setCount(count + 1);
  }

  const handlerDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <Head>
        <title>HomePage</title>
      </Head>

      <main>
        <NavBar />
        <h1>Hello World</h1>
        <br/>
        <h2>{count}</h2>
        <button onClick={handlerIncrement}>Adicionar</button>
        <button onClick={handlerDecrement}>Remover</button>
      </main>
    </div>
  )
}

export default connect()(Home)
