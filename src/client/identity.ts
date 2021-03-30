import { IdentityApi } from '../api/identity';
import { OntIdAttribute, OntIdDDO } from '../api/types';
import { Rpc } from '../rpc/rpc';

export class IdentityApiImp implements IdentityApi {
  private rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  getIdentity() {
    return this.rpc.call<string>('identity.getIdentity');
  }

  getDDO(args: { identity: string }) {
    return this.rpc.call<OntIdDDO>('identity.getDDO', args);
  }

  addAttributes(args: { attributes: OntIdAttribute[] }) {
    return this.rpc.call<void>('identity.addAttributes', args);
  }

  removeAttribute(args: { key: string }) {
    return this.rpc.call<void>('identity.removeAttribute', args);
  }

  addCredential(args: { tags: string[], credential: string }) {
    return this.rpc.call<void>('identity.addCredential', args);
  }

  getCredentials() {
    return this.rpc.call<Array<{ tags: string[], credential: string }>>('identity.getCredentials');
  }
}
