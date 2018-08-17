import { OntIdAttribute, OntIdDDO } from './types';

export interface IdentityApi {
  /**
   * Returns all the identities associated with logged in user.
   *
   * @throws NO_IDENTITY
   */
  getOwnIdentities(): Promise<string[]>;

  /**
   * Returns currently selected identity of logged in user.
   *
   * @throws NO_IDENTITY
   */
  getDefaultIdentity(): Promise<string>;

  /**
   * Returns public keys corresponding to an identity.
   *
   * @param account Arbitrary identity
   * @throws MALFORMED_IDENTITY
   */
  getPublicKeys(identity: string): Promise<string[]>;

  /**
   * Queries Description Object of the identity.
   *
   * @param account Arbitrary identity
   * @throws MALFORMED_IDENTITY
   */
  getDDO(identity: string): Promise<OntIdDDO>;

  /**
   * Queries attributes attached to the identity.
   *
   * @param account Arbitrary identity
   * @throws MALFORMED_IDENTITY
   */
  getAttributes(identity: string): Promise<OntIdAttribute[]>;

  /**
   * Adds attributes to the identity.
   *
   * @param account Own identity
   * @param attributes Attributes to add
   * @throws NO_IDENTITY, WRONG_IDENTITY, MALFORMED_IDENTITY
   */
  addAttributes(identity: string, attributes: OntIdAttribute[]): Promise<void>;

  /**
   * Removes attributes from the identity.
   *
   * @param account Own identity
   * @param key Attribute key to remove
   * @throws NO_IDENTITY, WRONG_IDENTITY, MALFORMED_IDENTITY
   */
  removeAttribute(identity: string, key: string): Promise<void>;
}
