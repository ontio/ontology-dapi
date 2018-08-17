import { SmartContractApi } from '../api/smartContract';
import { Parameter } from '../api/types';
import { call } from './proxy';

export const smartContractApi: SmartContractApi = {
  invoke(
    account: string,
    contract: string,
    method: string,
    parameters: Parameter[],
    gasPrice: number,
    gasLimit: number,
    addresses: string[]
  ): Promise<void> {
    return call<void>('smartContract.invoke', account, contract, method, parameters, gasPrice, gasLimit, addresses);
  },

  invokeRead(contract: string, method: string, parameters: Parameter[]): Promise<any> {
    return call<void>('smartContract.invokeRead', contract, method, parameters);
  },

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
  ): Promise<void> {
    return call<void>(
      'smartContract.deploy',
      account,
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
