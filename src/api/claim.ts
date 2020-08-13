import { Claim } from './types';

export interface ClaimApi {
  /**
   * Adds claims to currently selected identity.
   *
   * @param claim Claim to add
   */
  addClaim({ claim }: { claim: Claim }): Promise<void>;

  /**
   * Queries claims of currently selected identity.
   */
  getClaims(): Promise<Claim[]>;
}
