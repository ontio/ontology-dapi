import { MessageApi } from '../api/message';
import { Signature } from '../api/types';
import { Rpc } from '../rpc/rpc';

export class MessageApiImp implements MessageApi {
  private rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  signMessageHash(args: { messageHash: string, useIdentity?: boolean }) {
    return this.rpc.call<Signature>('message.signMessageHash', args);
  }

  verifyMessageHash(args: { messageHash: string; signature: Signature }) {
    return this.rpc.call<boolean>('message.verifyMessageHash', args);
  }

  signMessage(args: { message: string, useIdentity?: boolean }) {
    return this.rpc.call<Signature>('message.signMessage', args);
  }

  verifyMessage(args: { message: string; signature: Signature }) {
    return this.rpc.call<boolean>('message.verifyMessage', args);
  }
}
