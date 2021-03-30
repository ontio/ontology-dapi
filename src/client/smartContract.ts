import { SmartContractApi } from '../api/smartContract';
import { Parameter, Response, VmType } from '../api/types';
import { Rpc } from '../rpc/rpc';

export class SmartContractApiImp implements SmartContractApi {
  private rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  invoke(args: {
    scriptHash: string;
    operation: string;
    args?: Parameter[];
    gasPrice?: number;
    gasLimit?: number;
    requireIdentity?: boolean;
  }) {
    return this.rpc.call<Response>('smartContract.invoke', args);
  }

  invokeRead(args: {
    scriptHash: string;
    operation: string;
    args?: Parameter[];
  }): Promise<any> {
    return this.rpc.call<void>('smartContract.invokeRead', args);
  }

  deploy(args: {
    code: string;
    name?: string;
    version?: string;
    author?: string;
    email?: string;
    description?: string;
    vmType?: boolean | VmType;
    gasPrice?: number;
    gasLimit?: number;
  }): Promise<void> {
    return this.rpc.call<void>('smartContract.deploy', args);
  }

  invokeWasm(args: {
    scriptHash: string;
    operation: string;
    args?: Parameter[];
    gasPrice?: number;
    gasLimit?: number;
    requireIdentity?: boolean;
  }) {
    return this.rpc.call<Response>('smartContract.invokeWasm', args);
  }

  invokeWasmRead(args: {
    scriptHash: string;
    operation: string;
    args?: Parameter[];
  }): Promise<any> {
    return this.rpc.call<void>('smartContract.invokeWasmRead', args);
  }
}
