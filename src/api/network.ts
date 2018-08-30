import { Asset, Balance, Block, MerkleProof, Network, Transaction } from './types';

export interface NetworkApi {
  getNodeCount(): Promise<number>;
  getBlockHeight(): Promise<number>;
  getMerkleProof({ txHash }: { txHash: string }): Promise<MerkleProof>;
  getStorage({ contract, key }: { contract: string; key: string }): Promise<string>;
  getAllowance({
    asset,
    fromAddress,
    toAddress
  }: {
    asset: Asset;
    fromAddress: string;
    toAddress: string;
  }): Promise<number>;
  getBlock({ block }: { block: number | string }): Promise<Block>;
  getTransaction({ txHash }: { txHash: string }): Promise<Transaction>;
  getNetwork(): Promise<Network>;
  getBalance({ address }: { address: string }): Promise<Balance>;
  isConnected(): Promise<boolean>;
}
