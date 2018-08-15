import { AssetApi } from '../api/asset';
import { Asset } from '../api/types';
import { call } from './proxy';

export const assetApi: AssetApi = {
  getOwnAccounts() {
    return call<string[]>('asset.getOwnAccounts');
  },
  getDefaultAccount() {
    return call<string | null>('asset.getDefaultAccount');
  },
  makeTransfer(sender: string, recipient: string, asset: Asset, amount: number) {
    return call<void>('asset.makeTransfer', sender, recipient, asset, amount);
  }
};
