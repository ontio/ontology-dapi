import BigNumber from 'bignumber.js';
import { Asset, Balance, Block, MerkleProof, Network, Transaction } from '../api/types';
import { call } from './proxy';

export function getGenerateBlockTime(): Promise<number> {
  return call('network', 'getGenerateBlockTime');
}

export function getNodeCount(): Promise<number> {
  return call('network', 'getNodeCount');
}

export function getBlockHeight(): Promise<number> {
  return call('network', 'getBlockHeight');
}

export function getMerkleProof(txHash: string): Promise<MerkleProof> {
  return call('network', 'getMerkleProof', txHash);
}

export function getStorage(contract: string, key: string): Promise<string> {
  return call('network', 'getStorage', contract, key);
}

export function getAllowance(asset: Asset, fromAddress: string, toAddress: string): Promise<BigNumber> {
  return call('network', 'getAllowance', asset, fromAddress, toAddress);
}

export function getBlock(block: number | string): Promise<Block> {
  return call('network', 'getBlock', block);
}

export function getTransaction(txHash: string): Promise<Transaction> {
  return call('network', 'getTransaction', txHash);
}

export function getNetwork(): Promise<Network> {
  return call('network', 'getNetwork');
}

export function getBalance(address: string): Promise<Balance> {
  return call('network', 'getBalance', address);
}

export function isConnected(): Promise<boolean> {
  return call('network', 'isConnected');
}
