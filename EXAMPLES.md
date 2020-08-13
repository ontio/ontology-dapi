
### Retrieve user account
```
const account = await client.api.asset.getAccount();
```

### Retrieve arbitrary transaction
```
const transaction = await client.api.network.getTransaction({
  txHash: '314e24e5bb0bd88852b2f13e673e5dcdfd53bdab909de8b9812644d6871bc05f'
});
```

### Retrieve balance of an account
```
const balance = await client.api.network.getBalance({ address: 'AcyLq3tokVpkMBMLALVMWRdVJ83TTgBUwU' });
```

### Retrieve dAPI provider information
```
const result = await client.api.provider.getProvider();
```

### Initialise a transfer
```
const to = 'AXCyYV4DNmmsqZn9qJEqHqpacVxcr7X7ns';
const asset = 'ONT';
const amount = 1000;
const result = await client.api.asset.send({ to, asset, amount });
```

### Initialise Smart contract call
```
import { client, Parameter } from '@ont-dev/ontology-dapi';

const scriptHash = 'fe7a542bd4f1ae71d42c4b15480fb2f421c7631b';
const operation = 'Add';
const args: Parameter[] = [{ type: 'Integer', value: 5 }, { type: 'Integer', value: 4 }];
const gasPrice = 500;
const gasLimit = 30000;
    
const result = await client.api.smartContract.invoke({ scriptHash, operation, args, gasPrice, gasLimit });
```

### Initialise Readonly Smart contract call
```
import { client, Parameter } from '@ont-dev/ontology-dapi';

const scriptHash = 'fe7a542bd4f1ae71d42c4b15480fb2f421c7631b';
const operation = 'Add';
const args: Parameter[] = [{ type: 'Integer', value: 5 }, { type: 'Integer', value: 4 }];
    
const result = await client.api.smartContract.invokeRead({ scriptHash, operation, args });
```
