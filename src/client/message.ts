import { MessageApi } from '../api/message';
import { call } from './proxy';

export const messageApi: MessageApi = {
  signMessageHash(address: string, messageHash: string) {
    return call<string>('message.signMessageHash', address, messageHash);
  },
  verifyMessageHash(address: string, messageHash: string, signature: string) {
    return call<boolean>('message.verifyMessageHash', address, messageHash, signature);
  },

  verifyMessageHashPk(publicKey: string, messageHash: string, signature: string) {
    return call<boolean>('message.verifyMessageHashPk', publicKey, messageHash, signature);
  },

  signMessage(address: string, message: string) {
    return call<string>('message.signMessage', address, message);
  },
  verifyMessage(address: string, message: string, signature: string) {
    return call<boolean>('message.verifyMessage', address, message, signature);
  },

  verifyMessagePk(publicKey: string, message: string, signature: string) {
    return call<boolean>('message.verifyMessagePk', publicKey, message, signature);
  }
};
