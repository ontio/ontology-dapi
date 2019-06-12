import { StateChannelApi } from '../api/stateChannel';
import { Signature } from '../api/types';
import { call } from './proxy';

export const stateChannelApi: StateChannelApi = {
  login() {
    return call<string>('stateChannel.login');
  },

  sign(args) {
    return call<Signature>('stateChannel.sign', args);
  }
};
