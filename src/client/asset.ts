import { AssetApi } from '../api/asset';
import { call } from './proxy';

export const assetApi: AssetApi = {
  getAccount() {
    return call<string>('asset.getAccount');
  },

  makeTransfer(args) {
    return call<string>('asset.makeTransfer', args);
  }
};
