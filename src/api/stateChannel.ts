import { Response } from './types';

export interface StateChannelApi {
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
