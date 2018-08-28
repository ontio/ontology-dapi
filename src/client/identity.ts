import { IdentityApi } from '../api/identity';
import { OntIdAttribute, OntIdDDO } from '../api/types';
import { call } from './proxy';

export const identityApi: IdentityApi = {
  getIdentity() {
    return call<string>('identity.getIdentity');
  },
  getDDO(identity: string) {
    return call<OntIdDDO>('identity.getDDO', identity);
  },
  addAttributes(attributes: OntIdAttribute[]) {
    return call<void>('identity.addAttributes', attributes);
  },
  removeAttribute(key: string) {
    return call<void>('identity.removeAttribute', key);
  }
};
