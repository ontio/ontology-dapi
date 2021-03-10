import { WindowPostMessageProxy } from '@ont-community/window-post-message-proxy';
import { ExtensionType } from '../provider';
import { Rpc } from '../rpc/rpc';

let windowProxy: WindowPostMessageProxy;
let rpc: Rpc;

interface RegisterClientParams {
  logMessages?: boolean;
  logWarnings?: boolean;
  extension?: ExtensionType;
}

export function registerClient({
  logMessages = false,
  logWarnings = false,
  extension = ExtensionType.Cyano
}: RegisterClientParams) {
  windowProxy = new WindowPostMessageProxy({
    name: 'page',
    target: extension === ExtensionType.Cyano ? 'content-script' : `content-script-${extension}`,
    logMessages,
    suppressWarnings: !logWarnings
  });
  rpc = new Rpc({
    source: 'page',
    destination: 'background',
    logMessages: false,
    postMessage: (msg) => windowProxy.postMessage(window, msg)
  });
}

export async function call<RESULT>(method: string, ...params: any[]) {
  return rpc.call<RESULT>(method, ...params);
}
