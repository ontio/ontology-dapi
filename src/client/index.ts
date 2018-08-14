import { DApi } from '../api';
import * as asset from './asset';
import * as network from './network';
import { registerClient } from './proxy';
import * as utils from './utils';

const api: DApi = {
  asset,
  network
};

export { registerClient, utils, api };
