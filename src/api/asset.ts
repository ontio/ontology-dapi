import { Asset } from './types';

export interface AssetApi {
  /**
   * Returns currently selected account of logged in user.
   *
   * @throws NO_ACCOUNT
   */
  getAccount(): Promise<string>;

  /**
   * Initiates a transfer of amount asset from user account to recipient account.
   *
   * @param recipient Recipient of the transfer
   * @param asset Asset to send
   * @param amount Amount to send
   * @throws NO_ACCOUNT, MALFORMED_ACCOUNT, CANCELED
   */
  makeTransfer({ recipient, asset, amount }: { recipient: string; asset: Asset; amount: number }): Promise<string>;
}
