import { AssetApi } from './asset';
import { IdentityApi } from './identity';
import { MessageApi } from './message';
import { NetworkApi } from './network';
import { SmartContractApi } from './smartContract';

export * from './types';
export { AssetApi } from './asset';
export { IdentityApi } from './identity';
export { MessageApi } from './message';
export { NetworkApi } from './network';
export { SmartContractApi } from './smartContract';

export interface DApi {
  asset: AssetApi;
  identity: IdentityApi;
  message: MessageApi;
  network: NetworkApi;
  smartContract: SmartContractApi;
}
