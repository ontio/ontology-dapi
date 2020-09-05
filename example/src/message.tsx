import { client, Signature } from '@ont-dev/ontology-dapi';
import * as React from 'react';
import { Field, Form } from 'react-final-form';
import { RouterProps } from 'react-router';

// tslint:disable:max-line-length

export const Message: React.SFC<RouterProps> = (props) => {
  async function onSignMessage(values: any) {
    const message: string = values.message;

    try {
      const result = await client.api.message.signMessage({ message });
      // tslint:disable-next-line:no-console
      console.log('signature:', result);
      alert('onSignMessage finished, signature:' + result.data);
    } catch (e) {
      alert('onSignMessage canceled');
      // tslint:disable-next-line:no-console
      console.log('onSignMessage error:', e);
    }
  }

  async function onVerifyMessage(values: any) {
    const message: string = values.message;
    const data: string = values.signature;
    const publicKey: string = values.publicKey;

    const signature: Signature = {
      data,
      publicKey
    };

    try {
      const result = await client.api.message.verifyMessage({ message, signature });
      alert('onVerifyMessage finished, result:' + result);
    } catch (e) {
      alert('onVerifyMessage canceled');
      // tslint:disable-next-line:no-console
      console.log('onVerifyMessage error:', e);
    }
  }

  function onBack() {
    props.history.goBack();
  }

  return (
    <div>
      <h2>Sign message</h2>
      <Form
        initialValues={{
          message: 'test message'
        }}
        onSubmit={onSignMessage}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h4>Message</h4>
            <Field name="message" component="textarea" />

            <br />
            <br />
            <button type="submit">Sign</button>
          </form>
        )}
      />
      <hr />
      <h2>Verify message</h2>
      <Form
        initialValues={{
          message: 'test message',
          signature:
            '01d40d75bc987c8a173865f28ab4943fbc4b4c8bfcd714cd4fbffbffac9c61c4dc1aa4e68a750c769dc4321858481ee06793027256b9e47e8cab35ae10e861e9e4',
          publicKey: '02f8c89a3ba4b6559f7ccd126d1edf633ede885ab77a70014cece8c51567939019'
        }}
        onSubmit={onVerifyMessage}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h4>Message</h4>
            <Field name="message" component="textarea" />

            <h4>Signature</h4>
            <Field name="signature" component="textarea" />

            <h4>Public Key</h4>
            <Field name="publicKey" component="textarea" />

            <br />
            <br />
            <button type="submit">Verify</button>
          </form>
        )}
      />
      <hr />
      <button onClick={onBack}>Back</button>
    </div>
  );
};
