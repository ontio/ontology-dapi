import {
  Asset,
  Balance,
  Block,
  BlockWithTxList,
  Contract,
  GasPrice,
  MerkleProof,
  Network,
  Transaction
} from './types';

export interface NetworkApi {
  getNodeCount(): Promise<number>;

  getBlockHeight(): Promise<number>;

  getMerkleProof({ txHash }: { txHash: string }): Promise<MerkleProof>;

  getStorage({ contract, key }: { contract: string; key: string }): Promise<string>;

  getAllowance({ asset, fromAddress, toAddress }: {
    asset: Asset;
    fromAddress: string;
    toAddress: string;
  }): Promise<number>;

  getAllowanceV2({ asset, fromAddress, toAddress }: {
    asset: Asset;
    fromAddress: string;
    toAddress: string;
  }): Promise<number>;

  getBlock({ block }: { block: number | string }): Promise<Block>;

  getTransaction({ txHash }: { txHash: string }): Promise<Transaction>;

  getNetwork(): Promise<Network>;

  getBalance({ address }: { address: string }): Promise<Balance>;

  getBalanceV2({ address }: { address: string }): Promise<Balance>;

  isConnected(): Promise<boolean>;

  getUnboundOng({ address }: { address: string }): Promise<string>;

  getContract({ hash }: { hash: string }): Promise<Contract>;

  getSmartCodeEvent({ value }: { value: string | number }): Promise<any>;

  getBlockHeightByTxHash({ hash }: { hash: string }): Promise<number>;

  getBlockHash({ height }: { height: number }): Promise<string>;

  getBlockTxsByHeight({ height }: { height: number }): Promise<BlockWithTxList>;

  getGasPrice(): Promise<GasPrice>;

  getGrantOng({ address }: { address: string }): Promise<string>;

  getMempoolTxCount(): Promise<number[]>;

  getMempoolTxState({ hash }: { hash: string }): Promise<any>;

  getVersion(): Promise<string>;
}
