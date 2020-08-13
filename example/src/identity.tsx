import { client } from '@ont-dev/ontology-dapi';
import * as React from 'react';
import { Field, Form } from 'react-final-form';
import { RouterProps } from 'react-router';

export const Identity: React.SFC<RouterProps> = (props) => {
  async function onAddClaim(values: any) {
    const claim: string = values.claim;

    try {
      const result = await client.api.identity.addClaims({ claims: [claim] });
      alert('onAddClaim finished');
    } catch (e) {
      alert('onAddClaim canceled');
      // tslint:disable-next-line:no-console
      console.log('onAddClaim error:', e);
    }
  }

  async function onGetClaims() {
    const claims  = await client.api.identity.getClaims();
    console.log(claims);
  }

  function onBack() {
    props.history.goBack();
  }

  return (
    <div>
      <h2>Add Claim</h2>
      <Form
        initialValues={{
          claim: '123456'
        }}
        onSubmit={onAddClaim}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h4>Claim</h4>
            <Field name="claim" component="textarea" />

            <br />
            <button type="submit">addClaims</button>
          </form>
        )}
      />
      <hr />
      <button onClick={onGetClaims}>getClaims</button>
      <hr />
      <button onClick={onBack}>Back</button>
    </div>
  );
};
