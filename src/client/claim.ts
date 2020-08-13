import { ClaimApi } from '../api/claim';
import { Claim } from '../api/types';
import { call } from './proxy';

export const claimApi: ClaimApi = {
  addClaims(args) {
    return call<void>('identity.addClaims', args);
  },
  getClaims() {
    return call<Claim[]>('identity.getClaims');
  },
};
