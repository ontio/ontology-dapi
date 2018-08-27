import { Signature } from './types';

export interface MessageApi {
  /**
   * Initiates signing of arbitrary messageHash by the user account or identity.
   *
   * @param messageHash Hex encoded message hash
   * @returns Hex encoded signature with hex encoded public key
   *
   * @throws NO_ADDRESS, MALFORMED_MESSAGE
   */
  signMessageHash(messageHash: string): Promise<Signature>;

  /**
   * Verifies that the signature is valid signature of messageHash.
   *
   * @param messageHash Hex encoded message hash
   * @param signature Hex encoded signature with hex encoded public key
   *
   * @throws MALFORMED_MESSAGE, MALFORMED_SIGNATURE
   */
  verifyMessageHash(messageHash: string, signature: Signature): Promise<boolean>;

  /**
   * Initiates signing of arbitrary message by the user account or identity.
   *
   * @param message Text message
   * @returns Hex encoded signature with hex encoded public key
   *
   * @throws NO_ADDRESS, MALFORMED_ADDRESS
   */
  signMessage(message: string): Promise<Signature>;

  /**
   * Verifies that the signature is valid signature of message.
   *
   * @param message Text message
   * @param signature Hex encoded signature with hex encoded public key
   *
   * @throws MALFORMED_SIGNATURE
   */
  verifyMessage(message: string, signature: Signature): Promise<boolean>;
}
