import { WindowPostMessageProxy } from '@ont-community/window-post-message-proxy';
import { browser } from 'webextension-polyfill-ts';
import { DApi } from './api';
import { MethodType, Rpc } from './rpc/rpc';

let rpc: Rpc;

export function registerContentProxy() {
  const windowPostMessageProxy = new WindowPostMessageProxy({
    name: 'content-script',
    target: 'page'
  });

  windowPostMessageProxy.addHandler({
    handle: (msg) => browser.runtime.sendMessage(msg),
    test: (msg) => msg.type === 'dAPI.js'
  });
}

export function registerProvider(provider: DApi) {
  rpc = new Rpc({
    source: 'background',
    destination: 'page',
    logMessages: true,
    addListener: browser.runtime.onMessage.addListener
  });

  function checkedRegister(name: string, method: MethodType | undefined) {
    if (method === undefined) {
      throw new Error('DApi provider does not implement ' + name);
    }

    rpc.register(name, method);
  }

  checkedRegister('asset.getDefaultAccount', provider.asset.getDefaultAccount);
  checkedRegister('asset.getOwnAccounts', provider.asset.getOwnAccounts);
  checkedRegister('asset.makeTransfer', provider.asset.makeTransfer);

  checkedRegister('network.getAllowance', provider.network.getAllowance);
  checkedRegister('network.getBalance', provider.network.getBalance);
  checkedRegister('network.getBlock', provider.network.getBlock);
  checkedRegister('network.getBlockHeight', provider.network.getBlockHeight);
  checkedRegister('network.getGenerateBlockTime', provider.network.getGenerateBlockTime);
  checkedRegister('network.getMerkleProof', provider.network.getMerkleProof);
  checkedRegister('network.getNetwork', provider.network.getNetwork);
  checkedRegister('network.getNodeCount', provider.network.getNodeCount);
  checkedRegister('network.getStorage', provider.network.getStorage);
  checkedRegister('network.getTransaction', provider.network.getTransaction);
  checkedRegister('network.isConnected', provider.network.isConnected);
}
