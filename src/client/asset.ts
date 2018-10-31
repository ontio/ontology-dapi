import { AssetApi } from '../api/asset';
import { call } from './proxy';

export const assetApi: AssetApi = {
  getAccount() {
    return call<string>('asset.getAccount');
  },

  getPublicKey() {
    return call<string>('asset.getPublicKey');
  },

  send(args) {
    return call<string>('asset.send', args);
  }
};
