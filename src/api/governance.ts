import { PeerPoolItem, PeerAttributes, StakeInfo } from './types';
export interface GovernanceApi {
  /**
   * Stake for peers.
   * @param peerPubKeys Public key list of peers
   * @param amounts Amounts for these peers
   * @param gasPrice Suggested price of gas
   * @param gasLimit Suggested limit of gas
   * @return Transaction hash
   */
  stakePeers({
    peerPubKeys,
    amounts,
    gasPrice,
    gasLimit
  }: {
    peerPubKeys: string[],
    amounts: string[],
    gasPrice?: string,
    gasLimit?: string
  }): Promise<string>;

  /**
   * Cancel stake for peers.
   * @param peerPubKeys Public key list of peers
   * @param amounts Amounts for these peers
   * @param gasPrice Suggested price of gas
   * @param gasLimit Suggested limit of gas
   * @return Transaction hash
   */
  redeemPeers({
    peerPubKeys,
    amounts,
    gasPrice,
    gasLimit
  }: {
    peerPubKeys: string[],
    amounts: string[],
    gasPrice?: string,
    gasLimit?: string
  }): Promise<string>;

  /**
   * Withdraw the fee reward for staking peers.
   * @param gasPrice Suggested price of gas
   * @param gasLimit Suggested limit of gas
   * @return Transaction hash
   */
  withdrawFeeReward({gasPrice, gasLimit}: {gasPrice?: string, gasLimit?: string}): Promise<string>;

  /**
   * Withdraw the unfrozen ont after cancellation of stake.
   * @param peerPubKeys Public key list of peers
   * @param amounts Withdraw amounts of these peers
   * @param gasPrice Suggested price of gas
   * @param gasLimit Suggested limit of gas
   */
  withdrawUnfrozenOnt({
    peerPubKeys,
    amounts,
    gasPrice,
    gasLimit
  }: {
    peerPubKeys: string[],
    amounts: string[],
    gasPrice?: string,
    gasLimit?: string
  }): Promise<string>;

  /**
   * Withdraw unbound ong of user.
   * @param gasPrice Suggested price of gas
   * @param gasLimit Suggested limit of gas
   * @return Transaction hash
   */
  withdrawPeerUnboundOng({gasPrice, gasLimit}: {gasPrice?: string, gasLimit?: string}): Promise<string>;

  /**
   * Query all the peer's state.
   * @return List of all peer's state
   */
  getAllPeerPool(): Promise<PeerPoolItem[]>;

  /**
   * Query the peer attributes.
   * @desc If the ifAuthorize or cost has not been set before, query result will be empty.
   * @param peerPubKey Public key of peer
   * @return Attributes of the peer
   */
  getAttributes({peerPubKey}: {peerPubKey: string}): Promise<PeerAttributes>;

  /**
   * Get peer stake infos of user.
   * @param peerPubKey Public key of peer
   * @return The peer stake infos of user
   */
  getStakeInfo({peerPubKey}: {peerPubKey: string}): Promise<StakeInfo>;

  /**
   * Get the reward fee of user.
   * @return Amount of reward fee
   */
  getRewardFeeAmount(): Promise<string>;
}
