import { WindowPostMessageProxy } from '@ont-community/window-post-message-proxy';
import { browser } from 'webextension-polyfill-ts';
import { DApi } from './api';
import { MethodCall } from './api/types';

export function registerContentProxy() {
  const windowPostMessageProxy = new WindowPostMessageProxy({ name: 'content-script' });

  windowPostMessageProxy.addHandler({
    handle: (msg) => browser.runtime.sendMessage(msg),
    test: (msg) => msg.type === 'dAPI.js'
  });
}

export function registerProvider(provider: DApi) {
  browser.runtime.onMessage.addListener((msg: any, sender) => {
    if (msg.type === 'dAPI.js') {
      const request = msg as MethodCall;
      const subApi: any = (provider as any)[request.path];

      if (subApi != null) {
        // tslint:disable-next-line:ban-types
        const method: Function | undefined = subApi[request.method];

        if (method != null) {
          try {
            const promise: Promise<any> = method.call(null, ...request.params);
            return promise.then((result) => Promise.resolve({ result }));
          } catch (e) {
            return Promise.resolve({ error: e });
          }
        } else {
          return Promise.resolve({ error: 'Unknown dAPI.js method. (' + request.method + ')' });
        }
      } else {
        return Promise.resolve({ error: 'Unknown dAPI.js path. (' + request.path + ')' });
      }
    }
  });
}
