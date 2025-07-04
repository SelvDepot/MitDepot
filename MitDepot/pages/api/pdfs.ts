import type { NextApiRequest, NextApiResponse } from 'next';
import { sign } from 'jsonwebtoken';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey1234567890abcdef';
  const BASE_URL = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';

  const pdfs = [
    'MitDepot_Recovery_Ark.pdf',
    'MitDepot_AntiScam.pdf',
    'MitDepot_One_Pager.pdf',
  ];

  const signedUrls = pdfs.map((pdf) => {
    const token = sign({ pdf }, JWT_SECRET, { expiresIn: '1h' });
    return `${BASE_URL}/api/download?file=${pdf}&token=${token}`;
  });

  return res.status(200).json({ urls: signedUrls });
}