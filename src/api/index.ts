import { AssetApi } from './asset';
import { NetworkApi } from './network';

export * from './types';

export interface DApi {
  asset: AssetApi;
  network: NetworkApi;
}
