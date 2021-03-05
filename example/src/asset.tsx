import { client } from '@ont-dev/ontology-dapi';
import * as React from 'react';
import { Field, Form } from 'react-final-form';
import { RouterProps } from 'react-router';

export const Asset: React.SFC<RouterProps> = (props) => {
  async function onGetAccount() {
    const account = await client.api.asset.getAccount();
    alert('onGetAccount: ' + JSON.stringify(account));
  }

  async function onGetPublicKey() {
    const account = await client.api.asset.getPublicKey();
    alert('onGetPublicKey: ' + JSON.stringify(account));
  }

  async function onSend(values: any) {
    const to: string = values.recipient;
    const amount: string = values.amount;
    const asset: 'ONT' | 'ONG' = values.asset;

    try {
      const result = await client.api.asset.send({ to, asset, amount });
      alert('onSend finished, txHash:' + result);
    } catch (e) {
      alert('onSend canceled');
      // tslint:disable-next-line:no-console
      console.log('onSend error:', e);
    }
  }

  function onBack() {
    props.history.goBack();
  }

  return (
    <div>
      <button onClick={onGetAccount}>getAccount</button>
      <hr />
      <button onClick={onGetPublicKey}>getPublicKey</button>
      <hr />

      <h2>Transfer</h2>
      <Form
        initialValues={{
          amount: '10',
          asset: 'ONT',
          recipient: 'AXCyYV4DNmmsqZn9qJEqHqpacVxcr7X7ns'
        }}
        onSubmit={onSend}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h4>Recipient</h4>
            <Field name="recipient" component="input" />

            <h4>Amount</h4>
            <Field name="amount" component="input" type="number" />

            <h4>Asset</h4>
            <Field name="asset" component="select">
              <option value="ONT">ONT</option>
              <option value="ONG">ONG</option>
            </Field>

            <br />
            <br />
            <button type="submit">Make transfer</button>
          </form>
        )}
      />
      <hr />
      <button onClick={onBack}>Back</button>
    </div>
  );
};
