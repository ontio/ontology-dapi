import { IdentityApi } from '../api/identity';
import { OntIdAttribute, OntIdDDO } from '../api/types';
import { call } from './proxy';

export const identityApi: IdentityApi = {
  getDefaultIdentity() {
    return call<string>('identity.getDefaultIdentity');
  },
  getPublicKeys(identity: string) {
    return call<string[]>('identity.getPublicKeys', identity);
  },
  getDDO(identity: string) {
    return call<OntIdDDO>('identity.getDDO', identity);
  },
  getAttributes(identity: string) {
    return call<OntIdAttribute[]>('identity.getAttributes', identity);
  },
  addAttributes(attributes: OntIdAttribute[]) {
    return call<void>('identity.addAttributes', attributes);
  },
  removeAttribute(key: string) {
    return call<void>('identity.removeAttribute', key);
  }
};
