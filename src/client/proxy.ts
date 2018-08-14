import { WindowPostMessageProxy } from '@ont-community/window-post-message-proxy';
import { MethodCall } from '../api/types';

let windowPostMessageProxy: WindowPostMessageProxy;

export function registerClient() {
  windowPostMessageProxy = new WindowPostMessageProxy({ name: 'page' });
}

export async function call(path: string, method: string, ...params: any[]) {
  const msg: MethodCall = { path, method, params, type: 'dAPI.js' };

  const response = await windowPostMessageProxy.postMessage<any>(window, msg, 'content-script');
  return response.result;
}
