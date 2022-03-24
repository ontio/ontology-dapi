import { PeerPoolItem, PeerAttributes, StakeInfo } from './../api/types';
import { GovernanceApi } from '../api/governance';
import { Rpc } from '../rpc/rpc';

export class GovernanceApiImp implements GovernanceApi {
  private rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  stakePeers(args: {
    peerPubKeys: string[],
    amounts: string[],
    gasPrice?: string,
    gasLimit?: string
  }) {
    return this.rpc.call<string>('governance.stakePeers', args);
  }

  redeemPeers(args: {
    peerPubKeys: string[],
    amounts: string[],
    gasPrice?: string,
    gasLimit?: string
  }) {
    return this.rpc.call<string>('governance.redeemPeers', args);
  }

  withdrawFeeReward(args: { gasPrice?: string, gasLimit?: string }) {
    return this.rpc.call<string>('governance.withdrawFeeReward', args);
  }

  withdrawUnfrozenOnt(args: {
    peerPubKeys: string[],
    amounts: string[],
    gasPrice?: string,
    gasLimit?: string
  }) {
    return this.rpc.call<string>('governance.withdrawUnfrozenOnt', args);
  }

  withdrawPeerUnboundOng(args: { gasPrice?: string, gasLimit?: string }) {
    return this.rpc.call<string>('governance.withdrawPeerUnboundOng', args);
  }

  getAllPeerPool() {
    return this.rpc.call<PeerPoolItem[]>('governance.getAllPeerPool');
  }

  getAttributes(args: { peerPubKey: string }) {
    return this.rpc.call<PeerAttributes>('governance.getAttributes', args);
  }

  getStakeInfo(args: { peerPubKey: string }) {
    return this.rpc.call<StakeInfo>('governance.getStakeInfo', args);
  }

  getRewardFeeAmount() {
    return this.rpc.call<string>('governance.getRewardFeeAmount');
  }
}
