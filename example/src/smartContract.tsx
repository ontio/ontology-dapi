import arrayMutators from 'final-form-arrays';
import { client, ParameterType } from '@ont-dev/ontology-dapi';
import * as React from 'react';
import { Field, Form } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';
import { RouterProps } from 'react-router';

// tslint:disable:max-line-length
export const SmartContract: React.SFC<RouterProps> = (props) => {
  async function onScCall(values: any) {
    const scriptHash: string = values.contract;
    const operation: string = values.method;
    const gasPrice: number = Number(values.gasPrice);
    const gasLimit: number = Number(values.gasLimit);
    const requireIdentity: boolean = values.requireIdentity;
    const parametersRaw: any[] = values.parameters;

    const args = parametersRaw.map((raw) => ({ type: raw.type, value: convertValue(raw.value, raw.type) }));
    try {
      const result = await client.api.smartContract.invoke({
        scriptHash,
        operation,
        args,
        gasPrice,
        gasLimit,
        requireIdentity
      });
      // tslint:disable-next-line:no-console
      console.log('onScCall finished, result:' + JSON.stringify(result));
    } catch (e) {
      alert('onScCall canceled');
      // tslint:disable-next-line:no-console
      console.log('onScCall error:', e);
    }
  }

  async function onScCallRead(values: any) {
    const scriptHash: string = values.contract;
    const operation: string = values.method;
    const parametersRaw: any[] = values.parameters;

    const args = parametersRaw.map((raw) => ({ type: raw.type, value: convertValue(raw.value, raw.type) }));

    try {
      const result = await client.api.smartContract.invokeRead({ scriptHash, operation, args });
      // tslint:disable-next-line:no-console
      console.log('onScCallRead finished, result:' + JSON.stringify(result));
    } catch (e) {
      alert('onScCallRead canceled');
      // tslint:disable-next-line:no-console
      console.log('onScCallRead error:', e);
    }
  }

  async function onScCallReadArray(values: any) {
    const scriptHash: string = values.contract;
    const operation: string = values.method;
    const parameter0: string = values.parameter0;
    const parameter1: string = values.parameter1;
    const parameter0type: any = values.parameter0type;
    const parameter1type: any = values.parameter1type;

    const args = [
      {
        type: 'Array' as any,
        value: [
          { type: parameter0type, value: convertValue(parameter0, parameter0type) },
          { type: parameter1type, value: convertValue(parameter1, parameter1type) }
        ]
      }
    ];

    try {
      const result = await client.api.smartContract.invokeRead({ scriptHash, operation, args });
      // tslint:disable-next-line:no-console
      console.log('onScCallRead finished, result:' + JSON.stringify(result));
    } catch (e) {
      alert('onScCallRead canceled');
      // tslint:disable-next-line:no-console
      console.log('onScCallRead error:', e);
    }
  }

  async function onScCallReadMap(values: any) {
    const scriptHash: string = values.contract;
    const operation: string = values.method;
    const parameter0: string = values.parameter0;
    const parameter1: string = values.parameter1;
    const parameter0type: any = values.parameter0type;
    const parameter1type: any = values.parameter1type;
    const parameter0name: string = values.parameter0name;
    const parameter1name: string = values.parameter1name;

    const args = [
      {
        type: 'Map' as any,
        value: {
          [parameter0name]: { type: parameter0type, value: convertValue(parameter0, parameter0type) },
          [parameter1name]: { type: parameter1type, value: convertValue(parameter1, parameter1type) }
        }
      }
    ];

    try {
      const result = await client.api.smartContract.invokeRead({ scriptHash, operation, args });
      // tslint:disable-next-line:no-console
      console.log('onScCallRead finished, result:' + JSON.stringify(result));
    } catch (e) {
      alert('onScCallRead canceled');
      // tslint:disable-next-line:no-console
      console.log('onScCallRead error:', e);
    }
  }

  function convertValue(value: string, type: ParameterType) {
    switch (type) {
      case 'Boolean':
        return Boolean(value);
      case 'Integer':
        return Number(value);
      case 'ByteArray':
        return value;
      case 'String':
        return client.api.utils.strToHex(value);
    }
  }

  async function onScDeploy(values: any) {
    const code: string = values.code;
    const name: string = values.name;
    const version: string = values.version;
    const author: string = values.author;
    const email: string = values.email;
    const description: string = values.description;
    const needStorage: boolean = values.needStorage;
    const gasPrice: number = Number(values.gasPrice);
    const gasLimit: number = Number(values.gasLimit);

    try {
      const result = await client.api.smartContract.deploy({
        code,
        name,
        version,
        author,
        email,
        description,
        // TODO
        vmType: needStorage,
        // needStorage,
        gasPrice,
        gasLimit
      });
      alert('onScDeploy finished, result:' + JSON.stringify(result));
    } catch (e) {
      alert('onScDeploy canceled');
      // tslint:disable-next-line:no-console
      console.log('onScDeploy error:', e);
    }
  }

  function onBack() {
    props.history.goBack();
  }

  return (
    <div>
      <h2>ScCall</h2>
      <Form
        initialValues={{
          contract: 'bd76a5917e0444d4b615b87c5912362164676dc7',
          method: 'Add',
          gasPrice: '500',
          gasLimit: '100000000',
          parameters: [{ type: 'Integer', value: '5' }, { type: 'Integer', value: '4' }]
        }}
        mutators={Object.assign({}, arrayMutators) as any}
        onSubmit={onScCall}
        render={({
          form: {
            mutators: { push, pop }
          },
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
            <h4>Contract</h4>
            <Field name="contract" component="input" />

            <h4>Method</h4>
            <Field name="method" component="input" />

            <h4>Gas price</h4>
            <Field name="gasPrice" component="input" type="number" />

            <h4>Gas limit</h4>
            <Field name="gasLimit" component="input" type="number" />

            <h4>Require identity sign</h4>
            <Field name="requireIdentity" component="input" type="checkbox" />

            <h4>Parameters</h4>
            <button type="button" onClick={() => push('parameters', { type: 'Integer', value: '' })}>
              Add Parameter
            </button>
            <FieldArray name="parameters">
              {({ fields }) =>
                fields.map((name, index) => (
                  <div key={index}>
                    <label>Type</label>
                    <Field name={`${name}.type`} component="select">
                      <option value="Boolean">Boolean</option>
                      <option value="Integer">Integer</option>
                      <option value="ByteArray">ByteArray</option>
                      <option value="String">String</option>
                    </Field>
                    <label>Value</label>
                    <Field name={`${name}.value`} component="input" />
                    <span onClick={() => fields.remove(index)} style={{ cursor: 'pointer' }}>
                      ❌
                    </span>
                  </div>
                ))
              }
            </FieldArray>
            <br />
            <br />
            <button type="submit">Call SC</button>
          </form>
        )}
      />
      <hr />
      <h2>ScCall read</h2>
      <Form
        initialValues={{
          contract: 'b4c21cf0d9a33613a63e6af4b5cb95e9d532d3eb',
          method: 'Hello',
          parameters: [{ type: 'Integer', value: '5' }]
        }}
        mutators={Object.assign({}, arrayMutators) as any}
        onSubmit={onScCallRead}
        render={({
          form: {
            mutators: { push, pop }
          },
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
            <h4>Contract</h4>
            <Field name="contract" component="input" />

            <h4>Method</h4>
            <Field name="method" component="input" />

            <h4>Parameters</h4>
            <button type="button" onClick={() => push('parameters', { type: 'Integer', value: '' })}>
              Add Parameter
            </button>
            <FieldArray name="parameters">
              {({ fields }) =>
                fields.map((name, index) => (
                  <div key={index}>
                    <label>Type</label>
                    <Field name={`${name}.type`} component="select">
                      <option value="Boolean">Boolean</option>
                      <option value="Integer">Integer</option>
                      <option value="ByteArray">ByteArray</option>
                      <option value="String">String</option>
                    </Field>
                    <label>Value</label>
                    <Field name={`${name}.value`} component="input" />
                    <span onClick={() => fields.remove(index)} style={{ cursor: 'pointer' }}>
                      ❌
                    </span>
                  </div>
                ))
              }
            </FieldArray>
            <br />
            <br />
            <button type="submit">Call SC ReadOnly</button>
          </form>
        )}
      />
      <hr />
      <hr />
      <h2>ScCall read with Array parameter</h2>
      <Form
        initialValues={{
          contract: 'b4c21cf0d9a33613a63e6af4b5cb95e9d532d3eb',
          method: 'Hello',
          parameter0: '5',
          parameter0type: 'Integer',
          parameter1: '6',
          parameter1type: 'Integer'
        }}
        onSubmit={onScCallReadArray}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h4>Contract</h4>
            <Field name="contract" component="input" />

            <h4>Method</h4>
            <Field name="method" component="input" />

            <h4>Parameters</h4>
            <div>First parameter is array containing two items:</div>
            <div key="0">
              <label>Type</label>
              <Field name="parameter0type" component="select">
                <option value="Boolean">Boolean</option>
                <option value="Integer">Integer</option>
                <option value="ByteArray">ByteArray</option>
                <option value="String">String</option>
              </Field>
              <label>Value</label>
              <Field name="parameter0" component="input" />
            </div>
            <div key="1">
              <label>Type</label>
              <Field name="parameter1type" component="select">
                <option value="Boolean">Boolean</option>
                <option value="Integer">Integer</option>
                <option value="ByteArray">ByteArray</option>
                <option value="String">String</option>
              </Field>
              <label>Value</label>
              <Field name="parameter1" component="input" />
            </div>
            <br />
            <br />
            <button type="submit">Call SC ReadOnly</button>
          </form>
        )}
      />
      <hr />
      <hr />
      <h2>ScCall read with Map parameter</h2>
      <Form
        initialValues={{
          contract: 'c6387b0abb96e384a3928fbca01e8e6f5f89a6bb',
          method: 'testMap',
          parameter0: '5',
          parameter0name: 'val1',
          parameter0type: 'Integer',
          parameter1: '6',
          parameter1name: 'val2',
          parameter1type: 'Integer'
        }}
        onSubmit={onScCallReadMap}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h4>Contract</h4>
            <Field name="contract" component="input" />

            <h4>Method</h4>
            <Field name="method" component="input" />

            <h4>Parameters</h4>
            <div>First parameter is Map containing two items:</div>
            <div key="0">
              <label>Type</label>
              <Field name="parameter0type" component="select">
                <option value="Boolean">Boolean</option>
                <option value="Integer">Integer</option>
                <option value="ByteArray">ByteArray</option>
                <option value="String">String</option>
              </Field>
              <label>Name</label>
              <Field name="parameter0name" component="input" />
              <label>Value</label>
              <Field name="parameter0" component="input" />
            </div>
            <div key="1">
              <label>Type</label>
              <Field name="parameter1type" component="select">
                <option value="Boolean">Boolean</option>
                <option value="Integer">Integer</option>
                <option value="ByteArray">ByteArray</option>
                <option value="String">String</option>
              </Field>
              <label>Name</label>
              <Field name="parameter1name" component="input" />
              <label>Value</label>
              <Field name="parameter1" component="input" />
            </div>
            <br />
            <br />
            <button type="submit">Call SC ReadOnly</button>
          </form>
        )}
      />
      <hr />
      <h2>ScDeploy</h2>
      <Form
        initialValues={{
          code:
            '57c56b6c766b00527ac46c766b51527ac4616c766b00c303416464876c766b52527ac46c766b52c3645d00616c766b51c3c0529c009c6c766b55527ac46c766b55c3640e00006c766b56527ac46243006c766b51c300c36c766b53527ac46c766b51c351c36c766b54527ac46c766b53c36c766b54c3617c6521006c766b56527ac4620e00006c766b56527ac46203006c766b56c3616c756653c56b6c766b00527ac46c766b51527ac46151c576006c766b00c36c766b51c393c461681553797374656d2e52756e74696d652e4e6f74696679616c766b00c36c766b51c3936c766b52527ac46203006c766b52c3616c7566',
          name: 'Test contract',
          version: '1.0.0',
          author: 'Mr. Nobody',
          email: 'nobody@nowhere.com',
          description: 'Just a plain contract',
          needStorage: false,
          gasPrice: '500',
          gasLimit: '100000000'
        }}
        onSubmit={onScDeploy}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h4>code</h4>
            <Field name="code" component="textarea" />

            <h4>name</h4>
            <Field name="name" component="input" />

            <h4>version</h4>
            <Field name="version" component="input" />

            <h4>author</h4>
            <Field name="author" component="input" />

            <h4>email</h4>
            <Field name="email" component="input" />

            <h4>description</h4>
            <Field name="description" component="input" />

            <h4>need storage</h4>
            <Field name="needStorage" component="input" type="checkbox" />

            <h4>Gas price</h4>
            <Field name="gasPrice" component="input" type="number" />

            <h4>Gas limit</h4>
            <Field name="gasLimit" component="input" type="number" />

            <br />
            <br />
            <button type="submit">Deploy SC</button>
          </form>
        )}
      />
      <hr />
      <button onClick={onBack}>Back</button>
    </div>
  );
};
