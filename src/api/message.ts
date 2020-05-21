import { Signature } from './types';

export interface MessageApi {
  /**
   * Initiates signing of arbitrary messageHash by the user account or identity.
   *
   * @param messageHash Hex encoded message hash
   * @param useIdentity If sign with identity
   * @returns Hex encoded signature with hex encoded public key
   *
   * @throws NO_ADDRESS, MALFORMED_MESSAGE
   */
  signMessageHash({ messageHash, useIdentity }: { messageHash: string, useIdentity?: boolean }): Promise<Signature>;

  /**
   * Verifies that the signature is valid signature of messageHash.
   *
   * @param messageHash Hex encoded message hash
   * @param signature Hex encoded signature with hex encoded public key
   * @param useIdentity If verify with identity
   *
   * @throws MALFORMED_MESSAGE, MALFORMED_SIGNATURE
   */
  verifyMessageHash({ messageHash, signature }: { messageHash: string; signature: Signature }): Promise<boolean>;

  /**
   * Initiates signing of arbitrary message by the user account or identity.
   *
   * @param message Text message
   * @param useIdentity If sign with identity
   * @returns Hex encoded signature with hex encoded public key
   *
   * @throws NO_ADDRESS, MALFORMED_ADDRESS
   */
  signMessage({ message, useIdentity }: { message: string, useIdentity?: boolean }): Promise<Signature>;

  /**
   * Verifies that the signature is valid signature of message.
   *
   * @param message Text message
   * @param useIdentity If verify with identity
   * @param signature Hex encoded signature with hex encoded public key
   *
   * @throws MALFORMED_SIGNATURE
   */
  verifyMessage({ message, signature }: { message: string; signature: Signature }): Promise<boolean>;
}
