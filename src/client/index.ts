import { DApi } from '../api';
import { assetApi as asset } from './asset';
import { identityApi as identity } from './identity';
import { messageApi as message } from './message';
import { networkApi as network } from './network';
import { registerClient } from './proxy';
import { smartContractApi as smartContract } from './smartContract';
import * as utils from './utils';

const api: DApi = {
  asset,
  identity,
  message,
  network,
  smartContract
};

export { registerClient, utils, api };
