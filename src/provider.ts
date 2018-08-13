import { WindowPostMessageProxy } from '@ont-community/window-post-message-proxy';
import { browser } from 'webextension-polyfill-ts';
import { DApi } from './api';
import { MethodCall } from './api/types';

export function registerContentProxy() {
  const windowPostMessageProxy = new WindowPostMessageProxy({ name: 'content-script' });

  windowPostMessageProxy.addHandler({
    handle: async (msg) => {
      const resultPayload = await browser.runtime.sendMessage(msg.payload);
      return {
        payload: resultPayload
      };
    },
    test: (msg) => msg.type === 'dAPI.js'
  });
}

export function registerProvider(provider: DApi) {
  browser.runtime.onMessage.addListener((request: MethodCall, sender) => {
    const subApi: any = (provider as any)[request.path];

    if (subApi != null) {
      // tslint:disable-next-line:ban-types
      const method: Function | undefined = subApi[request.method];

      if (method != null) {
        return method.call(null, ...request.params);
      } else {
        return Promise.reject('Unknown dAPI.js method. (' + request.method + ')');
      }
    } else {
      return Promise.reject('Unknown dAPI.js path. (' + request.path + ')');
    }
  });
}
