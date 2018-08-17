export interface MessageApi {
  /**
   * Initiates signing of arbitrary messageHash by the account or identity.
   *
   * @param address Own account or identity
   * @param messageHash Hex encoded message hash
   * @returns Hex encoded signature
   *
   * @throws NO_ADDRESS, WRONG_ADDRESS, MALFORMED_ADDRESS, MALFORMED_MESSAGE
   */
  signMessageHash(address: string, messageHash: string): Promise<string>;

  /**
   * Verifies that the signature is created by the account or identity.
   *
   * @param address Own account or identity
   * @param messageHash Hex encoded message hash
   * @param signature Hex encoded signature
   *
   * @throws NO_ADDRESS, WRONG_ADDRESS, MALFORMED_ADDRESS, MALFORMED_MESSAGE, MALFORMED_SIGNATURE
   */
  verifyMessageHash(address: string, messageHash: string, signature: string): Promise<boolean>;

  /**
   * Verifies that the signature is created by a private key corresponding to the publicKey.
   *
   * @param publicKey Arbitrary hex encoded public key
   * @param messageHash Hex encoded message hash
   * @param signature Hex encoded signature
   *
   * @throws MALFORMED_PUBLIC_KEY, MALFORMED_MESSAGE, MALFORMED_SIGNATURE
   */
  verifyMessageHashPk(publicKey: string, messageHash: string, signature: string): Promise<boolean>;

  /**
   * Initiates signing of arbitrary message by the account or identity.
   *
   * @param address Own account or identity
   * @param message Text message
   * @returns Hex encoded signature
   *
   * @throws NO_ADDRESS, WRONG_ADDRESS, MALFORMED_ADDRESS
   */
  signMessage(address: string, message: string): Promise<string>;

  /**
   * Verifies that the signature is created by the account or identity.
   *
   * @param address Own account or identity
   * @param message Text message
   * @param signature Hex encoded signature
   *
   * @throws NO_ADDRESS, WRONG_ADDRESS, MALFORMED_ADDRESS, MALFORMED_SIGNATURE
   */
  verifyMessage(address: string, message: string, signature: string): Promise<boolean>;

  /**
   * Verifies that the signature is created by a private key corresponding to the publicKey.
   *
   * @param publicKey Arbitrary hex encoded public key
   * @param message Text message
   * @param signature Hex encoded signature
   *
   * @throws MALFORMED_PUBLIC_KEY, MALFORMED_SIGNATURE
   */
  verifyMessagePk(publicKey: string, message: string, signature: string): Promise<boolean>;
}
