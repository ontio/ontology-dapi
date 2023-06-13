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

  sendV2(args: { to: string; asset: Asset; amount: string }) {
    return this.rpc.call<string>('asset.sendV2', args);
  }

  approve(args: { asset: Asset; from: string; to: string; amount: number | string }) {
    return this.rpc.call<string>('asset.approve', args);
  }

  getAllowance(args: { asset: Asset; from: string; to: string }) {
    return this.rpc.call<string>('asset.getAllowance', args);
  }
}
