import { StateChannelApi } from '../api/stateChannel';
import { Response } from '../api/types';
import { call } from './proxy';

export const stateChannelApi: StateChannelApi = {
  login(password) {
    return call<Response>('stateChannel.login', password);
  },

  sign(args) {
    return call<Response>('stateChannel.sign', args);
  }
};
