import { client } from '@ont-dev/ontology-dapi';
import * as React from 'react';
import { Field, Form } from 'react-final-form';
import { RouterProps } from 'react-router';

export const Oep4: React.SFC<RouterProps> = (props) => {
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
      <h2>Transfer</h2>
      <Form
        initialValues={{
          amount: '10',
          asset: 'MYT',
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
            <Field name="asset" component="input" />

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
