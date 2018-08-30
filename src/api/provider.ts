import { Provider } from './types';

export interface ProviderApi {
  /**
   * Returns information about the provider.
   */
  getProvider(): Promise<Provider>;
}
