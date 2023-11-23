import { NativeContractApi } from '../api/nativeContract';
import { Response, NativeContractApiParams } from '../api/types';
import { Rpc } from '../rpc/rpc';

export class NativeContractApiImp implements NativeContractApi {
  private rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  invokeBuildRegisterOntid(args: NativeContractApiParams) {
    return this.rpc.call<Response>('nativeContract.invokeBuildRegisterOntid', args);
  }
}
