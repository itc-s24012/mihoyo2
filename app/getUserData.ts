// pages/api/getUserData.ts


import { NextApiRequest, NextApiResponse } from 'next';
import { getUserData } from './_mihoyo_api/api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { uid } = req.query;

  try {
    const data = await getUserData(uid as string);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
}
