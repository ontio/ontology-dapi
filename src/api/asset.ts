import { Asset } from './types';

export interface AssetApi {
  /**
   * Returns currently selected account of logged in user.
   *
   * @throws NO_ACCOUNT
   */
  getAccount(): Promise<string>;

  /**
   * Returns currently selected public key of logged in user.
   *
   * @throws NO_ACCOUNT
   */
  getPublicKey(): Promise<string>;

  /**
   * Initiates a transfer of amount asset from user account to recipient account.
   *
   * @param to Recipient of the transfer
   * @param asset Asset to send
   * @param amount Amount to send
   * @throws NO_ACCOUNT, MALFORMED_ACCOUNT, CANCELED
   */
  send({ to, asset, amount }: { to: string; asset: Asset; amount: string }): Promise<string>;

  /**
   * Initiates a transfer of amount asset from user account to recipient account.
   * If the asset is ONG then the value is multiplied by 10**18.
   * If the asset is ONT then the value is multiplied by 10**9.
   *
   * @param to Recipient of the transfer
   * @param asset Asset to send
   * @param amount Amount to send
   * @throws NO_ACCOUNT, MALFORMED_ACCOUNT, CANCELED
   */
  sendV2({ to, asset, amount }: { to: string; asset: Asset; amount: string }): Promise<string>;

  approve({
    asset,
    from,
    to,
    amount
  }: {
    asset: Asset;
    from: string;
    to: string;
    amount: number | string;
  }): Promise<string>;

  getAllowance({ asset, from, to }: { asset: Asset; from: string; to: string }): Promise<string>;
}
