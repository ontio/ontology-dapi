import { Parameter, Response, VmType } from './types';

export interface SmartContractApi {
  /**
   * Initiates a method call to a smart contract with supplied parameters.
   * Addresses can specify additional accounts or identites whose signature will be required.
   *
   * @param scriptHash Hex address of contract
   * @param operation Method name
   * @param args Method parameters
   * @param gasPrice Suggested price of gas
   * @param gasLimit Suggested limit of gas
   * @param requireIdentity Is signature by identity required ?
   * @throws NO_ACCOUNT, MALFORMED_CONTRACT
   */
  invoke({
    scriptHash,
    operation,
    args,
    gasPrice,
    gasLimit,
    requireIdentity
  }: {
    scriptHash: string;
    operation: string;
    args?: Parameter[];
    gasPrice?: number;
    gasLimit?: number;
    requireIdentity?: boolean;
  }): Promise<Response>;

  /**
   * Initiates a method call to a smart contract with supplied parameters in read only mode (preExec).
   *
   * @param scriptHash Hex address of contract
   * @param operation Method name
   * @param args Method parameters
   * @throws MALFORMED_CONTRACT
   */
  invokeRead({
    scriptHash,
    operation,
    args
  }: {
    scriptHash: string;
    operation: string;
    args?: Parameter[];
  }): Promise<any>;

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
   * @deprecated @param needStorage Does the smart contract need storage?
   * @param vmType Vm type; The boolean type is for compatibility. It stands for NEO vm smart contract.
   * @param gasPrice Suggested price of gas
   * @param gasLimit Suggested limit of gas
   * @throws NO_ACCOUNT
   */
  deploy({
    code,
    name,
    version,
    author,
    email,
    description,
    vmType,
    gasPrice,
    gasLimit
  }: {
    code: string;
    name?: string;
    version?: string;
    author?: string;
    email?: string;
    description?: string;
    vmType?: boolean | VmType;
    gasPrice?: number;
    gasLimit?: number;
  }): Promise<void>;

 /**
  * Initiates a method call to a WASM smart contract with supplied parameters.
  * Addresses can specify additional accounts or identites whose signature will be required.
  *
  * @param scriptHash Hex address of contract
  * @param operation Method name
  * @param args Method parameters
  * @param gasPrice Suggested price of gas
  * @param gasLimit Suggested limit of gas
  * @param requireIdentity Is signature by identity required ?
  * @throws NO_ACCOUNT, MALFORMED_CONTRACT
  */
  invokeWasm({
    scriptHash,
    operation,
    args,
    gasPrice,
    gasLimit,
    requireIdentity
  }: {
    scriptHash: string;
    operation: string;
    args?: Parameter[];
    gasPrice?: number;
    gasLimit?: number;
    requireIdentity?: boolean;
  }): Promise<Response>;

  /**
   * Initiates a method call to a WASM smart contract with supplied parameters in read only mode (preExec).
   *
   * @param scriptHash Hex address of contract
   * @param operation Method name
   * @param args Method parameters
   * @throws MALFORMED_CONTRACT
   */
  invokeWasmRead({
    scriptHash,
    operation,
    args
  }: {
    scriptHash: string;
    operation: string;
    args?: Parameter[];
  }): Promise<any>;

}
