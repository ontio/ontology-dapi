import { AssetApi } from '../api/asset';
import { call } from './proxy';

export const assetApi: AssetApi = {
  getAccount() {
    return call<string>('asset.getAccount');
  },

  send(args) {
    return call<string>('asset.send', args);
  }
};
