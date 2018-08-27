import { OntIdAttribute, OntIdDDO } from './types';

export interface IdentityApi {
  /**
   * Returns currently selected identity of logged in user.
   *
   * @throws NO_IDENTITY
   */
  getDefaultIdentity(): Promise<string>;

  /**
   * Returns public keys corresponding to an identity.
   *
   * @param identity Arbitrary identity
   * @throws MALFORMED_IDENTITY
   */
  getPublicKeys(identity: string): Promise<string[]>;

  /**
   * Queries Description Object of the identity.
   *
   * @param identity Arbitrary identity
   * @throws MALFORMED_IDENTITY
   */
  getDDO(identity: string): Promise<OntIdDDO>;

  /**
   * Queries attributes attached to the identity.
   *
   * @param identity Arbitrary identity
   * @throws MALFORMED_IDENTITY
   */
  getAttributes(identity: string): Promise<OntIdAttribute[]>;

  /**
   * Adds attributes to the user identity.
   *
   * @param attributes Attributes to add
   * @throws NO_IDENTITY
   */
  addAttributes(attributes: OntIdAttribute[]): Promise<void>;

  /**
   * Removes attributes from the user identity.
   *
   * @param key Attribute key to remove
   * @throws NO_IDENTITY
   */
  removeAttribute(key: string): Promise<void>;
}
