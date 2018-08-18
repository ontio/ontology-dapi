import { timeout } from 'promise-timeout';
import { ProviderApi } from '../api/provider';
import { call } from './proxy';

export const providerApi: ProviderApi = {
  isInstalled() {
    return timeout(call<boolean>('provider.isInstalled'), 1000).catch(() => false);
  },

  getName() {
    return call<string>('provider.getName');
  },

  getVersion() {
    return call<string>('provider.getVersion');
  }
};
