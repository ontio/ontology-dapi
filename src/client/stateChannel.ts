import { StateChannelApi } from '../api/stateChannel';
import { Signature } from '../api/types';
import { call } from './proxy';

export const stateChannelApi: StateChannelApi = {
  login(password) {
    return call<string>('stateChannel.login', password);
  },

  sign(args) {
    return call<Signature>('stateChannel.sign', args);
  }
};
