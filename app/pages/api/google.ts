import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/google/callback`
    );

    const scopes = ['https://www.googleapis.com/auth/business.manage'];
    const url = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: scopes,
      prompt: 'consent'
    });

    res.redirect(url);
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
