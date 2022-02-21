import { NetworkApi } from '../api/network';
import { Asset, Balance, Block, BlockWithTxList, Contract, GasPrice, MerkleProof, Network, Transaction } from '../api/types';
import { Rpc } from '../rpc/rpc';

export class NetworkApiImp implements NetworkApi {
  private rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  getNodeCount() {
    return this.rpc.call<number>('network.getNodeCount');
  }

  getBlockHeight() {
    return this.rpc.call<number>('network.getBlockHeight');
  }

  getMerkleProof(args: { txHash: string }) {
    return this.rpc.call<MerkleProof>('network.getMerkleProof', args);
  }

  getStorage(args: { contract: string; key: string }) {
    return this.rpc.call<string>('network.getStorage', args);
  }

  getAllowance(args: {
    asset: Asset;
    fromAddress: string;
    toAddress: string;
  }) {
    return this.rpc.call<number>('network.getAllowance', args);
  }

  getAllowanceV2(args: {
    asset: Asset;
    fromAddress: string;
    toAddress: string;
  }) {
    return this.rpc.call<number>('network.getAllowanceV2', args);
  }

  getBlock(args: { block: number | string }) {
    return this.rpc.call<Block>('network.getBlock', args);
  }

  getTransaction(args: { txHash: string }) {
    return this.rpc.call<Transaction>('network.getTransaction', args);
  }

  getNetwork() {
    return this.rpc.call<Network>('network.getNetwork');
  }

  getBalance(args: { address: string }) {
    return this.rpc.call<Balance>('network.getBalance', args);
  }

  getBalanceV2(args: { address: string }) {
    return this.rpc.call<Balance>('network.getBalanceV2', args);
  }

  isConnected() {
    return this.rpc.call<boolean>('network.isConnected');
  }

  getUnboundOng(args: { address: string }) {
    return this.rpc.call<string>('network.getUnboundOng', args);
  }

  getContract(args: { hash: string }) {
    return this.rpc.call<Contract>('network.getContract', args);
  }

  getSmartCodeEvent(args: { value: string | number }) {
    return this.rpc.call<any>('network.getSmartCodeEvent', args);
  }

  getBlockHeightByTxHash(args: { hash: string }) {
    return this.rpc.call<number>('network.getBlockHeightByTxHash', args);
  }

  getBlockHash(args: { height: number }) {
    return this.rpc.call<string>('network.getBlockHash', args);
  }

  getBlockTxsByHeight(args: { height: number }) {
    return this.rpc.call<BlockWithTxList>('network.getBlockTxsByHeight', args);
  }

  getGasPrice() {
    return this.rpc.call<GasPrice>('network.getGasPrice');
  }

  getGrantOng(args: { address: string }) {
    return this.rpc.call<string>('network.getGrantOng', args);
  }

  getMempoolTxCount() {
    return this.rpc.call<number[]>('network.getMempoolTxCount');
  }

  getMempoolTxState(args: { hash: string }) {
    return this.rpc.call<any>('network.getMempoolTxState', args);
  }

  getVersion() {
    return this.rpc.call<string>('network.getVersion');
  }
}
