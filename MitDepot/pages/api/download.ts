import type { NextApiRequest, NextApiResponse } from 'next';
import { verify } from 'jsonwebtoken';
import { createReadStream } from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { file, token } = req.query;

  if (typeof file !== 'string' || typeof token !== 'string') {
    return res.status(400).json({ error: 'Invalid file or token' });
  }

  const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey1234567890abcdef';

  try {
    const decoded = verify(token, JWT_SECRET) as { pdf: string };
    if (decoded.pdf !== file) {
      return res.status(403).json({ error: 'Invalid token' });
    }

    const allowedPdfs = [
      'MitDepot_Recovery_Ark.pdf',
      'MitDepot_AntiScam.pdf',
      'MitDepot_One_Pager.pdf',
    ];
    if (!allowedPdfs.includes(file)) {
      return res.status(403).json({ error: 'File not allowed' });
    }

    const filePath = path.join(process.cwd(), 'public', file);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${file}`);
    const fileStream = createReadStream(filePath);
    fileStream.pipe(res);
  } catch (error) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
}