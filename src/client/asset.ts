import BigNumber from 'bignumber.js';
import { Asset } from '../api/types';
import { call } from './proxy';

export function getOwnAccounts(): Promise<string[]> {
  return call('asset', 'getOwnAccounts');
}
export function getDefaultAccount(): Promise<string | null> {
  return call('asset', 'getDefaultAccount');
}
export function makeTransfer(sender: string, recipient: string, asset: Asset, amount: BigNumber): Promise<void> {
  return call('asset', 'makeTransfer', sender, recipient, asset, amount);
}
