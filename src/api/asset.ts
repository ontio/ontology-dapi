import { Asset } from './types';

export interface AssetApi {
  getOwnAccounts: () => Promise<string[]>;
  getDefaultAccount: () => Promise<string | null>;
  makeTransfer: (sender: string, recipient: string, asset: Asset, amount: number) => Promise<void>;
}
