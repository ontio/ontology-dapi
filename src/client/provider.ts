import { timeout } from 'promise-timeout';
import { ProviderApi } from '../api/provider';
import { Provider } from '../api/types';
import { call } from './proxy';

export const providerApi: ProviderApi = {
  getProvider() {
    return timeout(call<Provider>('provider.getProvider'), 1000).catch(() => Promise.reject('NO_PROVIDER'));
  }
};
