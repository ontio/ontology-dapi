import { WindowPostMessageProxy } from '@ont-community/window-post-message-proxy';
import { MethodCall } from '../api/types';

let windowPostMessageProxy: WindowPostMessageProxy;

export function registerClient() {
  windowPostMessageProxy = new WindowPostMessageProxy({ name: 'page' });
}

export async function call(path: string, method: string, ...params: any[]) {
  const msg: MethodCall = { path, method, params };

  const result = await windowPostMessageProxy.postMessage<any>(
    window,
    {
      payload: msg,
      type: 'dAPI.js'
    },
    'content-script'
  );

  return result.payload;
}
