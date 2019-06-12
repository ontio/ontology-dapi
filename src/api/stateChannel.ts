import { Response } from './types';

export interface StateChannelApi {

  login(
    password: string
  ): Promise<Response>;

  sign({
        channelId,
        scriptHash,
        message
    }: {
      channelId: string,
      scriptHash: string,
      message: string
    }): Promise<Response>;
}
