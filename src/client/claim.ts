import { ClaimApi } from '../api/claim';
import { Claim } from '../api/types';
import { call } from './proxy';

export const claimApi: ClaimApi = {
  addClaims(args) {
    return call<void>('claim.addClaims', args);
  },
  getClaims() {
    return call<Claim[]>('claim.getClaims');
  },
};
