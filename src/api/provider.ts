export interface ProviderApi {
  /**
   * Returns true if there is dAPI provider installed.
   *
   */
  isInstalled(): Promise<boolean>;

  /**
   * Returns the name of the installed dAPI provider.
   *
   * @throws NO_PROVIDER
   */
  getName(): Promise<string>;

  /**
   * Returns the version of the installed dAPI provider.
   *
   * @throws NO_PROVIDER
   */
  getVersion(): Promise<string>;
}
