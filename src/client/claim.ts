import { ClaimApi } from '../api/claim';
import { Claim } from '../api/types';
import { call } from './proxy';

export const claimApi: ClaimApi = {
  addClaim(args) {
    return call<void>('claim.addClaim', args);
  },
  getClaims() {
    return call<Claim[]>('claim.getClaims');
  },
};
