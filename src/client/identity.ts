import { IdentityApi } from '../api/identity';
import { OntIdAttribute, OntIdDDO } from '../api/types';
import { call } from './proxy';

export const identityApi: IdentityApi = {
  getOwnIdentities() {
    return call<string[]>('identity.getOwnIdentities');
  },
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
  addAttributes(identity: string, attributes: OntIdAttribute[]) {
    return call<void>('identity.addAttributes', identity, attributes);
  },
  removeAttribute(identity: string, key: string) {
    return call<void>('identity.removeAttribute', identity, key);
  }
};
