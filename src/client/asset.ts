import { AssetApi } from '../api/asset';
import { Asset } from '../api/types';
import { Rpc } from '../rpc/rpc';

export class AssetApiImp implements AssetApi {
  private rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  getAccount() {
    return this.rpc.call<string>('asset.getAccount');
  }

  getPublicKey() {
    return this.rpc.call<string>('asset.getPublicKey');
  }

  send(args: { to: string; asset: Asset; amount: string }) {
    return this.rpc.call<string>('asset.send', args);
  }
}
