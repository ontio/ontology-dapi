import { Claim } from './types';

export interface ClaimApi {
  /**
   * Adds claims to currently selected identity.
   *
   * @param claims Alaims to add
   */
  addClaims({ claims }: { claims: Claim[] }): Promise<void>;

  /**
   * Queries claims of currently selected identity.
   */
  getClaims(): Promise<Claim[]>;
}
