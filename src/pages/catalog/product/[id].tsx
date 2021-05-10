import Head from 'next/head';
import React from 'react'
import Link from 'next/link'
import { IProduct } from '../../../entities/IProduct';
import { useFetch } from '../../../hooks/useFetch';
import { CatalogRepository } from '../../../repositories/CatalogRepository';
import { useRouter } from 'next/router';

const Catalog: React.FC = () => {
  const router = useRouter();

  const { id } = router.query;
  const { data, mutate } = useFetch<IProduct>(new CatalogRepository, 'getById', id);

  if (!data) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <Head>
        <title>Catalog Produtc</title>
      </Head>

      <main>
        <h1>Catalog Produtc</h1>
        <br/>
        { data.name }
      </main>
    </div>
  )
}

export default Catalog
