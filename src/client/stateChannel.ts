import { StateChannelApi } from '../api/stateChannel';
import { Response } from '../api/types';
import { call } from './proxy';

export const stateChannelApi: StateChannelApi = {
    sign(args) {
        return call<Response>('stateChannel.sign', args);
    }
};
