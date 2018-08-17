import { Parameter } from './types';

export interface SmartContractApi {
  /**
   * Initiates a method call to a smart contract with supplied parameters.
   * The account will be set as payer of the transaction.
   * Addresses can specify additional accounts or identites whose signature will be required.
   *
   * @param account Own account
   * @param contract Hex address of contract
   * @param method Method name
   * @param parameters Method parameters
   * @param gasPrice Suggested price of gas
   * @param gasLimit Suggested limit of gas
   * @param addresses Additional own accounts and identites
   * @throws NO_ACCOUNT, WRONG_ACCOUNT, MALFORMED_ACCOUNT, MALFORMED_CONTRACT, MALFORMED_ADDRESS
   */
  invoke(
    account: string,
    contract: string,
    method: string,
    parameters: Parameter[],
    gasPrice: number,
    gasLimit: number,
    addresses: string[]
  ): Promise<void>;

  /**
   * Initiates a method call to a smart contract with supplied parameters in read only mode (preExec).
   *
   * @param contract Hex address of contract
   * @param method Method name
   * @param parameters Method parameters
   * @throws MALFORMED_CONTRACT
   */
  invokeRead(contract: string, method: string, parameters: Parameter[]): Promise<any>;

  /**
   * Initiates deployment of smart contract.
   * The code parameter represents compiled code of smart contract for NEOVM.
   * The account will be set as payer of the transaction.
   *
   * @param account Own account
   * @param code Compiled smart contract code
   * @param name Name
   * @param version Version
   * @param author Author
   * @param email Email
   * @param description Description
   * @param needStorage Does the smart contract need storage?
   * @param gasPrice Suggested price of gas
   * @param gasLimit Suggested limit of gas
   * @throws NO_ACCOUNT, WRONG_ACCOUNT, MALFORMED_ACCOUNT
   */
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
