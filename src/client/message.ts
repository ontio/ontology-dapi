import { MessageApi } from '../api/message';
import { Signature } from '../api/types';
import { call } from './proxy';

export const messageApi: MessageApi = {
  signMessageHash(args) {
    return call<Signature>('message.signMessageHash', args);
  },
  verifyMessageHash(args) {
    return call<boolean>('message.verifyMessageHash', args);
  },

  signMessage(args) {
    return call<Signature>('message.signMessage', args);
  },
  verifyMessage(args) {
    return call<boolean>('message.verifyMessage', args);
  }
};
