// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

const catalog = (request: NextApiRequest, response: NextApiResponse) => {
  response.status(200).json({
    data: [
      {id: '4a5d4a6d', name: 'John Doe' },
      {id: 'a98s7d87', name: 'Dog Duu.......' },
    ]
  })
}

export default catalog;
