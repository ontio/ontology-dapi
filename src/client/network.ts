import { NetworkApi } from '../api/network';
import { Balance, Block, MerkleProof, Network, Transaction } from '../api/types';
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
  }
};
