import { MessageApi } from '../api/message';
import { Signature } from '../api/types';
import { call } from './proxy';

export const messageApi: MessageApi = {
  signMessageHash(messageHash: string) {
    return call<Signature>('message.signMessageHash', messageHash);
  },
  verifyMessageHash(messageHash: string, signature: Signature) {
    return call<boolean>('message.verifyMessageHash', messageHash, signature);
  },

  signMessage(message: string) {
    return call<Signature>('message.signMessage', message);
  },
  verifyMessage(message: string, signature: Signature) {
    return call<boolean>('message.verifyMessage', message, signature);
  }
};
