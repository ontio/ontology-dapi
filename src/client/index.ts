import { DApi } from '../api';
import { assetApi as asset } from './asset';
import { identityApi as identity } from './identity';
import { messageApi as message } from './message';
import { networkApi as network } from './network';
import { providerApi as provider } from './provider';
import { registerClient } from './proxy';
import { smartContractApi as smartContract } from './smartContract';
import { utilsApi as utils } from './utils';

const api: DApi = {
  asset,
  identity,
  message,
  network,
  provider,
  smartContract,
  utils
};

export { registerClient, api };
