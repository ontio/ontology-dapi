import { Parameter, Response } from './types';

export interface SmartContractApi {
  /**
   * Initiates a method call to a smart contract with supplied parameters.
   * Addresses can specify additional accounts or identites whose signature will be required.
   *
   * @param contract Hex address of contract
   * @param method Method name
   * @param parameters Method parameters
   * @param gasPrice Suggested price of gas
   * @param gasLimit Suggested limit of gas
   * @param requireIdentity Is signature by identity required ?
   * @throws NO_ACCOUNT, MALFORMED_CONTRACT
   */
  invoke(
    contract: string,
    method: string,
    parameters: Parameter[],
    gasPrice: number,
    gasLimit: number,
    requireIdentity: boolean
  ): Promise<Response>;

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
   *
   * @param code Compiled smart contract code
   * @param name Name
   * @param version Version
   * @param author Author
   * @param email Email
   * @param description Description
   * @param needStorage Does the smart contract need storage?
   * @param gasPrice Suggested price of gas
   * @param gasLimit Suggested limit of gas
   * @throws NO_ACCOUNT
   */
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
  ): Promise<void>;
}
