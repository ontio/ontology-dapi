import { Response, NativeContractApiParams } from './types';

export interface NativeContractApi {
  /**
   * Registers Identity.
   *
   * Register ontid with public key
   *
   * @param ontid User's ONT ID
   * @param publicKey Public key
   * @param gasPrice Gas price
   * @param gasLimit Gas limit
   * @param payer Payer
   */
  invokeBuildRegisterOntid({
    ontid,
    publicKey,
    gasPrice,
    gasLimit,
    payer
  }: NativeContractApiParams): Promise<Response>;
}
