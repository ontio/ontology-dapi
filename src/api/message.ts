export interface MessageApi {
  signMessageHash(address: string, messageHash: string): Promise<void>;
  verifyMessageHash(address: string, messageHash: string, signature: string): Promise<boolean>;

  verifyMessageHashPk(publicKey: string, messageHash: string, signature: string): Promise<boolean>;

  signMessage(address: string, message: string): Promise<void>;
  verifyMessage(address: string, message: string, signature: string): Promise<boolean>;
  verifyMessagePk(publicKey: string, message: string, signature: string): Promise<boolean>;
}
