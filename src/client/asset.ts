import { AssetApi } from '../api/asset';
import { Asset } from '../api/types';
import { call } from './proxy';

export const assetApi: AssetApi = {
  getOwnAccounts() {
    return call<string[]>('asset.getOwnAccounts');
  },

  getDefaultAccount() {
    return call<string>('asset.getDefaultAccount');
  },

  getPublicKey(account: string) {
    return call<string>('asset.getPublicKey', account);
  },

  makeTransfer(sender: string, recipient: string, asset: Asset, amount: number) {
    return call<string>('asset.makeTransfer', sender, recipient, asset, amount);
  }
};
