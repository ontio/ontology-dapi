import { Asset } from './types';

export interface AssetApi {
  /**
   * Returns all the accounts associated with logged in user.
   *
   * @throws NO_ACCOUNT
   */
  getOwnAccounts(): Promise<string[]>;

  /**
   * Returns currently selected account of logged in user.
   *
   * @throws NO_ACCOUNT
   */
  getDefaultAccount(): Promise<string>;

  /**
   * Returns public key corresponding to own account.
   *
   * @throws NO_ACCOUNT, WRONG_ACCOUNT
   */
  getPublicKey(account: string): Promise<string>;

  /**
   * Initiates a transfer of amount asset from sender account to recipient account.
   * The sender must be one of the accounts returned by getOwnAccounts.
   *
   * @param sender Sender of the transfer
   * @param recipient Recipient of the transfer
   * @param asset Asset to send
   * @param amount Amount to send
   * @throws CANCELED, MALFORMED_SENDER, MALFORMED_RECIPIENT, WRONG_SENDER
   */
  makeTransfer(sender: string, recipient: string, asset: Asset, amount: number): Promise<void>;
}
