import { Signature } from './types';

export interface StateChannelApi {

  login(): Promise<string>;

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
