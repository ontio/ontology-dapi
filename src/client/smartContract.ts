import { SmartContractApi } from '../api/smartContract';
import { Parameter, Response } from '../api/types';
import { call } from './proxy';

export const smartContractApi: SmartContractApi = {
  invoke(
    contract: string,
    method: string,
    parameters: Parameter[],
    gasPrice: number,
    gasLimit: number,
    requireIdentity: boolean
  ) {
    return call<Response>('smartContract.invoke', contract, method, parameters, gasPrice, gasLimit, requireIdentity);
  },

  invokeRead(contract: string, method: string, parameters: Parameter[]): Promise<any> {
    return call<void>('smartContract.invokeRead', contract, method, parameters);
  },

  deploy(
    code: string,
    name: string,
    version: string,
    author: string,
    email: string,
    description: string,
    needStorage: boolean,
    gasPrice: number,
    gasLimit: number
  ): Promise<void> {
    return call<void>(
      'smartContract.deploy',
      code,
      name,
      version,
      author,
      email,
      description,
      needStorage,
      gasPrice,
      gasLimit
    );
  }
};
