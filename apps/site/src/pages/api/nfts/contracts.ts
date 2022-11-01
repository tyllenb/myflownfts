import {
  getOwnershipSummaryByWallet,
  NFTListResponse,
} from '@myflownfts/data-access';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NFTListResponse>
): Promise<NextApiResponse<NFTListResponse>> {
  if (req.method !== 'GET') {
    return res.status(400);
  }

  const { chains, wallet_addresses } = req.query;

  await getOwnershipSummaryByWallet(
    chains as string,
    wallet_addresses as string
  )
    .then((response) => response.json())
    .then((response) => {
      return res.status(200).json({
        data: response.wallets,
      });
    })
    .catch((err) => {
      console.error(err);
      return res.status(400);
    });
}