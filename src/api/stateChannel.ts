import { Signature } from './types';

export interface StateChannelApi {

  login(
    password: string
  ): Promise<string>;

  sign({
        channelId,
        scriptHash,
        message
    }: {
      channelId: string,
      scriptHash: string,
      message: string
    }): Promise<Signature>;
}
