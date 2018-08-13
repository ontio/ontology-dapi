import BigNumber from 'bignumber.js';
import { Asset, Balance, Block, MerkleProof, Network, Transaction } from './types';

export interface NetworkApi {
  getGenerateBlockTime: () => Promise<number | null>;
  getNodeCount: () => Promise<number>;
  getBlockHeight: () => Promise<number>;
  getMerkleProof: (txHash: string) => Promise<MerkleProof>;
  getStorage: (contract: string, key: string) => Promise<string>;
  getAllowance: (asset: Asset, fromAddress: string, toAddress: string) => Promise<BigNumber>;
  getBlock: (block: number | string) => Promise<Block>;
  getTransaction: (txHash: string) => Promise<Transaction>;
  getNetwork: () => Promise<Network>;
  getBalance: (address: string) => Promise<Balance>;
}
