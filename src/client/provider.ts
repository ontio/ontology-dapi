import { timeout } from 'promise-timeout';
import { ProviderApi } from '../api/provider';
import { Provider } from '../api/types';
import { Rpc } from '../rpc/rpc';

export class ProviderApiImp implements ProviderApi {
  private rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  getProvider() {
    return timeout(this.rpc.call<Provider>('provider.getProvider'), 1000).catch(() => Promise.reject('NO_PROVIDER'));
  }
}
