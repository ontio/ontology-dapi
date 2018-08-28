import { Asset, Balance, Block, MerkleProof, Network, Transaction } from './types';

export interface NetworkApi {
  getNodeCount(): Promise<number>;
  getBlockHeight(): Promise<number>;
  getMerkleProof(txHash: string): Promise<MerkleProof>;
  getStorage(contract: string, key: string): Promise<string>;
  getAllowance(asset: Asset, fromAddress: string, toAddress: string): Promise<number>;
  getBlock(block: number | string): Promise<Block>;
  getTransaction(txHash: string): Promise<Transaction>;
  getNetwork(): Promise<Network>;
  getBalance(address: string): Promise<Balance>;
  isConnected(): Promise<boolean>;
}
