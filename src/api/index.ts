import { AssetApi } from './asset';
import { GovernanceApi } from './governance';
import { IdentityApi } from './identity';
import { MessageApi } from './message';
import { NetworkApi } from './network';
import { ProviderApi } from './provider';
import { SmartContractApi } from './smartContract';
import { NativeContractApi } from './nativeContract';
import { StateChannelApi } from './stateChannel';
import { UtilsApi } from './utils';

export * from './types';
export { AssetApi } from './asset';
export { IdentityApi } from './identity';
export { MessageApi } from './message';
export { NetworkApi } from './network';
export { ProviderApi } from './provider';
export { SmartContractApi } from './smartContract';
export { NativeContractApi } from './nativeContract';
export { StateChannelApi } from './stateChannel';
export { UtilsApi } from './utils';
export { GovernanceApi } from './governance';

export interface DApi {
  asset: AssetApi;
  identity: IdentityApi;
  message: MessageApi;
  network: NetworkApi;
  provider: ProviderApi;
  smartContract: SmartContractApi;
  nativeContract: NativeContractApi;
  utils: UtilsApi;
  stateChannel: StateChannelApi;
  governance: GovernanceApi;
}
