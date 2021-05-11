// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { setAuthCookies, verifyIdToken } from 'next-firebase-auth'
import initAuth from '../../../helpers/initAuth'

initAuth();

const login = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const token = request.headers.authorization;

    const a = await verifyIdToken(token);
    console.log('a', a);
    await setAuthCookies(request, response);
  } catch (e) {
    return response.status(500).json({ error: e.message })
  }
  return response.status(200).json({ success: true })
}

export default login;
