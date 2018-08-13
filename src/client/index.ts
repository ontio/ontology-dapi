import { DApi } from '../api';
import * as network from './network';
import { registerClient } from './proxy';
import * as utils from './utils';

const api: DApi = {
  network
};

export { registerClient, utils, api };
