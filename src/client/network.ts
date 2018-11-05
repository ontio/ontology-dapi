import { NetworkApi } from '../api/network';
import { Balance, Block, BlockWithTxList, Contract, GasPrice, MerkleProof, Network, Transaction } from '../api/types';
import { call } from './proxy';

export const networkApi: NetworkApi = {
  getNodeCount() {
    return call<number>('network.getNodeCount');
  },

  getBlockHeight() {
    return call<number>('network.getBlockHeight');
  },

  getMerkleProof(args) {
    return call<MerkleProof>('network.getMerkleProof', args);
  },

  getStorage(args) {
    return call<string>('network.getStorage', args);
  },

  getAllowance(args) {
    return call<number>('network.getAllowance', args);
  },

  getBlock(args) {
    return call<Block>('network.getBlock', args);
  },

  getTransaction(args) {
    return call<Transaction>('network.getTransaction', args);
  },

  getNetwork() {
    return call<Network>('network.getNetwork');
  },

  getBalance(args) {
    return call<Balance>('network.getBalance', args);
  },

  isConnected() {
    return call<boolean>('network.isConnected');
  },

  getUnboundOng(args) {
    return call<string>('network.getUnboundOng', args);
  },
  getContract(args) {
    return call<Contract>('network.getContract', args);
  },
  getSmartCodeEvent(args) {
    return call<any>('network.getSmartCodeEvent', args);
  },
  getBlockHeightByTxHash(args) {
    return call<number>('network.getBlockHeightByTxHash', args);
  },

  getBlockHash(args) {
    return call<string>('network.getBlockHash', args);
  },
  getBlockTxsByHeight(args) {
    return call<BlockWithTxList>('network.getBlockTxsByHeight', args);
  },
  getGasPrice() {
    return call<GasPrice>('network.getGasPrice');
  },
  getGrantOng(args) {
    return call<string>('network.getGrantOng', args);
  },
  getMempoolTxCount() {
    return call<number[]>('network.getMempoolTxCount');
  },
  getMempoolTxState(args) {
    return call<any>('network.getMempoolTxState', args);
  },
  getVersion() {
    return call<string>('network.getVersion');
  }
};
