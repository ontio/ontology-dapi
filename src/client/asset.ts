import { AssetApi } from '../api/asset';
import { Asset } from '../api/types';
import { call } from './proxy';

export const assetApi: AssetApi = {
  getDefaultAccount() {
    return call<string>('asset.getDefaultAccount');
  },

  makeTransfer(recipient: string, asset: Asset, amount: number) {
    return call<string>('asset.makeTransfer', recipient, asset, amount);
  }
};
