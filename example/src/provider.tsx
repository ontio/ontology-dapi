import { client } from '@ont-dev/ontology-dapi';
import * as React from 'react';
import { RouterProps } from 'react-router';

export const Provider: React.SFC<RouterProps> = (props) => {
  async function onGetProvider() {
    try {
      const result = await client.api.provider.getProvider();
      alert('onGetProvider: ' + JSON.stringify(result));
    } catch (e) {
      alert('No dAPI provider istalled.');
    }
  }

  function onBack() {
    props.history.goBack();
  }

  return (
    <div>
      <button onClick={onGetProvider}>GetProvider</button>
      <hr />
      <button onClick={onBack}>Back</button>
    </div>
  );
};
