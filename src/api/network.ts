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

  getUnboundOng(): Promise<string>;
  getContract({ hash }: { hash: string }): Promise<string>;
  getSmartCodeEvent({ value }: { value: string | number }): Promise<any>;
  getBlockHeightByTxHash({ hash }: { hash: string }): Promise<number>;

  getBlockHash({ height }: { height: number }): Promise<string>;
  getBlockTxsByHeight({ height }: { height: number }): Promise<string[]>;
  getGasPrice(): Promise<string>;
  getGrantOng({ address }: { address: string }): Promise<string>;
  getMempoolTxCount(): Promise<number>;
  getMempoolTxState({ hash }: { hash: string }): Promise<any>;
  getVersion(): Promise<string>;
}
