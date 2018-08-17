import { Parameter } from './types';

export interface SmartContractApi {
  invoke(
    account: string,
    contract: string,
    method: string,
    parameters: Parameter[],
    gasPrice: number,
    gasLimit: number,
    addresses: string[]
  ): Promise<void>;

  invokeRead(contract: string, method: string, parameters: Parameter[]): Promise<any>;

  deploy(
    account: string,
    code: string,
    name: string,
    version: string,
    author: string,
    email: string,
    description: string,
    needStorage: boolean,
    gasPrice: number,
    gasLimit: number
  ): Promise<void>;
}
