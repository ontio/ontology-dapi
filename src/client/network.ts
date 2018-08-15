import { NetworkApi } from '../api/network';
import { Asset, Balance, Block, MerkleProof, Network, Transaction } from '../api/types';
import { call } from './proxy';

export const networkApi: NetworkApi = {
  getGenerateBlockTime() {
    return call<number>('network.getGenerateBlockTime');
  },

  getNodeCount() {
    return call<number>('network.getNodeCount');
  },

  getBlockHeight() {
    return call<number>('network.getBlockHeight');
  },

  getMerkleProof(txHash: string) {
    return call<MerkleProof>('network.getMerkleProof', txHash);
  },

  getStorage(contract: string, key: string) {
    return call<string>('network.getStorage', contract, key);
  },

  getAllowance(asset: Asset, fromAddress: string, toAddress: string) {
    return call<number>('network.getAllowance', asset, fromAddress, toAddress);
  },

  getBlock(block: number | string) {
    return call<Block>('network.getBlock', block);
  },

  getTransaction(txHash: string) {
    return call<Transaction>('network.getTransaction', txHash);
  },

  getNetwork() {
    return call<Network>('network.getNetwork');
  },

  getBalance(address: string) {
    return call<Balance>('network.getBalance', address);
  },

  isConnected() {
    return call<boolean>('network.isConnected');
  }
};
