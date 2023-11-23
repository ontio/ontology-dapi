import { GovernanceApiImp } from './governance';
import { GovernanceApi } from './../api/governance';
import { DApi } from '../api';
import { AssetApi } from '../api/asset';
import { IdentityApi } from '../api/identity';
import { MessageApi } from '../api/message';
import { NetworkApi } from '../api/network';
import { ProviderApi } from '../api/provider';
import { SmartContractApi } from '../api/smartContract';
import { NativeContractApi } from '../api/nativeContract';
import { StateChannelApi } from '../api/stateChannel';
import { Rpc } from '../rpc/rpc';
import { AssetApiImp } from './asset';
import { IdentityApiImp } from './identity';
import { MessageApiImp } from './message';
import { NetworkApiImp } from './network';
import { ProviderApiImp } from './provider';
import { SmartContractApiImp } from './smartContract';
import { NativeContractApiImp } from './nativeContract';
import { StateChannelApiImp } from './stateChannel';
import { utilsApi } from './utils';

export class DApiImp implements DApi {
  asset: AssetApi;
  identity: IdentityApi;
  message: MessageApi;
  network: NetworkApi;
  provider: ProviderApi;
  smartContract: SmartContractApi;
  nativeContract: NativeContractApi;
  stateChannel: StateChannelApi;
  utils = utilsApi;
  governance: GovernanceApi;

  constructor(rpc: Rpc) {
    this.asset = new AssetApiImp(rpc);
    this.identity = new IdentityApiImp(rpc);
    this.message = new MessageApiImp(rpc);
    this.network = new NetworkApiImp(rpc);
    this.provider = new ProviderApiImp(rpc);
    this.smartContract = new SmartContractApiImp(rpc);
    this.nativeContract = new NativeContractApiImp(rpc);
    this.stateChannel = new StateChannelApiImp(rpc);
    this.governance = new GovernanceApiImp(rpc);
  }
}
