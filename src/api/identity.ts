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
   * Returns public keys corresponding to own identity.
   *
   * @throws NO_IDENTITY, WRONG_IDENTITY
   */
  getPublicKeys(identity: string): Promise<string[]>;

  getDDO(identity: string): Promise<OntIdDDO>;
  getAttributes(identity: string): Promise<OntIdAttribute[]>;
  addAttributes(identity: string, attributes: OntIdAttribute[]): Promise<void>;
  removeAttribute(identity: string, key: string): Promise<void>;
}
