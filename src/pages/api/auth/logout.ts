// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { unsetAuthCookies } from 'next-firebase-auth'
import initAuth from '../../../helpers/initAuth'

initAuth();

const login = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    await unsetAuthCookies(request, response)
  } catch (e) {
    return response.status(500).json({ error: 'Unexpected error.' })
  }
  return response.status(200).json({ success: true })
}

export default login;
