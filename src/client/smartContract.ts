import { SmartContractApi } from '../api/smartContract';
import { Response } from '../api/types';
import { call } from './proxy';

export const smartContractApi: SmartContractApi = {
  invoke(args) {
    return call<Response>('smartContract.invoke', args);
  },

  invokeRead(args): Promise<any> {
    return call<void>('smartContract.invokeRead', args);
  },

  deploy(args): Promise<void> {
    return call<void>('smartContract.deploy', args);
  }
};
