import { WindowPostMessageProxy } from '@ont-community/window-post-message-proxy';
import { Rpc } from '../rpc/rpc';

let windowProxy: WindowPostMessageProxy;
let rpc: Rpc;

export function registerClient() {
  windowProxy = new WindowPostMessageProxy({ name: 'page', target: 'content-script', logMessages: true });
  rpc = new Rpc({
    source: 'page',
    destination: 'background',
    postMessage: windowProxy.postMessage.bind(windowProxy, window)
  });
}

export async function call<RESULT>(method: string, ...params: any[]) {
  return rpc.call<RESULT>(method, ...params);
}
