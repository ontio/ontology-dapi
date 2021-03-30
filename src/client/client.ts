import { WindowPostMessageProxy } from '@ont-community/window-post-message-proxy';
import { DApiImp } from '.';
import { DApi, ExtensionType } from '../api';
import { Rpc } from '../rpc/rpc';

let legacyDApi: DApi;

interface RegisterClientParams {
  logMessages?: boolean;
  logWarnings?: boolean;
  extension?: ExtensionType;
}

function registerClient({
  logMessages = false,
  logWarnings = false,
  extension = ExtensionType.Cyano
}: RegisterClientParams): DApi {
  const windowProxy = new WindowPostMessageProxy({
    name: 'page',
    target: extension === ExtensionType.Cyano ? 'content-script' : `content-script-${extension}`,
    logMessages,
    suppressWarnings: !logWarnings
  });
  const rpc = new Rpc({
    source: 'page',
    destination: 'background',
    logMessages: false,
    postMessage: (msg) => windowProxy.postMessage(window, msg)
  });
  legacyDApi = new DApiImp(rpc);
  return legacyDApi;
}

export { legacyDApi as api, registerClient };
