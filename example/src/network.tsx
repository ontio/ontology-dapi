import { client } from '@ont-dev/ontology-dapi';
import * as React from 'react';
import { RouterProps } from 'react-router';

export const Network: React.SFC<RouterProps> = (props) => {
  async function onGetBlockHeight() {
    const height = await client.api.network.getBlockHeight();
    alert('onGetBlockHeight: ' + height);
  }

  async function onGetBlock() {
    const block = await client.api.network.getBlock({ block: 1 });
    alert('onGetBlock: ' + JSON.stringify(block));
  }

  async function onGetTransaction() {
    const transaction = await client.api.network.getTransaction({
      txHash: '314e24e5bb0bd88852b2f13e673e5dcdfd53bdab909de8b9812644d6871bc05f'
    });
    // tslint:disable-next-line:no-console
    console.log('onGetTransaction: ' + JSON.stringify(transaction));
  }

  async function onGetBalance() {
    const balance = await client.api.network.getBalance({ address: 'AcyLq3tokVpkMBMLALVMWRdVJ83TTgBUwU' });
    alert('onGetBalance: ' + JSON.stringify(balance));
  }

  async function onGetSmartCodeEvent() {
    // tslint:disable-next-line:max-line-length
    const events = await client.api.network.getSmartCodeEvent({
      // value: '2b6dc8e0b54742d1a09435532187637ed39dc8bc7faaac2f792954dc65699613'
      value: '3a3f98df1d57be1644025addf041d4402b60091fbc63d0e107e7d264f1965b29'
    });
    // tslint:disable-next-line:no-console
    console.log('onGetSmartCodeEvent: ' + JSON.stringify(events));
  }

  async function onGetUnboundOng() {
    const balance = await client.api.network.getUnboundOng({ address: 'AcyLq3tokVpkMBMLALVMWRdVJ83TTgBUwU' });
    alert('onGetUnboundOng: ' + JSON.stringify(balance));
  }

  // async function onGetGrantOng() {
  //   const balance = await client.api.network.getGrantOng({ address: 'AcyLq3tokVpkMBMLALVMWRdVJ83TTgBUwU' });
  //   alert('onGetGrantOng: ' + JSON.stringify(balance));
  // }

  async function onGetGasPrice() {
    const balance = await client.api.network.getGasPrice();
    alert('onGetGasPrice: ' + JSON.stringify(balance));
  }

  async function onGetNetwork() {
    const network = await client.api.network.getNetwork();
    alert('onGetNetwork: ' + JSON.stringify(network));
  }

  function onBack() {
    props.history.goBack();
  }

  return (
    <div>
      <button onClick={onGetNetwork}>getNetwork</button>
      <hr />
      <button onClick={onGetBlockHeight}>getBlockHeight</button>
      <hr />
      <button onClick={onGetBlock}>getBlock</button>
      <hr />
      <button onClick={onGetTransaction}>getTransaction</button>
      <hr />
      <button onClick={onGetBalance}>getBalance</button>
      <hr />
      <button onClick={onGetUnboundOng}>getUnboundOng</button>
      <hr />
      <button onClick={onGetGasPrice}>getGasPrice</button>
      <hr />
      <button onClick={onGetSmartCodeEvent}>getSmartCodeEvent</button>
      <hr />
      <button onClick={onBack}>Back</button>
    </div>
  );
};
