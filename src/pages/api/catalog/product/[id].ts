// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

const catalog = (request: NextApiRequest, response: NextApiResponse) => {

  const products = [
    {id: '4a5d4a6d', name: 'John Doe' },
    {id: 'a98s7d87', name: 'Dog Duuuuu' },
  ];

  const { id } = request.query;

  const product = products.find(product => product.id == id )

  response.status(200).json({
    data: product
  })
}

export default catalog;
