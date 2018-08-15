import { DApi } from '../api';
import { assetApi as asset } from './asset';
import { networkApi as network } from './network';
import { registerClient } from './proxy';
import * as utils from './utils';

const api: DApi = {
  asset,
  network
};

export { registerClient, utils, api };
