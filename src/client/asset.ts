import { AssetApi } from '../api/asset';
import { Asset } from '../api/types';
import { call } from './proxy';

export const assetApi: AssetApi = {
  getAccount() {
    return call<string>('asset.getAccount');
  },

  makeTransfer(recipient: string, asset: Asset, amount: number) {
    return call<string>('asset.makeTransfer', recipient, asset, amount);
  }
};
