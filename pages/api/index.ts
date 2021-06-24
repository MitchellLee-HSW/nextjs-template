import type { NextApiRequest, NextApiResponse } from 'next';
type Request = NextApiRequest;
type Response = NextApiResponse;

export default async function handler(req: Request, res: Response): Promise<void> {
    res.status(200).send("/api is working correctly");
}