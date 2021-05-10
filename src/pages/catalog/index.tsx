import Head from 'next/head';
import React from 'react'
import Link from 'next/link'
import { IProduct } from '../../entities/IProduct';
import { useFetch } from '../../hooks/useFetch';
import { CatalogRepository } from '../../repositories/CatalogRepository';

const Catalog: React.FC = () => {

  const { data, mutate } = useFetch<IProduct[]>(new CatalogRepository, 'list');

  if (!data) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <Head>
        <title>Catalog</title>
      </Head>

      <main>
        <h1>Catalog Index</h1>
        <br/>
        {data.map(product => (
        <li key={product.id}>
          <Link href={`/catalog/product/${product.id}`} >
            <a>{product.name}</a>
          </Link>
        </li>
      ))}
      </main>
    </div>
  )
}

export default Catalog
