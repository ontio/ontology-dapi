import { StateChannelApi } from '../api/stateChannel';
import { Signature } from '../api/types';
import { Rpc } from '../rpc/rpc';

export class StateChannelApiImp implements StateChannelApi {
  private rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  login() {
    return this.rpc.call<string>('stateChannel.login');
  }

  sign(args: {
    channelId: string,
    scriptHash: string,
    message: string
  }) {
    return this.rpc.call<Signature>('stateChannel.sign', args);
  }
}
