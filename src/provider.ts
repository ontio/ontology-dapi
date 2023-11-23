import { WindowPostMessageProxy } from '@ont-community/window-post-message-proxy';
import { DApi, ExtensionType } from './api';
import { MethodType, Rpc } from './rpc/rpc';

let rpc: Rpc;

interface RegisterContentProxyParams {
  logMessages?: boolean;
  logWarnings?: boolean;
  extension?: ExtensionType;
}

export function registerContentProxy({
  logMessages = false,
  logWarnings = false,
  extension = ExtensionType.Cyano
}: RegisterContentProxyParams) {
  const { browser } = require('webextension-polyfill-ts');
  const windowPostMessageProxy = new WindowPostMessageProxy({
    logMessages,
    suppressWarnings: !logWarnings,
    name: extension === ExtensionType.Cyano ? 'content-script' : `content-script-${extension}`,
    target: 'page'
  });

  windowPostMessageProxy.addHandler({
    handle: (msg) => browser.runtime.sendMessage(msg),
    test: (msg) => msg.type === 'dAPI.js' && msg.source === 'page'
  });
}

export function registerProvider({ provider, logMessages }: { provider: DApi; logMessages: boolean }) {
  const { browser } = require('webextension-polyfill-ts');
  rpc = new Rpc({
    source: 'background',
    destination: 'page',
    logMessages,
    addListener: browser.runtime.onMessage.addListener
  });

  function checkedRegister(name: string, method: MethodType | undefined) {
    if (method === undefined) {
      throw new Error('DApi provider does not implement ' + name);
    }

    rpc.register(name, method);
  }

  checkedRegister('asset.getAccount', provider.asset.getAccount);
  checkedRegister('asset.getPublicKey', provider.asset.getPublicKey);
  checkedRegister('asset.send', provider.asset.send);
  checkedRegister('asset.sendV2', provider.asset.sendV2);
  checkedRegister('asset.approve', provider.asset.approve);
  checkedRegister('asset.getAllowance', provider.asset.getAllowance);

  checkedRegister('identity.getIdentity', provider.identity.getIdentity);
  checkedRegister('identity.getDDO', provider.identity.getDDO);
  checkedRegister('identity.addAttributes', provider.identity.addAttributes);
  checkedRegister('identity.removeAttribute', provider.identity.removeAttribute);
  checkedRegister('identity.addCredential', provider.identity.addCredential);
  checkedRegister('identity.getCredentials', provider.identity.getCredentials);

  checkedRegister('message.signMessage', provider.message.signMessage);
  checkedRegister('message.verifyMessage', provider.message.verifyMessage);
  checkedRegister('message.signMessageHash', provider.message.signMessageHash);
  checkedRegister('message.verifyMessageHash', provider.message.verifyMessageHash);

  checkedRegister('network.getAllowance', provider.network.getAllowance);
  checkedRegister('network.getAllowanceV2', provider.network.getAllowanceV2);
  checkedRegister('network.getBalance', provider.network.getBalance);
  checkedRegister('network.getBalanceV2', provider.network.getBalanceV2);
  checkedRegister('network.getBlock', provider.network.getBlock);
  checkedRegister('network.getBlockHeight', provider.network.getBlockHeight);
  checkedRegister('network.getMerkleProof', provider.network.getMerkleProof);
  checkedRegister('network.getNetwork', provider.network.getNetwork);
  checkedRegister('network.getNodeCount', provider.network.getNodeCount);
  checkedRegister('network.getStorage', provider.network.getStorage);
  checkedRegister('network.getTransaction', provider.network.getTransaction);
  checkedRegister('network.isConnected', provider.network.isConnected);

  checkedRegister('network.getUnboundOng', provider.network.getUnboundOng);
  checkedRegister('network.getContract', provider.network.getContract);
  checkedRegister('network.getSmartCodeEvent', provider.network.getSmartCodeEvent);
  checkedRegister('network.getBlockHeightByTxHash', provider.network.getBlockHeightByTxHash);
  checkedRegister('network.getBlockHash', provider.network.getBlockHash);
  checkedRegister('network.getBlockTxsByHeight', provider.network.getBlockTxsByHeight);
  checkedRegister('network.getGasPrice', provider.network.getGasPrice);
  checkedRegister('network.getGrantOng', provider.network.getGrantOng);
  checkedRegister('network.getMempoolTxCount', provider.network.getMempoolTxCount);
  checkedRegister('network.getMempoolTxState', provider.network.getMempoolTxState);
  checkedRegister('network.getVersion', provider.network.getVersion);

  checkedRegister('smartContract.invoke', provider.smartContract.invoke);
  checkedRegister('smartContract.invokeRead', provider.smartContract.invokeRead);
  checkedRegister('smartContract.deploy', provider.smartContract.deploy);
  checkedRegister('smartContract.invokeWasm', provider.smartContract.invokeWasm);
  checkedRegister('smartContract.invokeWasmRead', provider.smartContract.invokeWasmRead);

  checkedRegister('nativeContract.invokeBuildRegisterOntid', provider.nativeContract.invokeBuildRegisterOntid);

  checkedRegister('provider.getProvider', provider.provider.getProvider);

  checkedRegister('stateChannel.login', provider.stateChannel.login);
  checkedRegister('stateChannel.sign', provider.stateChannel.sign);

  checkedRegister('governance.stakePeers', provider.governance.stakePeers);
  checkedRegister('governance.redeemPeers', provider.governance.redeemPeers);
  checkedRegister('governance.withdrawFeeReward', provider.governance.withdrawFeeReward);
  checkedRegister('governance.withdrawUnfrozenOnt', provider.governance.withdrawUnfrozenOnt);
  checkedRegister('governance.withdrawPeerUnboundOng', provider.governance.withdrawPeerUnboundOng);
  checkedRegister('governance.getAllPeerPool', provider.governance.getAllPeerPool);
  checkedRegister('governance.getAttributes', provider.governance.getAttributes);
  checkedRegister('governance.getStakeInfo', provider.governance.getStakeInfo);
  checkedRegister('governance.getRewardFeeAmount', provider.governance.getRewardFeeAmount);
}
